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
  <header className='header'>
     
    <div className= 'name1'> </div>
     
  </header>
    
  );
}

export default Header;
