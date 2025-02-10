import { configureStore, legacy_createStore } from "@reduxjs/toolkit";
import counterReducer from "../features/contact/counterReducer";
import { catalogAPI } from "../features/catalog/catalogAPI";
import { useDispatch, useSelector } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { uiSlice } from "../layout/uiSlice";



export default function configureThestore() {
  return legacy_createStore(counterReducer);
}

export const store = configureStore ({
  reducer: {
    [catalogAPI.reducerPath]: catalogAPI.reducer,
    [uiSlice.reducerPath]:uiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(catalogAPI.middleware)
  
});

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
