import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from "react-native";
import AppText from "../../components/AppText";
import {getUser} from "../../storage/UserStorage";

function WelcomeScreen(props) {
    const [user, setUser] = useState({});
    useEffect(() => {
        getUser().then(user => {
            setUser(user);
            console.log(user)
        });
    }, []);

    return (
        <View style={styles.container}>
            <AppText style={{
                textAlign: 'center',
                paddingBottom: 20,
            }}>Welcome to the app where we can help you find your next meal!</AppText>
            <AppText>{user.name}</AppText>
            <AppText>{user.email}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default WelcomeScreen;