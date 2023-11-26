import React from "react";
import {StyleSheet, Image, View} from "react-native";
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
          <SubmitButton title="Login" />
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
});

export default LoginScreen;
