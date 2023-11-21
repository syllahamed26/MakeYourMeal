import React from 'react';
import {StyleSheet, Image, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import Screen from "../../components/Screen";
import AppForm from "../../components/forms/AppForm";
import * as Yup from "yup";
import AppFormField from "../../components/forms/AppFormField";
import SubmitButton from "../../components/forms/SubmitButton";

import regex from "../../config/regex";
import colors from "../../config/colors";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().matches(regex.email, 'Invalid email').label('Email'),
    password: Yup.string().required().min(4).label('Password'),
    confirmPassword: Yup.string().required().oneOf([Yup.ref('password'), null], 'Passwords must match').label('Confirm Password')
});

function RegisterScreen(props) {
    const handleRegister = (data) => {
        console.log(data.name, data.email, data.password);
        auth()
            .createUserWithEmailAndPassword(data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('That email address is already in use!')
                }

                if (error.code === 'auth/invalid-email') {
                    alert('That email address is invalid!');
                }

                alert(error)
            });
    }

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../../../assets/cooking-96.png')}/>

            <AppForm
                initialValues={{name: '', email: '', password: '', confirmPassword: ''}}
                onSubmit={(values) => {handleRegister(values)}}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='account'
                    name='name'
                    placeholder='Name'
                    textContentType='name'
                />

                <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='email'
                    keyboardType='email-address'
                    name='email'
                    placeholder='Email'
                    textContentType='emailAddress'
                />

                <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='lock'
                    name='password'
                    placeholder='Password'
                    secureTextEntry
                    textContentType='password'
                    width= '90%'
                />

                <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='lock'
                    name='confirmPassword'
                    placeholder='Confirm Password'
                    secureTextEntry
                    textContentType='password'
                    width= '90%'
                />

                <Text style={styles.alreadyAccount}>
                    Have you already account ? Sign in
                </Text>

                <SubmitButton title='Register' style={styles.button}/>
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },
    button: {
        width: '80%',
        height: 50,
    },
    alreadyAccount: {
        padding: 20,
        fontWeight: 'bold',
    }
});

export default RegisterScreen;