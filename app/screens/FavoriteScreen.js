import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from "react-native";
import {getFavorites, isFavorite, removeFavorite, storeFavorite} from "../storage/FavoriteStorage";
import Card from "../components/Card";
import LoaderComponent from "../components/Loader";

function FavoriteScreen(props) {
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(false);

    const refreshFavorites = async () => {
        setLoading(true);
        const favorites = await getFavorites();
        setFavorites(favorites);
        setLoading(false);
    }

    useEffect(() => {
        refreshFavorites();
    }, []);

    const removeFavoriteHandler = async (favorite) => {
        await removeFavorite(favorite);
        await refreshFavorites();
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal: 10,
                        paddingTop: 10,
                    }}
                    contentInsetAdjustmentBehavior="automatic">

                    {
                        favorites &&
                        favorites.map((favorite, index) => (
                            <Card key={index} recipe={favorite.recipe} displayStar={false} removeFavoriteHandler={removeFavoriteHandler}/>
                        ))
                    }

                    <LoaderComponent loading={loading} />
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default FavoriteScreen;