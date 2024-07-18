import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileimageQuery } from '../services/shopServices';
import { clearUser } from '../features/User/UserSlice'; 
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../global/colors';

const MyProfile = ({ navigation }) => {
  const dispatch = useDispatch();
  const { imageCamera, localId, email, firstName, lastName, phone } = useSelector((state) => state.auth.value);
  const { data: imageFromBase } = useGetProfileimageQuery(localId);

  const launchCamera = () => {
    navigation.navigate("Image Selector");
  };

  const signOut = async () => {
    try {
      dispatch(clearUser());
      navigation.navigate("Login"); // Redirige al usuario a la pantalla de inicio de sesión
    } catch (error) {
      console.log({ errorSignOutDB: error });
    }
  };

  const defaultImageRoute = require("../../assets/user.png");

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={imageFromBase?.image ? { uri: imageFromBase.image } : imageCamera ? { uri: imageCamera } : defaultImageRoute}
          style={styles.img}
          resizeMode="cover"
        />
        <Pressable style={styles.cameraIcon} onPress={launchCamera}>
          <Ionicons name="camera" size={24} color={colors.white} />
        </Pressable>
      </View>
      <View style={styles.TextContainer}>
        <Text style={styles.TextLeft}>User data</Text>
        <Pressable onPress={() => navigation.navigate("EditProfile")}>
          <Text style={styles.TextRight}>Edit profile</Text>
        </Pressable>
      </View>
      <View style={styles.Cardcontainer}>
        <Text style={styles.cardText}>First Name: {firstName}</Text>
        <Text style={styles.cardText}>Last Name: {lastName}</Text>
        <Text style={styles.cardText}>Phone: {phone}</Text>
        <Text style={styles.cardText}>Email: {email}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable onPress={signOut}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.Background,
    padding: 20,
  },
  profileContainer: {
    marginTop: 40,
    marginBottom: 50,
    position: 'relative',
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: "black",
    borderRadius: 20,
    padding: 5,
  },
  Cardcontainer: {
    padding: 10,
    margin: 10,
    width: '100%',
    borderRadius: 19,
    backgroundColor: '#f8f8f8',
    borderWidth: 1,
    borderColor: '#a29bfe',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 18,
    color: colors.primary,
    marginVertical: 5,
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: colors.Header,
    paddingVertical: 10,
  },
  TextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: 20,
  },
  TextLeft: {
    fontSize: 20,
  },
  TextRight: {
    fontSize: 18,
    color: colors.primary,
  }
});

export default MyProfile;
