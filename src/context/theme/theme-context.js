import React from 'react';
import colors from "../../utils/colors";

const themes = {
    dark: {
      backgroundColor:colors.black,
      colorTextActiveSidebar:colors.greyLight,
      colorTextInactiveSidebar:colors.greyDark,
      colorTextSwicthTheme: colors.white,
      colorActiveSwitchThumbColor:colors.blue,
      BackgroundSwicthTrackColor:colors.white,
      backgroundHeader:colors.blue,
      headerTitle:colors.white,
      headerIcon:colors.white,
      rowClickBackgroundColor:colors.black,
      contactInfoBorderBottom: colors.white,
      titleDetails:colors.white,
      subTitleDetails:colors.white  
    },
    light: {
      backgroundColor:colors.white,
      colorTextActiveSidebar:colors.blue,
      colorTextInactiveSidebar:colors.black,
      colorTextSwicthTheme: colors.black,
      colorActiveSwitchThumbColor:colors.black,
      BackgroundSwicthTrackColor:colors.blue,
      backgroundHeader:colors.greyLight,
      headerTitle:colors.black,
      headerIcon:colors.black,
      rowClickBackgroundColor:colors.greyDark, 
      contactInfoBorderBottom:colors.grey,
      titleDetails:colors.black,
      subTitleDetails:colors.blue
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