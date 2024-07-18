import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../global/colors';

const Card = ({ children, style }) => {
  return (
    <LinearGradient
      colors={['#542F9B', '#E590CD']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ ...styles.card, ...style }}
    >
      {children}
    </LinearGradient>
  );
};

export default Card;

// Estilos de Card Categories
const styles = StyleSheet.create({
  card: {
    width: 350, 
    height: 40, 
    boxShadow: `4px 4px 4.65px ${colors.Header}`, // Sombra combinada en una sola propiedad
    elevation: 4, // Elevación para sombras en Android
    marginRight: 10,
    justifyContent: 'center', 
    alignItems: 'start', 
    borderRadius: 10, 
  },
});
