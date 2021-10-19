import  React ,{useState,useEffect}from 'react';
import {Switch , Route} from 'react-router-dom';
import Amplify,{API,graphqlOperation} from 'aws-amplify';
import  awsconfigure from './aws-exports'
// import StripeCheckout from 'react-stripe-checkout';
import {listPrendas}from './graphql/queries'
import About from './pages/About'
import Home from './pages/Home'
import Categorias from './pages/Categorias';
import Contact from './pages/Contact';
import './App.css';

import { makeStyles } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
 Amplify.configure(awsconfigure)




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

 const [jollas,setJollas] =useState([])

 useEffect(()=>{
   fechtJollas()
 },[])



 const fechtJollas = async () =>{
   try {
     const jollasData = await API.graphql(graphqlOperation(listPrendas))
     const jollasList = jollasData.data.listPrendas.items
     console.log( 'lista de jollas',jollasList)
     setJollas(jollasList)
     
   } catch (error) {
     
   }
 }


  return <div className={classes.root}>
    <Switch>
      <Route exact path ='/'>
        <Home />
      </Route>
      <Route exact path ='/categorias'>
        <Categorias jollas={jollas}/>
      </Route>
      <Route exact path ='/about'>
        <About/>
      </Route>
      <Route exact path ='/contact'>
        <Contact/>
      </Route>
    </Switch>
     
  </div> 
}
      

       
    
