import React,{ useContext } from 'react';
import { TouchableOpacity,View, StyleSheet, } from "react-native";
import { ThemeContext } from "../context/theme/theme-context";
import { MaterialIcons } from '@expo/vector-icons';

const backButton = ({ icon,size, onPress }) => {
    const { theme } = useContext(ThemeContext);
    return (
     <View style={styles.contanedorBoton}>
      <TouchableOpacity style={[styles.botonBack, { borderColor: theme.colorBorderButton }]} onPress={onPress}>
        <MaterialIcons name={icon} size={size} style={{color:theme.colorIcon}} /> 
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
    borderWidth:2,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:13,
    borderRadius: 50,
    width:40,
    height:40,
  }
});

export default backButton;