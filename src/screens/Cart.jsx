import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';
import { usePostOrderMutation } from '../services/shopServices';
// import CartData from "../data/cart.json"
import { calculateSubtotal, calculateShipping, calculateTotal } from '../features/Cart/cartUtils';

const Cart = () => {

  const {items: CartData, total} = useSelector((state) => state.cart.value)

  const [triggerPostOrder, result] = usePostOrderMutation()

  const onConfirmOrder = () => {
    // logica de confirmacion de orden
    triggerPostOrder({items: CartData, user: "Pedrito", total})
  }

  const subtotal = calculateSubtotal(CartData);
  const shipping = calculateShipping(CartData);
  const totalAmount = calculateTotal(subtotal, shipping);

  return (
    <View style={styles.container}>
      
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

export default Cart

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 100,
  },
  checkoutCard: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#f8f8f8',
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
