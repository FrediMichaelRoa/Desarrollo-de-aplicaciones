import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../global/colors';
import { useGetProfileimageQuery } from '../services/shopServices';
import { setCameraImage, clearUser } from '../features/User/UserSlice';
import { useDB } from '../hooks/useDB';

const MyProfile = ({ navigation }) => {
  const dispatch = useDispatch();
  const { imageCamera, localId, email } = useSelector((state) => state.auth.value);
  const { data: imageFromBase } = useGetProfileimageQuery(localId);
  const { truncateSessionTable } = useDB();

  const handleEditProfile = () => {
    navigation.navigate('Image Selector');
  };

  const handleEditGallery = () => {
    navigation.navigate('Image Selector', { fromGallery: true });
  };

  const defaultImageRoute = require("../../assets/user.png");

  const signOut = () => {
    try {
      const response = truncateSessionTable();
      // console.log(response)
      dispatch(clearUser());
    } catch (error) {
      console.log({ errorSignOutDB: error });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={imageFromBase?.image ? { uri: imageFromBase.image } : imageCamera ? { uri: imageCamera } : defaultImageRoute}
          style={styles.img}
          resizeMode="cover"
        />
        <Pressable style={styles.cameraIcon} onPress={handleEditProfile}>
          <Ionicons name="camera" size={24} color={colors.white} />
        </Pressable>
      
      </View>
      <View style={styles.TextContainer}>
        <Text style={styles.TextLeft}>User data</Text>
      </View>
      <View style={styles.Cardcontainer}>
        <Text style={styles.cardText}>Email: {email}</Text>
      </View>
      <Pressable style={styles.buttonText} onPress={signOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </Pressable>
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
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 5,
  },
  galleryIcon: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 5,
  },
  Cardcontainer: {
    padding: 10,
    margin: 10,
    width: '100%',
    height: '40%',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: 20,
  },
  TextLeft: {
    fontSize: 20,
  },
});

export default MyProfile;
