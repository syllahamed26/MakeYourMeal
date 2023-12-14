import React, { useState } from 'react';
import { Animated, SafeAreaView, StatusBar, View, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { recipeSearch } from '../services/API/RecipeService';
import Card from '../components/Card';
import LoaderComponent from '../components/Loader';

console.disableYellowBox = true;

const RecipeScreen = () => {
    const [recipes, setRecipes] = useState(null);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const onSubmit = async (ingredients) => {
        setLoading(true);
        const recipes = await recipeSearch(ingredients);
        setRecipes(recipes);
        setLoading(false);
    };

    const onChangeHandler = (searchQuery) => {
        setSearchQuery(searchQuery);
    };

    const [scrollYValue] = useState(new Animated.Value(0));

    return (
        <View style={{ flex: 1 }}>
            <SearchBar
                placeholder='Search'
                lightTheme={true}
                placeholderTextColor={'#888888'}
                onChangeText={onChangeHandler}
                onSubmitEditing={() => onSubmit(searchQuery)}
                value={searchQuery}
            />
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal: 10,
                        paddingTop: 10,
                    }}
                    contentInsetAdjustmentBehavior="automatic">

                    {recipes &&
                        recipes.map((recipe, index) => (
                            <Card key={index} recipe={recipe} />
                        ))}

                    <LoaderComponent loading={loading} />
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

export default RecipeScreen;