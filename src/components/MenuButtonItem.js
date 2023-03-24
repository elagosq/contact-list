import React,{ useContext } from "react";
import { Text,TouchableOpacity,StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { ThemeContext } from "../context/theme/theme-context";

const MenuButtonItem = ({text,size,icon,onPress}) => {
    const { theme } = useContext(ThemeContext);
  
    return ( 
      <TouchableOpacity 
        style={[styles.buttonContainer,{backgroundColor:theme.sidebarItems}]}
        onPress={onPress}
       >
        <MaterialIcons name={icon} size={size} style={[styles.botonRight,{color:theme.sidebarItemColor}]} /> 
        <Text style={[styles.textItem,{color:theme.sidebarItemColor}]}>{text}</Text>
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
   textItem:{
    fontSize:14,
    fontWeight:'bold' 
   },
   botonRight:{
    marginRight:10
   } 
});
 
export default MenuButtonItem;