import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemListCategory from "../screens/ItemListCategory";
import ItemDetail from "../screens/ItemDetail";
import Categories from "../screens/Categories";
import Header from "../components/Header"; // Asegúrate de importar los estilos del Header aquí

const Stack = createNativeStackNavigator();

const CategoriesStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          header: ({ navigation, route }) => (
            <Header title={route.name} navigation={navigation} /> // Aquí utilizas el componente Header con los estilos deseados
          ),
        }}
      />
      <Stack.Screen
        name="ItemListCategory"
        component={ItemListCategory}
        options={{
          header: ({ navigation, route }) => (
            <Header title="Products" navigation={navigation} /> // Puedes personalizar cada encabezado según necesites
          ),
        }}
      />
      <Stack.Screen
        name="ItemDetail"
        component={ItemDetail}
        options={{
          header: ({ navigation, route }) => (
            <Header title="Detail" navigation={navigation} /> // También puedes pasar propiedades adicionales según necesites
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default CategoriesStackNavigator;
