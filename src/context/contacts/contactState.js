import React,{ useReducer } from 'react';
import { FETCHING_CONTACTS, FETCHING_USER,ERROR_URL_NAME } from '../../types';
import { fetchContacts,fetchUserContact } from '../../utils/api';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';


const contactState = ({children}) => {
  
  const initialState = {
     loading: true,
     contacts: [],    
     user: {},
     error: false
  }

   //Crear dispatch y state
   const [state, dispatch] = useReducer(ContactReducer, initialState);
   //Crear la funciones
    
   //Obtener la lista de contactos
   const ListContacts = async () => {
     try {
       const resultado = await fetchContacts();
       dispatch({
         type: FETCHING_CONTACTS,
         payload: resultado
       });
     } catch (error) {
       console.log('error '+error);   
     }
   }
   
   //Obtener un usuario de la lista de contacto
   const userContacto = async () => {
     try {
       const resultado = await fetchUserContact();
       dispatch({
         type: FETCHING_USER,
         payload: resultado
       });
     } catch (error) {
       console.log('error ' +error);
     }
   }
   
  const errorParamsName = () => {
     dispatch({
       type: ERROR_URL_NAME
     })
   }
  
   return(
       <ContactContext.Provider
        value={{
          contactsObject: state,
          userObject: state,
          error : state.error,
          ListContacts,
          userContacto,
          errorParamsName
        }}
       >
         {children}
       </ContactContext.Provider>
   )
};

export default contactState;