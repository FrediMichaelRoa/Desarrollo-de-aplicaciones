import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../global/colors"; 

const InputForm = ({ label, onChange, error = "", isSecure = false }) => {
  const [input, setInput] = useState("");
  const onChangeText = (text) => {
    setInput(text);
    onChange(text);
  };
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.subtitle}>{label}</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  subtitle:{
    fontSize:20,
    color:"gray",
  
  },
  error: {
    paddintTop: 2,
    fontSize: 16,
    color: "red",
    fontFamily: "Josefin",
    fontStyle: "italic",
  },
  input: {
    padding: 10,
    width: '80%',
    height:50,
    marginTop:20,
    borderRadius: 30,
    backgroundColor:'#DFDBF9',
    color:"gray",
  },
});
