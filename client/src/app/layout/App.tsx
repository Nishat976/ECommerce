import { useState } from "react"
import {Box, Container, createTheme, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";




function App() {
  
  const [darkMode,setdarkMode] = useState(true);
   const palettetype = darkMode? 'dark' : 'light'

  const theme =createTheme({
    palette :{
      mode: (palettetype==='dark')  ?'dark' : 'light'
    
    }
  })
 
  
const toggleDarkMode =()=>{
  setdarkMode(!darkMode);
  }
  
  return (
    <>
    <ThemeProvider theme={theme}>
    <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
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
