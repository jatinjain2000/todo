import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink , useNavigate} from "react-router-dom";

export default function Navbar({isAuthenticated,setIsAuthenticated}) {
  const navigateTo = useNavigate();
  console.log(isAuthenticated);
  return (
  
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{display : "flex",
                        justifyContent:"flex-end" }}>
          
          <img
          src="/ToDO.png"
          alt="logo"
          style={{ width: '180px', height: '29px', marginTop: "5px", borderRadius: '8px', marginRight:"800px" }}
        />
           
           {!isAuthenticated &&<NavLink className="navbar-link" to="/signup">
           <Button color="inherit" >SignUp</Button>
            </NavLink>}
            {!isAuthenticated &&<NavLink className="navbar-link" to="/login">
          <Button color="inherit" >Login</Button>
            </NavLink>}
          {isAuthenticated && <NavLink className="navbar-link" to="/todo">
           <Button color="inherit" >Todo</Button>
            </NavLink>}
            {isAuthenticated && <NavLink className="navbar-link" to="/signout">
           <Button color="inherit" >Signout</Button>
            </NavLink>}
          
          
          
            <NavLink className="navbar-link" to="/">
           <Button color="inherit" >Home</Button>
            </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
