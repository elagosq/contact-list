import React, { useEffect,useLayoutEffect,useContext, useCallback } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Linking
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import ContactListItem from '../components/ContactListItem';
import Loading from '../utils/loading';
import colors from '../utils/colors';
import getURLParams from '../utils/getURLParams';
import ContactContext from '../context/contacts/contactContext';
import { ThemeContext } from '../context/theme/theme-context';
import { useNavigation } from '@react-navigation/native';


const keyExtractor = ({ phone }) => phone;

const Contacts = () => {  
const { theme } = useContext(ThemeContext);
const navigation = useNavigation();
const { ListContacts,errorParamsName,contactsObject } = useContext(ContactContext);
const { contacts,loading,error } = contactsObject; 

useLayoutEffect(() => {
  navigation.setOptions({
    headerStyle : {
       backgroundColor: theme.backgroundHeader  
    }, 
    title: 'Contact',
    headerTintColor: theme.headerTitle,
    headerLeft: () => (
     <MaterialIcons
       name="menu"
       size={24}
       style={{ color: theme.headerIcon, marginLeft: 10 }}
       onPress={() => navigation.toggleDrawer()} />
    )
  });
 },[navigation,theme]);


useEffect(() => {
  const unsubscribe = navigation.addListener('focus', () => ListContacts());
  return unsubscribe;
},[navigation]) 

useEffect(() => {
  const urlOpen = async () => {
    Linking.addEventListener('url', handleOpenUrl);
    const url = await Linking.getInitialURL();
    handleOpenUrl({ url });
  }
  
  urlOpen();
 
  return () => {
    Linking.removeAllListeners('url', handleOpenUrl);
  }
  }, []);

  const handleOpenUrl = (event) => {
    const { url } = event;
    const params = getURLParams(url);
   
    console.log("params "+ params.name);

    const urlNameObject = contacts.find(contact => contact.name.split(' ')[0].toLowerCase() === params.name.toLowerCase())
    
    console.log('urlName '+urlNameObject);
    
    if(urlNameObject){
      NavigationContactProfile(urlNameObject.id)
    }else{
      errorParamsName();
    }
 }

 const NavigationContactProfile = useCallback(id => {
    navigation.navigate('Profile', { id });
 },[navigation]);
  
 const renderContact = ({item}) => {
    const { id,name,avatar,phone } = item;

     return (
     <ContactListItem 
        name={name} 
        avatar={avatar} 
        phone={phone}
        onPress={() => NavigationContactProfile(id) } 
      />
     )
 }

const contactsSorted = contacts.sort((a,b) =>  a.name.localeCompare(b.name));
// console.log('contact loading ' + loading);
// console.log('contact error ' +error);
return (
   <View style={[styles.container,{backgroundColor: theme.backgroundColor}]}>
    {loading && <Loading color={colors.blue} />}
    {error && <Text>Error...</Text> }
    {!loading && 
     !error && (
        <FlatList 
          data={contactsSorted}
          keyExtractor={keyExtractor}
          renderItem={renderContact}
        />
    )}
   </View> 
 );
}

const styles = StyleSheet.create({
    container:{ 
      justifyContent:'center',
      flex: 1
    },
    avatarSection:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.blue 
    },
    detailsSection:{
      flex:1,
      backgroundColor: 'white'
    }
})

export default Contacts;

