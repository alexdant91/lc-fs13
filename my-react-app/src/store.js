/**
 * {
 *  auth: { (slice)
 *      token: "",
 *      user: {},        
 *  }
 * }
 */

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './store/authSlice';


export default configureStore({
    reducer: {
        auth: authReducer,
    },
 })

