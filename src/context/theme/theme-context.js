import React from 'react';
import colors from "../../utils/colors";

const themes = {
    dark: {
      backgroundColor:colors.black,
      colorTextSwicthTheme: colors.white,
      colorActiveSwitchThumbColor:colors.blue,
      BackgroundSwicthTrackColor:colors.white,
      backgroundHeader:colors.blue,
      headerTitle:colors.white,
      headerIcon:colors.white,
      rowClickBackgroundColor:colors.black,
      contactInfoBorderBottom: colors.white,
      titleDetails:colors.white,
      subTitleDetails:colors.white,
      colorBorderButton: colors.white,
      colorIcon:colors.white,
      sidebarItems:colors.blue,
      sidebarItemColor:colors.white,
      colorBottomBarActive:colors.white,
      colorBottomBarInactive:colors.blue,
      colorBottomBarIcon:colors.white
    },
    light: {
      backgroundColor:colors.white,
      colorTextSwicthTheme: colors.black,
      colorActiveSwitchThumbColor:colors.black,
      BackgroundSwicthTrackColor:colors.blue,
      backgroundHeader:colors.greyLight,
      headerTitle:colors.black,
      headerIcon:colors.black,
      rowClickBackgroundColor:colors.greyDark, 
      contactInfoBorderBottom:colors.grey,
      titleDetails:colors.black,
      subTitleDetails:colors.blue,
      colorBorderButton:colors.blue,
      colorIcon: colors.blue,
      sidebarItems:colors.greyLight,
      sidebarItemColor:colors.black,
      colorBottomBarActive:colors.black,
      colorBottomBarInactive:colors.blue,
      colorBottomBarIcon:colors.black,
    }
}

const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => {}
}


const ThemeContext = React.createContext(initialState);

function ThemeProvider({ children }) {
  const [dark,setDark] = React.useState(false);

  const toggle = () => {
      setDark(!dark)
  }
  

  const theme = dark ? themes.dark : themes.light

  return (
     <ThemeContext.Provider value={{ theme, dark, toggle }}>
       {children}
     </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }