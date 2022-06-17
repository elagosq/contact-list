import React,{ useLayoutEffect,useContext } from 'react';
import { StyleSheet,View } from 'react-native';
import { MaterialIcons} from '@expo/vector-icons';

import DetailListItem from '../components/DetailListItem';
import { ThemeContext } from '../context/theme/theme-context';

const Options = ({ navigation }) => {
    const { theme } = useContext(ThemeContext);
    useLayoutEffect(() => {
      navigation.setOptions({
      title: 'Options',
      headerStyle:{
        backgroundColor:theme.backgroundHeader
      },
      headerTintColor:theme.headerTitle,
      headerLeft : () => (
        <MaterialIcons 
           name="close"
           size={24}
           style={{ color: theme.headerIcon, marginLeft: 10 }}
           onPress={() => navigation.goBack()}
        />  
      )
    });
    },[navigation,theme]);

  return (
    <View style={[styles.container,{backgroundColor:theme.backgroundColor}]}>
       <DetailListItem title="Update Profile" />
       <DetailListItem title="Change Language" />
       <DetailListItem title="Sign Out" />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
       flex: 1,
       backgroundColor: 'white'
    }
})


export default Options;