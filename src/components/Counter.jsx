import React, { useState, useEffect } from "react";
import { TextInput, Pressable, StyleSheet, Text, View } from "react-native";

const Counter = ({ value = 1, onChange }) => {
  const [inputValue, setInputValue] = useState(value.toString());

  useEffect(() => {
    setInputValue(value.toString());
  }, [value]);

  const handleInputChange = (newValue) => {
    setInputValue(newValue);
    if (!isNaN(Number(newValue)) && Number(newValue) >= 1) {
      onChange(Number(newValue));
    }
  };

  const handleDecrement = () => {
    if (value > 1) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    onChange(value + 1);
  };

  return (
    <View style={styles.counterContainer}>
      <Pressable style={styles.button} onPress={handleDecrement}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={handleInputChange}
        keyboardType="numeric"
      />
      <Pressable style={styles.button} onPress={handleIncrement}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    padding: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#959595",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 40,
    height: 40,
    textAlign: "center",
    fontSize: 16,
    color: "#000",
    borderRadius: 10,
    borderColor: "#959595",
    borderWidth: 1,
    marginHorizontal: 5,
    padding: 0,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Arial",
  },
});
