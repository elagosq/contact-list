import React, { useEffect, useContext, useCallback } from 'react';
import { 
 StyleSheet,
 Text,
 View,
 FlatList,
 ActivityIndicator 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import ContactThumbnail from '../components/ContactThumbnail';
import ContactoContext from '../context/contacts/contactContext';
import { ThemeContext } from '../context/theme/theme-context';

const keyExtractor = ({ phone }) => phone; 

const Favorites = () => {
    const navigation = useNavigation(); 
    const { theme } = useContext(ThemeContext);
    const { contactsObject } = useContext(ContactoContext);

    useEffect(() => {
      navigation.setOptions({
        headerStyle:{
          backgroundColor:theme.backgroundHeader
        },
        title: 'Favorites',
        headerTintColor:theme.headerTitle,
        headerLeft: () => (
         <MaterialIcons
           name="menu"
           size={24}
           style={{ color: theme.headerIcon, marginLeft: 10 }}
           onPress={() => navigation.toggleDrawer()} />
        )
      });
     },[navigation,theme]);
    
    
     
    const NavigationFavoriteProfile = useCallback(id => {
       navigation.navigate('Profile',{ id });
    },[navigation]);


    const renderFavoriteThumbnail = ({item}) => {
       const { id,avatar } = item;
       return (
         <ContactThumbnail 
            avatar={avatar}
            onPress={() => NavigationFavoriteProfile(id) }
         />
       )
     } 

    const { loading, contacts, error} = contactsObject;
    //filter los contacto que en su propiedad favorite tenga asignado el valor true. 
    const favorites = contacts.filter(contact => contact.favorite);
    return(
       <View style={[styles.container,{ backgroundColor : theme.backgroundColor}]}>
         {/* {loading && <ActivityIndicator  size="large" /> } */}
         {error && <Text>Error...</Text>}
         {!loading &&
          !error && (
             <FlatList 
               data={favorites}
               keyExtractor={keyExtractor}
               numColumns={3}
               contentContainerStyle={styles.list}
               renderItem={renderFavoriteThumbnail}
             />
          )}  
       </View>
    );
}

const styles = StyleSheet.create({
  container:{
    justifyContent : 'center',
    flex:1
  },
   list: {
     alignItems:'center'
   }
});

export default Favorites;