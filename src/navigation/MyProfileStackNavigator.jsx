import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyProfile from "../screens/MyProfile";
import ImageSelector from "../screens/ImageSelector";
import Header from "../components/Header";

const Stack = createNativeStackNavigator()

const MyProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="My Profile"
      screenOptions={{
        header: ({ navigation, route }) => (
          <Header title="Profile" /> 
        ),
      }}
    >
      <Stack.Screen name="My Profile" component={MyProfile} />
      <Stack.Screen 
      name="Image Selector" 
      component={ImageSelector}
        options={{
        header: ({ navigation, route }) => (
          <Header 
            title="Edit Image"
            navigation={navigation}
            canGoBack={true} />  
        ),
      }} />
    </Stack.Navigator>
  )
}

export default MyProfileStackNavigator