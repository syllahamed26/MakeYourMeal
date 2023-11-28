import React from 'react';
import Screen from "../../components/Screen";
import {Image} from "react-native";

function ForgotPasswordScreen(props) {
    return (
        <Screen>
            <Image style={styles.logo} source={require("../../../assets/cooking-96.png")} />
        </Screen>
    );
}

export default ForgotPasswordScreen;