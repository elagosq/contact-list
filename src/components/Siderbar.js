import React,{useCallback, useContext} from 'react';
import { Switch,View,StyleSheet,Text } from 'react-native';
import { DrawerContentScrollView, useDrawerProgress } from '@react-navigation/drawer';
import { ThemeContext } from '../context/theme/theme-context';
import Animated,{ interpolate,Extrapolate, useAnimatedStyle } from 'react-native-reanimated';
import MenuButtonItem from './MenuButtonItem';
import BackButton from './BackButton';

const Sidebar = ({navigation}) => {
  const progress = useDrawerProgress();
  const { dark,theme,toggle } = useContext(ThemeContext);
  
  const handlePressBackButton = useCallback(() => {
     navigation.closeDrawer();
  },[navigation]);

  const handlePressMenuContact = useCallback(() => {
     navigation.navigate('Contact');
  }, [navigation]);

  const handlePressMenuFavorite = useCallback(() => {
     navigation.navigate('Favorite')
  },[navigation]);

  const handlePressMenuUser = useCallback(() => {
     navigation.navigate('User')
  },[navigation]);


  const animatedStyles = useAnimatedStyle(() => {
    const translateX = interpolate(progress.value, [0, 1], [1, 0.8], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    return {
      transform: [{translateX}],
    }
  });
  
 return (
   <DrawerContentScrollView
     style={styles.contenedor}
   >
   <Animated.View style={animatedStyles}>
    <Text style={[styles.titleDrawer,{color:theme.headerTitle}]}>Menú</Text>
    <BackButton 
      icon="arrow-back-ios"
      size={22}
      onPress={handlePressBackButton}
    />
    <MenuButtonItem 
      text="Contact"
      icon="list"
      size={22}
      color="red"
      onPress={handlePressMenuContact}
    />
    <MenuButtonItem 
      text="Favorite"
      icon="star"
      color="red"
      size={22}
      onPress={handlePressMenuFavorite}
    />
    <MenuButtonItem 
      text="User"
      icon="person"
      color="red"
      size={22}
      onPress={handlePressMenuUser}
    />
    <View style={styles.contSwitch}>
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
    padding:15     
  },
  titleDrawer:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:20,
  },
  contSwitch:{
   display:'flex',
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