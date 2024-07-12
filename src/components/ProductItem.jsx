import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../global/colors";

import { useDispatch } from "react-redux";
import { setItemSelected } from "../features/Shop/ShopSlice";

const ProductItem = ({
  product,
  navigation
}) => {

  const dispatch = useDispatch()

  const handleNavigate = () => {
    dispatch(setItemSelected(product.title))
    navigation.navigate("ItemDetail", { productoId: product.id });
  }

  return (
    <View style={styles.container}>
      <Card style={styles.additionalStylesCard}>
        <Pressable
          style={styles.pressable}
          onPress={handleNavigate}
        >
          
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{ uri: product.images[0] }}
          />
        </Pressable>
      </Card>
      <Text style={styles.textCategory}>{product.title}</Text>
    </View>
     
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 10,
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 8,
  },
  additionalStylesCard: {
    height: 170,
    width: 170,
    justifyContent: "center",
    alignItems: "center",
  },
  textCategory: {
    color: colors.black,
    textTransform: "uppercase",
    width: '100%',
    paddingTop:20,
  },
  pressable: {
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  }
});
