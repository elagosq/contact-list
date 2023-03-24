import { FETCHING_CONTACTS,SELECTION_USER,ERROR_URL_NAME } from '../../types';

export default (state,action) => {
   switch(action.type){
      case FETCHING_CONTACTS:
      return {
          ...state, 
          contacts : action.payload, 
          loading: false,
          error: false 
      };  
      case SELECTION_USER:
      return {
         ...state,
         user : action.payload,
         activeProfile:false
      }
      case ERROR_URL_NAME:
      return {
         ...state,
         error : true
      }   
      default:
      return state;
   } 
}