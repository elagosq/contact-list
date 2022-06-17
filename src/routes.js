import React,{ useContext } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons,Ionicons } from '@expo/vector-icons';
import Favorites from './screens/Favorites';
import Contacts from './screens/Contacts';
import Profile from './screens/Profile';
import User from './screens/User';
import Options from './screens/Options';
import Sidebar from './components/Siderbar';
import { ThemeContext } from './context/theme/theme-context';

// const getTabBarIcon = (icon,color) => (
//   <MaterialIcons name={icon} size="26" color={color} />
// );

const getDrawerItemIcon = (icon,color) => (
  <MaterialIcons name={icon} size="22" color={color} />
);

const Stack = createNativeStackNavigator();

const ContactsScreens = () => {
   return (
      <Stack.Navigator
       >
        <Stack.Screen 
         name="Contacts" 
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
        name="Favorites" 
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


//const Tab = createBottomTabNavigator();

//  const Routes = () => {
//   return (
//     <NavigationContainer>
//        <Tab.Navigator
//           initialRouteName = "Contacts"
//           screenOptions = {({ route }) => ({
//           tabBarIcon: ({ color }) => {
//               if(route.name === "Contacts"){
//                 return getTabBarIcon('list', color);
//               }else if(route.name === "Favorites"){
//                 return getTabBarIcon('star', color);
//               }else{
//                 return getTabBarIcon('person', color);
//               }
//             },
//             tabBarStyle : {
//               backgroundColor: colors.greyLight,
//             },
//             tabBarShowLabel: false,
//             tabBarActiveTintColor: colors.blue,
//             tabBarInactiveTintColor : colors.greyDark,
//             renderIndicador : () => null,
//             headerShown : false
            
//           })
//         }
//        >
//         <Tab.Screen name="Contacts" component={ContactsScreens} />
//         <Tab.Screen name="Favorites" component={FavoritesScreens} />
//         <Tab.Screen name="User"      component={UserScreens} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   )
// }

const Drawer = createDrawerNavigator();

const Routes = () => {

  const { theme } = useContext(ThemeContext);
  
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Contacts"
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
           name="Contacts" 
           component={ContactsScreens}
           options={{
             drawerIcon:({color}) => (getDrawerItemIcon('list',color))
          }} />
        <Drawer.Screen 
           name="Favorites" 
           component={FavoritesScreens}
           options = {{
            drawerIcon:({color}) => ( getDrawerItemIcon('star',color) ) 
           }} 
        />
        <Drawer.Screen 
          name="User" 
          component={UserScreens} 
          options = {{
            drawerIcon:({color}) => ( getDrawerItemIcon('person',color) ) 
          }} 
        />
      </Drawer.Navigator>
  </NavigationContainer>
  )
}

export default Routes;