// import {Switch , Route} from 'react-router-dom';
// import StripeCheckout from 'react-stripe-checkout';
// import  AppBar from   './compo/AppBar';
// import About from './pages/About'
// import Home from './pages/Home'
// import Categorias from './pages/Categorias';
// import Contact from './pages/Contact';
// import Header from './compo/Header'
// import Mycompo from './pages/Home'
// import List from './compo/ListImages'
// import './App.css';
import * as React from 'react';
import { makeStyles } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './compo/Header';

const useStyles = makeStyles((theme)=>({
  root:{
    minHeight:'100vh',
    backgroundImage:`url(https://lamjce9b1a58db81496d90b0f125b07c8929185751-dev.s3.amazonaws.com/public/fondo-de+pantalla.jpeg)`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover'
  }
}))


 
    

export default function App() {
  const classes = useStyles();
  return <div className={classes.root}>
     <CssBaseline/>
     <Header/>
  </div> 
}
      

       
    
