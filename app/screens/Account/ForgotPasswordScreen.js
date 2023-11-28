import React from 'react';
import Screen from "../../components/Screen";
import {Image, StyleSheet} from "react-native";
import * as Yup from "yup";
import AppFormField from "../../components/forms/AppFormField";
import AppForm from "../../components/forms/AppForm";
import SubmitButton from "../../components/forms/SubmitButton";
import { resetPassword } from '../../services/auth/ResetPasswordService';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
  });

function ForgotPasswordScreen({navigation}) {

    const handleSendEmailResetPassword = async (values) => {
        try {
            const resetSuccessful = await resetPassword(values.email);
            if (resetSuccessful) {
                navigation.navigate('Login');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }

    }
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../../../assets/cooking-96.png")} />

            <AppForm
            initialValues={{ email: ""}}
            onSubmit={(values) => handleSendEmailResetPassword(values)}
            validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />

                <SubmitButton title="Reinitialized password" style={styles.submitButton} />

            </AppForm>

        </Screen>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 96,
        height: 96,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    },

    container: {
        padding: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },





})




export default ForgotPasswordScreen;