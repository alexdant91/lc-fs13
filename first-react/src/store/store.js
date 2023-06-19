/**
 * {
 *  auth:{   ( auth == slice, parametro di primo livello)
 *      token: "",
 *      iuser: {}  
 *  }
 * }
 */

import authReducer from './authSlice';

import { configureStore } from "@reduxjs/toolkit" ;
export default configureStore({
    reducer: {
        auth: authReducer
    },
})