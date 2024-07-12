import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cart from '../screens/Cart'
import Header from '../components/Header';

const Stack = createNativeStackNavigator()

const CartStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="CartScreen"
      
    >
      <Stack.Screen 
      name="CartScreen" 
      component={Cart}
      options={{
        header: ({ navigation, route }) => (
          <Header title="Cart" /> // Aquí utilizas el componente Header con los estilos deseados
        ),
      }}
      />
    </Stack.Navigator>
  );
}

export default CartStackNavigator
