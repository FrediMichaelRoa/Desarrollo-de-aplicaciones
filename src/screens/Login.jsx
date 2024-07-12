import { Pressable, StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import { colors } from "../global/colors";

import ButtonGradient from '../components/Button';
import InputForm from "../components/InputForm";
import { useSignInMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../features/User/UserSlice";

const { width } = Dimensions.get('window');

const Login = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const [triggerSignIn, result] = useSignInMutation();

  useEffect(() => {
    if (result.isSuccess) {
      dispatch(setUser({
        email: result.data.email,
        idToken: result.data.idToken
      }));
    }
  }, [result]);

  const onSubmit = () => {
    triggerSignIn({ email, password, returnSecureToken: true });
  };

  function SvgTop() {
    return (
      <svg
        width="430"
        height="324"
        viewBox="0 0 430 324"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_75_36)">
          <path
            d="M256.169 315.826C319.297 329.722 398.36 301.862 430 286.196V230H1.14038V293.5C60.6094 250.587 177.259 298.457 256.169 315.826Z"
            fill="url(#paint0_linear_75_36)"
            fillOpacity="0.5"
          />
          <path
            d="M204.436 308.627C94.7944 338.066 26.6488 318.618 0 304.77V0H430V304.77C392.882 292.504 314.077 279.189 204.436 308.627Z"
            fill="url(#paint1_linear_75_36)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_75_36"
            x1="423.735"
            y1="231.205"
            x2="409.063"
            y2="363.796"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#542F9B" />
            <stop offset="1" stopColor="#E590CD" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_75_36"
            x1="6.28144"
            y1="4.155"
            x2="160.016"
            y2="408.285"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#542F9B" />
            <stop offset="1" stopColor="#E590CD" />
          </linearGradient>
          <clipPath id="clip0_75_36">
            <rect width="430" height="324" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  return (
    <View style={styles.main}>
      <View style={styles.containerSVG}>
        <SvgTop />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Sign In to your account</Text>
        <InputForm
          style={styles.input}
          placeholder="Username"
          onChange={setEmail}
          error={""}
        />
        <InputForm
          style={styles.input}
          placeholder="Password"
          onChange={setPassword}
          error={""}
          isSecure={true}
        />
        <Pressable>
          <Text style={styles.forgotPassword}>Forgot your password?</Text>
        </Pressable>

        <ButtonGradient title="Login" onPress={onSubmit} />

        <Pressable onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.forgotPassword}>Don't have an account?</Text>
        </Pressable>

      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#f1f1f1',
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F4FE',
  },
  containerSVG: {
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    color: '#34434D',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    color: "gray",
  },
  subLink: {
    fontSize: 14,
    color: "blue",
  },
  input: {
    padding: 10,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#DFDBF9',
    color: "gray",
  },
  forgotPassword: {
    fontSize: 14,
    color: 'gray',
    marginTop: 20,
  },
});
