import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, useWindowDimensions, Pressable } from "react-native";
import { colors } from "../global/colors";
import Counter from "../components/Counter";
import { useGetProductByIdQuery } from "../services/shopServices";
import { useDispatch } from "react-redux";
import { addCartItem } from "../features/Cart/CartSlice";

const ItemDetail = ({ route, navigation }) => {
  const { width, height } = useWindowDimensions();
  const [orientation, setOrientation] = useState("portrait");
  const [quantity, setQuantity] = useState(1);
  const { productoId: idSelected } = route.params;

  const dispatch = useDispatch();

  const { data: product, error, isLoading } = useGetProductByIdQuery(idSelected);

  useEffect(() => {
    if (width > height) setOrientation("landscape");
    else setOrientation("portrait");
  }, [width, height]);

  const handleAddCart = () => {
    dispatch(addCartItem({ ...product, quantity }));
  };

  const handleSizeSelection = (size) => {
    console.log("Selected size:", size);
  };

  return (
    <View style={orientation === "portrait" ? styles.mainContainer : styles.mainContainerLandscape}>
      {product && (
        <View style={styles.content}>
          <Image
            source={{ uri: product.images[0] }}
            style={orientation === "portrait" ? styles.image : styles.imageLandscape}
            resizeMode="cover"
          />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>${product.price}</Text>
          </View>
          <Text style={styles.description}>{product.description}</Text>
          <View style={styles.sizeAndCounterContainer}>
            <View style={styles.sizeButtons}>
              <Pressable style={[styles.sizeButton, { backgroundColor: colors.Purple }]} onPress={() => handleSizeSelection('L')}>
                <Text style={styles.sizeButtonText}>L</Text>
              </Pressable>
              <Pressable style={[styles.sizeButton, { backgroundColor: colors.Purple }]} onPress={() => handleSizeSelection('M')}>
                <Text style={styles.sizeButtonText}>M</Text>
              </Pressable>
              <Pressable style={[styles.sizeButton, { backgroundColor: colors.Purple }]} onPress={() => handleSizeSelection('S')}>
                <Text style={styles.sizeButtonText}>S</Text>
              </Pressable>
            </View>
            <Counter value={quantity} onChange={setQuantity} style={styles.counter} />
          </View>
          <Pressable style={styles.button} onPress={handleAddCart}>
            <Text style={styles.buttonText}>Add to cart</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop:50,
    backgroundColor: colors.Background,
 // Alineación con el header
  },
  mainContainerLandscape: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 10,
    marginTop: 10, // Alineación con el header
  },
  content: {
    width: "80%",
    maxWidth: 600, // Limita el ancho máximo para centrar mejor
    alignItems: "center",
  },
  image: {
    width: 350,
    height: 350,
  },
  imageLandscape: {
    width: "45%",
    height: 370,
  },
  titleContainer: {
    marginTop: 35, // Alineación con el header
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 10,
  },
  title: {
    textAlign: "left",
    fontSize: 25,
    textTransform: "uppercase",
  },
  price: {
    textAlign: "right",
    fontSize: 25,
  },
  description: {
    width: "100%",
    textAlign: "left",
    fontSize: 18,
    marginVertical: 10,
  },
  sizeAndCounterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  sizeButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sizeButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5, // Espacio horizontal entre los botones
  },
  sizeButtonText: {
    color: 'white',
    fontSize: 20,
  },
  counter: {
    marginLeft: 15, // Espacio a la izquierda del Counter
  },
  button: {
    width: '100%',
    marginTop: 20,
    padding: 15,
    backgroundColor: colors.Purple,
    borderRadius: 8,
  },
  buttonText: {
    color: colors.black,
    textAlign: "center",
    fontSize: 20,
    textTransform: "uppercase",
  },
});
