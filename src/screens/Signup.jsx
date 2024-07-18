// components/Signup.js
import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { colors } from "../global/colors";
import Button from "../components/Button";
import InputForm from "../components/InputForm";
import { useSignUpMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../features/User/UserSlice"; 
import { signupSchema } from "../validations/singUpScheme";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const [triggerSignUp, result] = useSignUpMutation();

  useEffect(() => {
    if (result.isSuccess) {
      const userData = {
        email: result.data.email,
        idToken: result.data.idToken,
        localId: result.data.localId,
        password: result.data.password,
      };
      dispatch(setUser(userData));
    }
  }, [result]);

  const onSubmit = () => {
    try {
      setErrorMail("");
      setErrorPassword("");
      setErrorConfirmPassword("");
      signupSchema.validateSync({ email, password, confirmPassword });
      triggerSignUp({ email, password, returnSecureToken: true });
    } catch (err) {
      switch (err.path) {
        case "email":
          setErrorMail(err.message);
          break;
        case "password":
          setErrorPassword(err.message);
          break;
        case "confirmPassword":
          setErrorConfirmPassword(err.message);
          break;
        default:
          break;
      }
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Signup</Text>
        <InputForm
          label={"email"}
          onChange={setEmail}
          error={errorMail}
        />
        <InputForm
          label={"password"}
          onChange={setPassword}
          error={errorPassword}
          isSecure={true}
        />
        <InputForm
          label={"confirm password"}
          onChange={setConfirmPassword}
          error={errorConfirmPassword}
          isSecure={true}
        />
        <Button onPress={onSubmit} title="Create Account" />
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.sub}>Already have an account?</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.Background,
  },
  container: {
    width: "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.Purple,
    gap: 15,
    paddingVertical: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
  },
  sub: {
    fontSize: 14,
    color: "black",
  },
  subLink: {
    fontSize: 14,
    color: "blue",
  },
});

export default Signup;
