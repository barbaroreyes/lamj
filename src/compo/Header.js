import React from 'react';
import { makeStyles } from '@mui/styles';
import {AppBar,IconButton,Toolbar} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
const useStyles = makeStyles((theme)=>({
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        color: 'gold',
        fontFamily: 'Dancing Script',
        fontSize: '4rem'
    },
    appbar:{
     textAlign: 'center',
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
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center'
        

    },
    colorText:{
        textAlign: 'center'

    },
    godawn:{
        color:'gold',
        fontSize:'4rem'
    }
  }))

const Header = () => {
    const classes = useStyles()
  return (
  <div className={classes.root}>
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
        <h1>Bienvenido Sientete En Casa </h1>
        <IconButton>
        <ExpandMoreIcon className={classes.godawn}/>
    </IconButton>
      
    </AppBar>
   

  </div>
    
  );
}

export default Header;
