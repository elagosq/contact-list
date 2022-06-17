import * as React from "react";
import { ThemeProvider } from "./src/context/theme/theme-context";
import ContactState from "./src/context/contacts/contactState"

import Navigator from "./src/routes";

export default function App() {
  return(
    <ContactState>
      <ThemeProvider>
        <Navigator />
      </ThemeProvider> 
    </ContactState>
  )
}

