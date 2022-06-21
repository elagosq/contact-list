import { TouchableOpacity,View, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const backButton = ({ icon,size,color, onPress }) => {
    return (
     <View style={styles.contanedorBoton}>
      <TouchableOpacity style={styles.botonBack} onPress={onPress}>
        <MaterialIcons name={icon} size={size} color={color} /> 
      </TouchableOpacity>  
     </View>     
    );
}

const styles = StyleSheet.create({
  contanedorBoton:{
   flexDirection:'row',
   justifyContent:'flex-end',
   marginBottom: 20 
  },  
  botonBack:{
    flexDirection:'row',
    justifyContent:'center',
    borderRadius:100,
    width:40,
    backgroundColor:'red',
    color:'white'
  }
});

export default backButton;