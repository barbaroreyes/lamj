import React from 'react';
import { makeStyles } from '@mui/styles';
import {AppBar,IconButton,Toolbar} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
const useStyles = makeStyles((theme)=>({
    appbar:{
      background:'none',
      fontFamily:'Dancing Script'

     
    },
    icon:{
        color:'#FFFFFF',
        fontSize:'2rem'
    },
    appTitle:{
        flexGrow:'1'
    },
    appbarwrap:{
        width:'80%',
        margin:'0 auto'
    }
  }))

const Header = () => {
    const classes = useStyles()
  return (
    <AppBar  className ={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarwrap}>
        <h1 className={classes.appTitle}> LA Mango</h1>
      <IconButton
    //    size="large"
    //    edge="start"
    //    color="inherit"
    //    aria-label="menu"
    //    sx={{ mr: 2 }}
      >
      <MenuIcon  className={classes.icon}/>
      </IconButton>
        </Toolbar>
     
    </AppBar>
  );
}

export default Header;
