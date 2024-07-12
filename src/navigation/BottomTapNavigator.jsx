import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import CartStackNavigator from './CartStackNavigator';
import OrderStackNavigator from './OrderStackNavigator';
import Header from '../components/Header';
import { colors } from '../global/colors';
import { FontAwesome5 } from "@expo/vector-icons";
import MyProfileStackNavigator from './MyProfileStackNavigator';
import CategoriesStackNavigator from './CategoriesStackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: () => {
          return <Header title={route.name} />;
        },
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome5 name="home" size={24} color={focused ? "black" : colors.lightGray} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome5 name="layer-group" size={24} color={focused ? "black" : colors.lightGray} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome5 name="shopping-bag" size={24} color={focused ? "black" : colors.black} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Checkout"
        component={OrderStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome5 name="receipt" size={24} color={focused ? "black" : colors.lightGray} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={MyProfileStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome5 name="user-alt" size={24} color={focused ? "black" : colors.lightGray} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    height: 60,
  },
});
