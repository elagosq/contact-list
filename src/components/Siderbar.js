import React,{useContext} from 'react';
import { Switch,View,StyleSheet,Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, useDrawerProgress } from '@react-navigation/drawer';
import { ThemeContext } from '../context/theme/theme-context';
import Animated,{ interpolate,Extrapolate, useAnimatedStyle } from 'react-native-reanimated';

const Sidebar = (props) => {
  const progress = useDrawerProgress();
  const { dark,theme,toggle } = useContext(ThemeContext);
  
  const animatedStyles = useAnimatedStyle(() => {
    const translateX = interpolate(progress.value,  [0, 1], [1, 0.8],{
      extrapolateRight: Extrapolate.CLAMP,
    });
    return {
      transform: [{translateX}],
    }
  });
  
 
  return (
   <DrawerContentScrollView {...props}>
   <Animated.View style={animatedStyles}>
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
   </Animated.View>   
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