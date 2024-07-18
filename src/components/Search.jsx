import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../global/colors";
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const Search = ({ onSearch = () => {}, error = '', goBack = () => {} }) => {
  const [keyword, setKeyword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={keyword}
          onChangeText={setKeyword}
        />
        <View style={styles.searchIcon}>
          <FontAwesome5 name="search" size={24} color="black" />
        </View>
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
    width: "85%",
    position: "relative",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: '100%',
    position: 'relative', // Mantener relativo para que el icono esté dentro
  },
  input: {
    flex: 1,
    padding: 8,
    paddingRight: 40, // Espacio para el icono de búsqueda
    fontSize: 18,
    backgroundColor: colors.Input,
    color: "#5E5E5E",
    borderRadius: 30,
  },
  searchIcon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -12 }], // Centrar verticalmente el icono
  },
  errorText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: "Josefin",
    marginTop: 8,
  },
});
