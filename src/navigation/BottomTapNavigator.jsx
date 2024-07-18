import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import CategoriesStackNavigator from './CategoriesStackNavigator';
import CartStackNavigator from './CartStackNavigator';
import OrderStackNavigator from './OrderStackNavigator';
import MyProfileStackNavigator from './MyProfileStackNavigator';
import { FontAwesome5 } from '@expo/vector-icons';
import { View } from 'react-native';
import Header from '../components/Header';
import { colors } from '../global/colors';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: () => {
          return <Header title={route.name} />;
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          height: 60,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="HomeStack"
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
        name="CategoriesStack"
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
        name="CartStack"
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
        name="OrderStack"
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
        name="MyProfileStack"
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
