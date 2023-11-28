import React from "react";
import {StyleSheet, Image, View, Text} from "react-native";
import * as Yup from "yup";

import Screen from "../../components/Screen";
import AppFormField from "../../components/forms/AppFormField";
import AppForm from "../../components/forms/AppForm";
import SubmitButton from "../../components/forms/SubmitButton";

import {signIn} from "../../services/auth/SignInService";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({navigation}) {

const handleLogin = async (values) => {
    try {
        const loginSuccessful = await signIn(values);
        if (loginSuccessful) {
            navigation.navigate('Home');
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
}

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../../../assets/cooking-96.png")} />

      <View style={styles.form}>
        <AppForm
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => handleLogin(values)}
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
          <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
          />

            <View style={styles.passwordForgotContainer}>
                <Text style={styles.passwordForgotText} onPress={() => navigation.navigate('ForgotPassword')}>Forgot your password? </Text>
            </View>

          <SubmitButton title="Login" style={styles.submitButton} />

            <View style={styles.registerContainer}>
                <Text>You do not have an account? </Text>
                <Text style={styles.register} onPress={() => navigation.navigate('Register')}>Register</Text>
            </View>
        </AppForm>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  form: {
    width: "100%",
  },
  registerContainer: {
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'center',
  },
  register: {
      fontWeight: 'bold',
  },
    passwordForgotContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',

    },
    passwordForgotText: {
        fontStyle: 'italic',
    },
    submitButton: {
      marginTop: 30,
    }
});

export default LoginScreen;
