import React,{ useEffect, useContext } from 'react';
import { 
  View,
  Text,
  StyleSheet
} from 'react-native'; 
import { MaterialIcons } from '@expo/vector-icons';
import Loading from '../utils/loading';
import colors from '../utils/colors';
import ContactThumbnail from '../components/ContactThumbnail';
import ContactoContext from '../context/contacts/contactContext';
import { ThemeContext } from '../context/theme/theme-context';


const User = ({navigation}) => {
  const { theme } = useContext(ThemeContext);
  const { contactsObject,userContacto } = useContext(ContactoContext);  

  useEffect(() => {
    
    userContacto();

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
          onPress={() => navigation.toggleDrawer()}
        />
      ),
      headerRight: () => (
        <MaterialIcons 
          name="settings"
          size={24}
          style={{ color : theme.headerIcon, marginRight: 10}}
          onPress={() => navigation.navigate('Options')}
        />
      ),
      });
  },[navigation,theme]);

 

    const {loading,user, error } = contactsObject;
    const { avatar, name, phone } = user; 

    return(
       <View style={[styles.container,{backgroundColor:theme.backgroundColor}]}>
        {loading && <Loading color={colors.white} /> }
        {error && <Text>Error....</Text>}
        {!loading && (
          <ContactThumbnail avatar={avatar} name={name} phone={phone} />  
        )}
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