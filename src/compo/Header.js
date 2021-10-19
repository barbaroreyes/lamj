import React from 'react';
import { makeStyles } from '@mui/styles';
import {AppBar,Collapse,IconButton,Toolbar} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles((theme)=>({
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        color:'gold',
    },
     icon:{
        color:'gold',
        fontSize:'2rem'
    }
       
    //     // ,
    //     // color: 'gold',
    //     // fontFamily: 'Dancing Script',
    //     // fontSize: '4rem'
    // },
    // container:{
    //  alignItems: 'center',
    // },
    // appbar:{
    //  textAlign: 'center',
    // },
    ,
    // appTitle:{
    //     flexGrow:'1',
    //     color:'gold',
    // },
    // appbarwrap:{
    //     width:'80%',
    //     margin:'0 auto',
    //     display:'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    // text1:{
    //     display:'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize:'3rem',
    //     color:'gold',
    // },
    // button:{
    //     textAlign:'center',
    // },godawn:{
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     color:'gold',
    //     fontSize:'5rem',

    // }
    
  }))

const Header = () => {
    const classes = useStyles()
  return (
  <header>
     
    <div className= 'name1'>Bienvenidos  </div>
      {/* <AppBar style={{
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
  </AppBar> */}
  <Collapse in ={true}>
      {/* <h1>hello</h1> */}
  {/* <div className={classes.container}>
  <h1 className={classes.text1}> Hola...
  <span>Toca Brillar</span>
  </h1>
  
    <IconButton className={classes.button}>
        <ExpandMoreIcon className={classes.godawn}/>
    </IconButton>
  </div> */}

  </Collapse>
  </header>
    
  );
}

export default Header;
