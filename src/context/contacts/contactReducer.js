import { FETCHING_CONTACTS,FETCHING_USER,ERROR_URL_NAME } from '../../types';

export default (state,action) => {
   switch(action.type){
      case FETCHING_CONTACTS:
      return {
          ...state, 
          contacts : action.payload, 
          loading: false,
          error:false 
      };  
      case FETCHING_USER:
      return {
         ...state,
         user : action.payload,
         loading : false,
         error : false
      }
      case ERROR_URL_NAME:
      return{
         ...state,
         error : true
      }   
      default:
      return state;
   } 
}