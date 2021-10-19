import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {withRouter} from 'react-router-dom'


 const Nav = (props) => {
   const {history}= props;
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick = (pageRoute) => {
    history.push(pageRoute)
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
    
      <AppBar 
      position="static" 
      style={{
        backgroundColor:'transparent',
        color :'gold'
      }}
      >
        {/* <ImageAvatars/> */}
        <Toolbar>
         
          {/* <Typography variant="h6" component="div"  sx={{ flexGrow: 1 }}>
          
          </Typography> */}
          {auth && (
            <div>
               <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={()=>setAnchorEl(null)}
              >
                <MenuItem onClick={() =>handleClick('/')}>Home</MenuItem>
                <MenuItem onClick={() =>handleClick('/categories')}>Categories</MenuItem>
                <MenuItem onClick={() =>handleClick('/about')}>About</MenuItem>
                <MenuItem onClick={() =>handleClick('/contact')}>Contact</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default withRouter( Nav); 