import { createSlice } from "@reduxjs/toolkit";

const getInitialDarkmode =() =>{
    const storeddarkmode = localStorage.getItem('darkMode');
    return storeddarkmode ? JSON.parse(storeddarkmode) : true ;
  }
  
export const uiSlice = createSlice({
    name:'ui',
    initialState:{
        isLoading:false,
        darkMode : getInitialDarkmode()
    },
    reducers:{
        startLoading: (state) =>{
            state.isLoading = true
        },
        stopLoading: (state) =>{
            state.isLoading = false
        },
        setdarkMode :(state) =>{
            localStorage.setItem('darkMode',JSON.stringify(!state.darkMode));
            state.darkMode= (!state.darkMode);
        }
    }
})

export const {startLoading,stopLoading,setdarkMode} = uiSlice.actions;