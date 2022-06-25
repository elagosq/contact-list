import React,{ useEffect, useContext, useCallback } from 'react';
import { 
  View,
  Text,
  StyleSheet
} from 'react-native'; 
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ContactThumbnail from '../components/ContactThumbnail';
import ContactoContext from '../context/contacts/contactContext';
import { ThemeContext } from '../context/theme/theme-context';

const User = () => {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();
  const { contactsObject } = useContext(ContactoContext);  
     
  const ClickToggleDrawer = useCallback(() => {
    navigation.toggleDrawer()
  },[navigation]);

  const ClickNavigationOptions = useCallback(() => {
    navigation.navigate('OptionScreen');
  },[navigation]);

  useEffect(() => {
   navigation.setOptions({
      headerStyle : {
        backgroundColor: theme.backgroundHeader  
      }, 
      title: 'Me',
      headerTintColor: theme.headerTitle,
      headerLeft: () =>(
        <MaterialIcons
          name="menu"
          size={24}
          style={{ color: theme.headerIcon, marginLeft: 10 }}
          onPress={() => ClickToggleDrawer()}
        />
      ),
      headerRight: () => (
        <MaterialIcons 
          name="settings"
          size={24}
          style={{ color : theme.headerIcon, marginRight: 10}}
          onPress={() => ClickNavigationOptions()}
        />
      ),
      });
  },[theme]);

  const {user:{avatar, name, phone}, error,loading,activeProfile } = contactsObject;
  console.log('Active Profile '+activeProfile);
   
   return(
       <View style={[styles.container,{backgroundColor:theme.backgroundColor}]}>
        {!activeProfile ? (
          <ContactThumbnail avatar={avatar} name={name} phone={phone} />  
        ): (<Text style={{color:theme.titleDetails}}>No hay usuario seleccionado.</Text>)}
       </View>
    );

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    }
})

export default User;