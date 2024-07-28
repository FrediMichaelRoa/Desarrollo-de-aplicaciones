import { StyleSheet, View, SafeAreaView, StatusBar, Platform, Text } from "react-native";
// import { useFonts } from "expo-font";
import { colors } from "./src/global/colors";
import Navigator from "./src/navigation/Navigator";
import { Provider } from "react-redux";
import store from "./src/store";
import { useDB } from "./src/hooks/useDB";
import { useEffect } from "react";

export default function App() {

  const {initDB} = useDB()

  useEffect(()=>{
    initDB()
  })

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.iOS,
  },
});