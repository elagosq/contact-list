import React,{ useContext } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import Favorites from './screens/Favorites';
import Contacts from './screens/Contacts';
import Profile from './screens/Profile';
import User from './screens/User';
import Options from './screens/Options';
import Sidebar from './components/Siderbar';
import { ThemeContext } from './context/theme/theme-context';


const getDrawerItemIcon = (icon,color,fontSize) => (
  <MaterialIcons name={icon} size={fontSize} color={color} />
);

const Stack = createNativeStackNavigator();

const ContactsScreens = () => {
   return (
      <Stack.Navigator
       >
        <Stack.Screen 
         name="Contact" 
         component={Contacts} />
        <Stack.Screen 
         name="Profile" 
         component={Profile} 
        />
      </Stack.Navigator>
    );
}

const FavoritesScreens = () => {
  return (
     <Stack.Navigator
       mode='modal'
       initialRouteName='Favorites'
      >
       <Stack.Screen 
        name="Favorite" 
        component={Favorites} />
       <Stack.Screen 
        name="Profile" 
        component={Profile} 
       />
     </Stack.Navigator>
   );
}

const UserScreens = () => {
  return (
     <Stack.Navigator
     initialRouteName='User'
      >
     <Stack.Screen 
        name="User" 
        component={User} 
     />
      <Stack.Screen 
        name="Options" 
        component={Options} 
     />
     </Stack.Navigator>
   );
}


const Drawer = createDrawerNavigator();

const Routes = () => {

  const { theme } = useContext(ThemeContext);
  
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="ItemContact"
        screenOptions={{
          drawerStyle: {
            backgroundColor: theme.backgroundColor
          },
          headerShown:false,
          drawerActiveTintColor:  theme.colorTextActiveSidebar,
          drawerInactiveTintColor: theme.colorTextInactiveSidebar
        }}
        drawerContent={props => <Sidebar {...props} />}
        >
        <Drawer.Screen 
           name="ItemContact" 
           component={ContactsScreens}
           options={{
             drawerLabel:"Contact",
             drawerIcon:({color}) => (getDrawerItemIcon('list',color,22))
          }} />
        <Drawer.Screen 
           name="ItemFavorite" 
           component={FavoritesScreens}
           options = {{
            drawerLabel:"Favorite",
            drawerIcon:({color}) => ( getDrawerItemIcon('star',color,22) ) 
           }} 
        />
        <Drawer.Screen 
          name="ItemUser" 
          component={UserScreens} 
          options = {{
            drawerLabel:"User",
            drawerIcon:({color}) => ( getDrawerItemIcon('person',color,22) ) 
          }} 
        />
      </Drawer.Navigator>
  </NavigationContainer>
  )
}

export default Routes;