import React from "react";
import { Text,TouchableOpacity,StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const MenuButtonItem = ({text,size,icon,color,onPress}) => {
    return ( 
      <TouchableOpacity 
        style={styles.buttonContainer}
        onPress={onPress}
       >
        <MaterialIcons name={icon} size={size} color={color} style={styles.botonRight} /> 
        <Text>{text}</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
   buttonContainer:{
    flexDirection:'row',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:'#d9d9d9',
    marginBottom:15,
    padding: 15
   }, 
   botonRight:{
    marginRight:10
   } 
});
 
export default MenuButtonItem;