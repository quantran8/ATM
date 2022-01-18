import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice";
import atmReducer from "../reducers/atmSlice";
export const store = configureStore({
  reducer:{
    user : userReducer,
    atm : atmReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
  
})