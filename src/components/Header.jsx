import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { colors } from "../global/colors";
import { AntDesign } from "@expo/vector-icons";

const Header = ({ title, navigation, canGoBack }) => {
  return (
    <View style={styles.container}>
      {canGoBack && (
        <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
          <AntDesign name="left" size={24} color="white" />
        </Pressable>
      )}
      <View style={styles.titleContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    backgroundColor: colors.Header,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  backButton: {
    marginRight: 10,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontSize: 22,
    fontFamily: "Josefin",
    textTransform: "uppercase",
  },
});
