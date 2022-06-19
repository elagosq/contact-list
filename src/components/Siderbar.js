import React,{useContext} from 'react';
import { Switch,View,StyleSheet,Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { ThemeContext } from '../context/theme/theme-context';

const Sidebar = ({...props}) => {
  const { dark,theme,toggle } = useContext(ThemeContext);
  
  return (
   <DrawerContentScrollView {...props}>
    <DrawerItemList {...props} />
    <View style={styles.contenedor}>
       <View style={styles.contenedorSwitch}>
        <Text style={[styles.iconPosition,{color:theme.colorTextSwicthTheme}]}>Light</Text>  
        <Switch 
          trackColor={{ false: theme.BackgroundSwicthTrackColor, true: theme.BackgroundSwicthTrackColor }}
          thumbColor={dark ? theme.colorActiveSwitchThumbColor : theme.colorActiveSwitchThumbColor}
          ios_backgroundColor={theme.BackgroundSwicthTrackColor}
          onValueChange={toggle} 
          value={dark}
        />
        <Text style={[styles.iconPosition,{color:theme.colorTextSwicthTheme}]}>Dark</Text> 
      </View>   
    </View>
  </DrawerContentScrollView>   
  )
}

const styles = StyleSheet.create({
  contenedor:{
   display: 'flex',
   flexDirection:'column',
   alignItems:'center',
   marginTop:50
  },
  iconPosition:{
    marginHorizontal:10
  },
  contenedorSwitch:{
    flexDirection:'row',
    alignItems:'center'
  }  
})

export default Sidebar;