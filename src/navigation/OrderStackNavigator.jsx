import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Order from "../screens/Order";
import Header from "../components/Header";
const Stack = createNativeStackNavigator();

const OrderStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="OrderScreen"
      
    >
      <Stack.Screen 
      name="OrderScreen" 
      component={Order} 
      options={{
        header: ({ navigation, route }) => (
          <Header title="Checkout" /> // Aquí utilizas el componente Header con los estilos deseados
        ),
      }}
      />
    </Stack.Navigator>
  );
};

export default OrderStackNavigator;
