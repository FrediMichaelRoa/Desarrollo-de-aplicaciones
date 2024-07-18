import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemListCategory from "../screens/ItemListCategory";
import ItemDetail from "../screens/ItemDetail";
import Categories from "../screens/Categories";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const CategoriesStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={({ navigation, route }) => ({
          header: () => (
            <Header
              title={route.name}
              navigation={navigation}
              canGoBack={false} // No debería haber botón de retroceso en la pantalla inicial
            />
          ),
        })}
      />
      <Stack.Screen
        name="ItemListCategory"
        component={ItemListCategory}
        options={({ navigation, route }) => ({
          header: () => (
            <Header
              title="Products"
              navigation={navigation}
              canGoBack={true} // Habilitar el botón de retroceso en esta pantalla
            />
          ),
        })}
      />
      <Stack.Screen
        name="ItemDetail"
        component={ItemDetail}
        options={({ navigation, route }) => ({
          header: () => (
            <Header
              title="Detail"
              navigation={navigation}
              canGoBack={true} // Habilitar el botón de retroceso en esta pantalla
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default CategoriesStackNavigator;
