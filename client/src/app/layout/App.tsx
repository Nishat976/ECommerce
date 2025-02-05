import { useEffect, useState } from "react"
import { Product } from "../models/product";
import Catalog from "../features/catalog/Catalog";
import {Box, Container, createTheme, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";




function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [darkMode,setdarkMode] = useState(true);
   const palettetype = darkMode? 'dark' : 'light'

  const theme =createTheme({
    palette :{
      mode: (palettetype==='dark')  ?'dark' : 'light'
    
    }
  })
 
  useEffect (() =>{
    fetch('https://localhost:7106/api/products')
    .then(response => 
      
      {
      if (!response.ok) {
        console.log(response.json())
        throw new Error(`An error occurred: ${response.status}`);
      }
     
      return response.json();
    }
    )
    .then(data => setProducts(data))
    
  }, [])

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
      <Catalog products={products}/>
    </Container>
    </Box>
    </ThemeProvider>
    </>
    
  )
}

export default App
