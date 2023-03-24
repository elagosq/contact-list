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
//import useUrl from '../hook/useUrl';

const keyExtractor = ({ phone }) => phone;

const Contacts = () => {  
const { theme } = useContext(ThemeContext);
const navigation = useNavigation();
const { ListContacts,errorParamsName,contactsObject } = useContext(ContactContext);
const { contacts,loading,error } = contactsObject; 

//console.log('contacts 1'+ JSON.stringify(contacts));

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
},[navigation]); 


useEffect(() => {
  const urlOpen = async () => {
    Linking.addEventListener('url', handleOpenUrl);
    const url = await Linking.getInitialURL();
    handleOpenUrl({url});
  }

  urlOpen();

  return () => {
    //Linking.remove('url', handleOpenUrl);
    Linking.remove('url');
  }
}, []);


function handleOpenUrl (event) {
    console.log('url '+event.url);
    const { url } = event;
    const params = getURLParams(url);
    console.log("params "+ params.name);
    console.log('contacts '+ contacts);

    if(params.name && contacts.length > 0){
      const querieContact = contacts.find(contact => contact.name.split(' ')[0].toLowerCase() === params.name.toLowerCase())
      //console.log('querieContact '+JSON.stringify(querieContact));
      
      if(querieContact){
         //NavigationContactProfile(querieContact.id)
      }
    }   
 }

 const NavigationContactProfile = useCallback(id => {
    navigation.navigate('ProfileScreen', { id });
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
console.log('contact error ' +error);
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

