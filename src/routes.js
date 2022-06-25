import React,{ useContext } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import Favorites from './screens/Favorites';
import Contacts from './screens/Contacts';
import Profile from './screens/Profile';
import User from './screens/User';
import Options from './screens/Options';
import Sidebar from './components/Siderbar';
import { ThemeContext } from './context/theme/theme-context';


const Stack = createNativeStackNavigator();

const ContactsScreens = () => {
   return (
      <Stack.Navigator
        initialRouteName="ContactScreen"
       >
        <Stack.Screen 
         name="ContactScreen" 
         component={Contacts} />
        <Stack.Screen 
         name="ProfileScreen" 
         component={Profile} 
        />
      </Stack.Navigator>
    );
}

const FavoritesScreens = () => {
  return (
     <Stack.Navigator
       initialRouteName='FavoriteScreen'
      >
       <Stack.Screen 
        name="FavoriteScreen" 
        component={Favorites} />
       <Stack.Screen 
        name="ProfileScreen" 
        component={Profile} 
       />
     </Stack.Navigator>
   );
}

const UserScreens = () => {
  return (
     <Stack.Navigator
        initialRouteName='UserScreen'
      >
     <Stack.Screen 
        name="UserScreen" 
        component={User} 
     />
      <Stack.Screen 
        name="OptionScreen" 
        component={Options} 
     />
     </Stack.Navigator>
   );
}


const Tab = createBottomTabNavigator();

const Tabs = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Tab.Navigator
     screenOptions={{
      tabBarActiveTintColor:theme.colorBottomBarActive,
      tabBarInactiveTintColor:theme.colorBottomBarInactive,
      tabBarLabelStyle: { fontSize: 12,fontWeight:'bold' },
      tabBarStyle: {
        height: 90,
        backgroundColor: theme.backgroundColor,
        borderTopWidth: 0
       },
       headerShown:false
     }}
    >
     <Tab.Screen 
       name="Contact" 
       component={ContactsScreens} 
       options={{
         tabBarIcon: () => ( <MaterialIcons name="list" size={22} style={{color:theme.colorBottomBarIcon}} /> )
       }} 
      />
     <Tab.Screen 
       name="Favorite" 
       component={FavoritesScreens} 
       options={{
         tabBarIcon: () => ( <MaterialIcons name="star" size={22} style={{color:theme.colorBottomBarIcon}} />)
       }}
       />
     <Tab.Screen 
       name="User"  
       component={UserScreens}
       options={{
         tabBarIcon: () => (<MaterialIcons name="person" size={22} style={{color:theme.colorBottomBarIcon}} />)
       }}
      />
   </Tab.Navigator> 
 )
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
          headerShown : false
        }}
        drawerContent={props => <Sidebar {...props} />}
        >
        <Drawer.Screen
          name="TabsScreen"
          component={Tabs}
        />
        {/* <Drawer.Screen 
           name="ItemContact" 
           component={ContactsScreens}
          />
        <Drawer.Screen 
           name="ItemFavorite" 
           component={FavoritesScreens} 
        />
        <Drawer.Screen 
          name="ItemUser" 
          component={UserScreens} 
        /> */}
      </Drawer.Navigator>
  </NavigationContainer>
  )
}

export default Routes;