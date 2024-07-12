import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItemQuantity } from "../features/Cart/CartSlice";
import { colors } from "../global/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import Counter from "../components/Counter";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeCartItem(cartItem.id));
  };

  const handleQuantityChange = (quantity) => {
    dispatch(updateCartItemQuantity({ id: cartItem.id, quantity }));
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: cartItem.images[0] }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{cartItem.title}</Text>
        <Text style={styles.text2}>${cartItem.price}</Text>
        <Counter value={cartItem.quantity} onChange={handleQuantityChange} />
      </View>
      <Pressable style={styles.iconContainer} onPress={handleRemove}>
        <FontAwesome5 name="trash-alt" size={30} color="red" />
      </Pressable>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  card: {
    height: 125,
    backgroundColor: colors.white,
    padding: 10,
    margin: 10,
    flexDirection: "row",
    position: 'relative',
  },
  imageContainer: {
    width: 100,
    height: 100,
    marginRight: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  text: {
    fontFamily: "Josefin",
    fontSize: 18,
    color: colors.green300,
    textTransform: "uppercase",
  },
  text2: {
    paddingVertical: 5,
    fontFamily: "Josefin",
    fontSize: 18,
    color: colors.black,
  },
  iconContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 1,
  },
});
