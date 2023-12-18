import React, { useState } from 'react';
import { Animated, SafeAreaView, StatusBar, View, ScrollView, Platform } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { recipeSearch } from '../services/API/RecipeService';
import Card from '../components/Card';
import LoaderComponent from '../components/Loader';
import colors from "../config/colors";

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

    const handleCancel = () => {
        setSearchQuery('');
        setRecipes(null);
    }

    return (
        <View style={{ flex: 1 }}>
            <SearchBar
                platform= {Platform.OS === 'ios' ? 'ios' : 'android'}
                placeholder='Search'
                lightTheme={true}
                placeholderTextColor={'#888888'}
                onChangeText={onChangeHandler}
                onSubmitEditing={() => onSubmit(searchQuery)}
                onCancel={() => handleCancel()}
                value={searchQuery}
                cancelButtonProps={{ color: colors.red }}
                cancelButtonTitle={'Cancel'}
                round={true}
                showCancel={true}
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

                    {
                        recipes &&
                        recipes.map((recipe, index) => (
                            <Card key={index} recipe={recipe} displayStar={true}/>
                        ))
                    }

                    {
                        recipes && recipes.length === 0 && !loading &&
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Animated.Text style={{
                                opacity: scrollYValue.interpolate({
                                    inputRange: [0, 125, 250],
                                    outputRange: [1, 1, 0],
                                    extrapolate: 'clamp',
                                }),
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: colors.red,
                                textAlign: 'center',
                            }}>
                                Hum Hum... Seems like we don't have any recipe for you 😢
                            </Animated.Text>
                        </View>
                    }

                    <LoaderComponent loading={loading} />
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

export default RecipeScreen;