import { configureStore } from "@reduxjs/toolkit";
import authreducer from "../redux/features/auth/authSlice";


export const store=configureStore({
    reducer:{
     auth : authreducer 
    }
});