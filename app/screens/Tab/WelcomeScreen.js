import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import AppText from '../../components/AppText';
import { getUser } from '../../storage/UserStorage';
import AppButton from "../../components/AppButton";
import colors from "../../config/colors";

function WelcomeScreen({navigation}) {
    const [user, setUser] = useState({});
    useEffect(() => {
        getUser().then((user) => {
            setUser(user);
        });
    }, []);

    return (
        <ImageBackground
            source={require('../../../assets/background.jpg')} // Replace with your background image
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <AppText style={styles.welcomeText}>
                    Welcome {user.name ? user.name : 'there'} ! Ready to discover your next delicious meal?{"\n\n"}
                    Let's start by exploring our Recipes section and find your favorite dish!
                </AppText>
                <View style={styles.letsGoButton}>
                    <AppButton title="Let's go!" onPress={() => {navigation.reset({index: 0, routes: [{name: 'Meal'}]});}}/>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'top',
        //abaisser le titre
        paddingTop: 10,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    welcomeText: {
        textAlign: 'center',
        paddingBottom: 20,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        lineHeight: 40,
    },
    userInfo: {
        color: 'white',
        fontSize: 18,
        marginVertical: 5,
    },
    letsGoButton: {
        width: '50%',
        height: 50,
        marginTop: 300,
    },
});

export default WelcomeScreen;