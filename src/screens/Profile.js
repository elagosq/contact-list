import React,{ useCallback, useContext,useEffect,useLayoutEffect } from "react";
import { StyleSheet,View,TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import ContactContext  from '../context/contacts/contactContext';
import ContactThumbnail from '../components/ContactThumbnail';
import DetailListItem from '../components/DetailListItem';

import { ThemeContext } from '../context/theme/theme-context';
import colors from '../utils/colors';

const Profile = ({ route }) => {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();
  const { params: { id }} = route;
  const { contactsObject:{ contacts,activeProfile },userContacto } = useContext(ContactContext);
  const contactObj = contacts.find(contact => contact.id === id);
  
  
  const goBackPrevView = useCallback(() => {
     navigation.goBack()
  },[navigation]);


  useLayoutEffect(() => {
     navigation.setOptions({
       title: contactObj?.name.split(' ')[0],
       headerTintColor:theme.headerTitle,
       headerStyle: {
         backgroundColor: theme.backgroundHeader
       },
       headerLeft: () => (
        <TouchableOpacity                
           onPress={() => goBackPrevView() }
         >
         <Feather style = {{paddingLeft : 10}} name="arrow-left" size={26} color={theme.headerIcon} />
       </TouchableOpacity>
      ),
     });
},[navigation,theme]);

useEffect(() => {
  console.log('contactObj '+JSON.stringify(contactObj));
  userContacto(contactObj);
}, []);

return (
  <View style={styles.container}>
    <View style={styles.avatarSection}>
      <ContactThumbnail avatar={contactObj?.avatar} name={contactObj?.name} phone={contactObj?.phone} />
    </View>
    <View style={[styles.detailsSection,{backgroundColor:theme.backgroundColor}]}>
      <DetailListItem icon="mail" title="Email" subtitle={contactObj?.email} />
      <DetailListItem icon="phone" title="Work" subtitle={contactObj?.phone} />
      <DetailListItem icon="smartphone" title="Personal" subtitle={contactObj?.cell} />
      </View>
  </View>  
 )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  avatarSection:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: colors.blue  
  },
  detailsSection:{
    flex:1,
    backgroundColor:'white'
  }  
});

export default Profile;

