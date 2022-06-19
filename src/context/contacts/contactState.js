import React,{ useReducer } from 'react';
import { FETCHING_CONTACTS, SELECTION_USER,ERROR_URL_NAME } from '../../types';
import { fetchContacts } from '../../utils/api';
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
   
   //Obtener un usuario seleccionado desde la vista Profile.
   const userContacto =  (contactuser) => {
    console.log('contactuser '+ JSON.stringify(contactuser));
     try {
       dispatch({
         type: SELECTION_USER,
         payload: contactuser
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