import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../global/colors';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { setCameraImage } from '../features/User/UserSlice';
import { usePostProfileImageMutation } from '../services/shopServices';

const ImageSelector = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [triggerPostImage] = usePostProfileImageMutation();
  const dispatch = useDispatch();
  const { localId } = useSelector((state) => state.auth.value);

  const verifyCameraPermission = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    return status === 'granted';
  };

  const verifyGalleryPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    return status === 'granted';
  };

  const pickImageFromCamera = async () => {
    const isCameraOk = await verifyCameraPermission();
    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        base64: true,
        quality: 0.2,
      });

      if (!result.canceled) {
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
      }
    }
  };

  const pickImageFromGallery = async () => {
    const isGalleryOk = await verifyGalleryPermission();
    if (isGalleryOk) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        base64: true,
        quality: 0.2,
      });

      if (!result.canceled) {
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
      }
    }
  };

  const confirmImage = async () => {
    try {
      dispatch(setCameraImage(image));
      await triggerPostImage({ image, localId });
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {image ? (
        <>
          <Image
            style={styles.img}
            resizeMode='cover'
            source={{ uri: image }}
          />
          <Pressable
            onPress={pickImageFromCamera}
            style={({ pressed }) => [styles.btn, { opacity: pressed ? 0.6 : 1 }]}
          >
            <Text style={{ color: "#fff" }}>Take new Photo</Text>
          </Pressable>
          <Pressable
            onPress={pickImageFromGallery}
            style={({ pressed }) => [styles.btn, { opacity: pressed ? 0.6 : 1 }]}
          >
            <Text style={{ color: "#fff" }}>Choose from Gallery</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [styles.btn, { opacity: pressed ? 0.6 : 1 }]}
            onPress={confirmImage}
          >
            <Text style={{ color: "#fff" }}>Confirm photo</Text>
          </Pressable>
        </>
      ) : (
        <>
          <View style={styles.containerPhoto}>
            <Text>No photo to show...</Text>
          </View>
          <Pressable
            onPress={pickImageFromCamera}
            style={({ pressed }) => [styles.btn, { opacity: pressed ? 0.6 : 1 }]}
          >
            <Text style={{ color: "#fff" }}>Take a photo</Text>
          </Pressable>
          <Pressable
            onPress={pickImageFromGallery}
            style={({ pressed }) => [styles.btn, { opacity: pressed ? 0.6 : 1 }]}
          >
            <Text style={{ color: "#fff" }}>Choose from Gallery</Text>
          </Pressable>
        </>
      )}
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.Background,
    padding: 20,
  },
  btn: {
    marginTop: 10,
    backgroundColor: colors.Header,
    width: "80%",
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
  },
  img: {
    marginVertical: 20,
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  containerPhoto: {
    marginVertical: 40,
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.primary,
  },
});
