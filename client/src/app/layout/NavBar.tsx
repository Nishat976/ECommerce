import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

type Props ={
    toggleDarkMode: () =>void;
    darkMode: boolean;
} 

export default function NavBar({toggleDarkMode,darkMode}:Props) {
  return (
    <AppBar position='fixed'>
        <Toolbar>
            <Typography>
                 <Box sx={{display:'flex',justifyContent:'center',marginY:4 ,gap:3}}>
                      <Typography variant="h4">Restore</Typography>
                      <IconButton onClick={toggleDarkMode}>{darkMode ? <DarkMode/> : <LightMode/>}</IconButton>
                      </Box>
            </Typography>
        </Toolbar>

    </AppBar>
  )
}