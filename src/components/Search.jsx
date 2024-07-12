import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../global/colors";
import { useState } from "react";
import { FontAwesome5, FontAwesome6, AntDesign } from "@expo/vector-icons";

const Search = ({ onSearch = () => {}, error = '', goBack = () => {} }) => {
  const [keyword, setKeyword] = useState("");

  return (
    <View style={styles.container}>
      
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={keyword}
          onChangeText={setKeyword}
        />
        <Pressable onPress={() => onSearch(keyword)} style={styles.searchIcon}>
          <FontAwesome5 name="search" size={24} color="black" />
        </Pressable>
      
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
    paddingTop:12,
  },
  inputContainer: {
    
  },
  input: {
    width: '100%',
    padding: 8,
    paddingRight: 40, // Añadir espacio a la derecha para el icono de búsqueda
    fontSize: 18,
    backgroundColor: colors.Input,
    color: "#5E5E5E",
    borderRadius: 30,
  },
  searchIcon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -12 }], // Centrar el icono verticalmente
  },
  errorText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: "Josefin",
  },
});
