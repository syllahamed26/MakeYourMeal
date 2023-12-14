import React from 'react';

import {Dimensions, Image, StyleSheet, View} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const Card = (recipe) => {
    // I want a card for a recipe with an image
    return (
        <View style={styles.container}>
        <View style={styles.card}>
            <Image style={styles.image} source={{uri: recipe.recipe.recipe.image}}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{recipe.recipe.recipe.label}</AppText>
                <AppText style={styles.subTitle}>{recipe.recipe.recipe.source}</AppText>
            </View>
        </View>
        </View>
    );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: windowWidth * 0.9,
        borderRadius: 20,
        backgroundColor: colors.white,
        marginBottom: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 8,
        overflow: 'hidden',
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
    },
    title: {
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary,
    },
    subTitle: {
        color: colors.secondary,
        fontSize: 16,
        fontWeight: '500',
    },
});

export default Card;