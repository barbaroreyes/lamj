import React from 'react';
import { makeStyles } from '@mui/styles';
import {AppBar,IconButton,Toolbar} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
const useStyles = makeStyles((theme)=>({
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
    appbar:{
    
    },
    icon:{
        color:'gold',
        fontSize:'2rem'
    },
    appTitle:{
        flexGrow:'1',
        color:'gold',
    },
    appbarwrap:{
        width:'80%',
        margin:'0 auto',
        

    },
    colorText:{
        textAlign: 'center'

    }
  }))

const Header = () => {
    const classes = useStyles()
  return (
  <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      
  }}>
      <AppBar style={{
        backgroundColor:'transparent',
        color :'gold',
        fontFamily:'Dancing Script',
        fontSize :'39px'
      }}elevation={0}>
        <Toolbar className={classes.appbarwrap}>
        <h1 className={classes.appTitle}> LA Mango Jewelry</h1>
      <IconButton>
      <MenuIcon  className={classes.icon}/>
      </IconButton>
        </Toolbar>
      <div><h1>Bienvenido <hr/> Entra Sientete  <span className={classes.colorText}>En Casa</span> </h1></div>
    </AppBar>

  </div>
    
  );
}

export default Header;
