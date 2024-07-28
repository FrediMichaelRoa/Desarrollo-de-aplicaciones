import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import CategoryItem from "../components/CategoryItem";
import { colors } from "../global/colors";
import { useGetCategoriesQuery } from "../services/shopServices";
import Search from "../components/Search";

const Categories = ({ navigation, route }) => {
  const {data: categories} = useGetCategoriesQuery()
  //console.log(data)
  return (
    <View style={styles.flatListContainer}>
{/*       <Counter /> */}
      <Search/>
      <FlatList
      
        showsVerticalScrollIndicator={false}
        keyExtractor={(category) => category}
        data={categories}
        renderItem={({ item }) => (
          <CategoryItem category={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  flatListContainer: {
    width: "100%",
    backgroundColor: colors.Background,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
