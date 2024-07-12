import React from "react";
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, Pressable} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ButtonGradient = ({ onPress, title })=> {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <LinearGradient
                // Button Linear Gradient
                colors={['#542F9B', '#E590CD']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}    
                style={styles.button}
            >
                <Text style={styles.text}>{title}</Text>
            </LinearGradient>
        </Pressable>
    );
}

export default ButtonGradient;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 200,
        marginTop: 50,
    },

    text: {
      fontSize: 14,
      color: '#fff',
      fontWeight: 'bold',
    },
    button: {
        width: '80%',
        height: 50,
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
  });