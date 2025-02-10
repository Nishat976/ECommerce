import { DarkMode, LightMode, ShoppingBag } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, LinearProgress, List, ListItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../store/store";
import { useDispatch } from "react-redux";
import { setdarkMode } from "./uiSlice";


const midLinks = [
  {title:'catalog',path:'/catalog'},
  {title:'about',path:'/about'},
  {title:'contact',path:'/contact'}
]

const rightLinks =[
  {title:'login',path:'/login'},
  {title:'register',path:'/register'}
]

const navStyles =[
  {color:'inherit',typography:'h6', '&:hover':{
    color: 'grey.500', '&.active':{color:'yellow'}
  }}
]


export default function NavBar() {
  const {isLoading,darkMode} = useAppSelector(state => state.ui);
  const dispatch = useDispatch();
  return (
    <AppBar position='fixed'>
        <Toolbar sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                 <Box>
                      <Typography component={NavLink} to='/' sx={navStyles}>Restore</Typography>
                      <IconButton onClick={() => dispatch(setdarkMode())}>{darkMode ? <DarkMode/> : <LightMode/>}</IconButton>
                  </Box>
                     <List sx={{display:'flex'}}>
                      {midLinks.map(({title,path}) =>
                        <ListItem
                          component={NavLink}
                          to={path}
                          key={path}
                          sx={navStyles}
                         
                        >
                          {title.toUpperCase()}
                        </ListItem>

                      )}
                      </List>
                      <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                      <IconButton sx={{color:'yellow'}}>
                        <Badge>
                          <ShoppingBag/>
                        </Badge>
                      </IconButton>
                      <List sx={{display:'flex'}}>
                      {rightLinks.map(({title,path}) =>
                        <ListItem
                          component={NavLink}
                          to={path}
                          key={path}
                          sx={navStyles}
                        >
                          {title.toUpperCase()}
                        </ListItem>

                      )}
                      </List>
                      </Box>

        </Toolbar>
              {isLoading && (
                <Box sx={{width:'100%'}}>
                  <LinearProgress color="secondary"/>
                </Box>
              )}
    </AppBar>
  )
}