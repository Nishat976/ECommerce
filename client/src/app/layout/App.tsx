import {Box, Container, createTheme, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../store/store";



function App() {
  
  const {darkMode} = useAppSelector(state => state.ui);
   const palettetype = darkMode? 'dark' : 'light'

  const theme =createTheme({
    palette :{
      mode: (palettetype==='dark')  ?'dark' : 'light'
    
    }
  })
 
  

  
  return (
    <>
    <ThemeProvider theme={theme}>
    <NavBar/>
    <Box sx={{minHeight:'100vh',
      background : darkMode ? 'radial-gradient(circle,#1e3aBa,#111B27)' 
      : 'radial-gradient(circle,#baecf9,#f0f9ff)',py:6}}>
    <Container maxWidth={"xl"} sx={{mt:15}}>
      <Outlet/>
    </Container>
    </Box>
    </ThemeProvider>
    </>
    
  )
}

export default App
