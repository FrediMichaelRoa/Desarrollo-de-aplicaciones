import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const localImages = [
  require('../../assets/home.webp')
];
const logo = require('../../assets/logo.png');

const Home = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={logo}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientButton}
        >
          <Text style={styles.buttonText}>NEW IN</Text>
        </LinearGradient>
      </TouchableOpacity>
      <View style={styles.imagesContainer}>
        {localImages.map((image, index) => (
          <Image
            key={index}
            source={image}
            style={styles.image}
            resizeMode="cover"
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  logo: {
    width: 370, // Ancho del logo
    height: 370, // Alto del logo
  },
  buttonContainer: {
    position: 'absolute',
    top: "80%", // Ajusta esta posición según sea necesario
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  gradientButton: {
    width: 100,
    height: 50,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imagesContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%', // Ancho de cada imagen (ajustable según tus necesidades)
    height: '100%', // Alto de cada imagen (ajustable según tus necesidades)
  },
});

export default Home;
