import React from 'react';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';
import { usePostOrderMutation } from '../services/shopServices';
import { calculateSubtotal, calculateShipping, calculateTotal } from '../features/Cart/cartUtils';
import { colors } from '../global/colors';

const Cart = () => {
  const { items: CartData, total } = useSelector((state) => state.cart.value);
  const [triggerPostOrder, result] = usePostOrderMutation();

  const onConfirmOrder = () => {
    // Lógica de confirmación de orden
    triggerPostOrder({ items: CartData, user: "Pedrito", total });
  };

  const subtotal = calculateSubtotal(CartData);
  const shipping = calculateShipping(CartData);
  const totalAmount = calculateTotal(subtotal, shipping);

  if (CartData.length === 0) {
    return (
      <View style={[styles.container, { backgroundColor: colors.Background }]}>
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartText}>Your cart is empty!</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.Background }]}>
      <FlatList
        data={CartData}
        renderItem={({ item }) => {
          return <CartItem cartItem={item} />;
        }}
        keyExtractor={(producto) => producto.id}
      />

      <View style={styles.checkoutCard}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Sub total:</Text>
          <Text style={styles.summaryText}>${subtotal.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Shipping:</Text>
          <Text style={styles.summaryText}>${shipping.toFixed(2)}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Bag total:</Text>
          <Text style={styles.summaryText}>${totalAmount.toFixed(2)}</Text>
        </View>
        <Pressable style={styles.checkoutButton} onPress={onConfirmOrder}>
          <Text style={styles.checkoutButtonText}>CHECKOUT</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
  checkoutCard: {
    height: 255,
    width: 412,
    padding: 20,
    margin: 50,
    borderRadius: 10,
    backgroundColor: '#fffff',
    borderWidth: 1,
    borderColor: '#a29bfe',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  summaryText: {
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#a29bfe',
    marginVertical: 10,
  },
  checkoutButton: {
    marginTop: 20,
    backgroundColor: '#a29bfe',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
