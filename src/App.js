import  React ,{useState,useEffect}from 'react';
import {Switch , Route} from 'react-router-dom';
import Amplify,{API,graphqlOperation} from 'aws-amplify';
import  awsconfigure from './aws-exports'
// import StripeCheckout from 'react-stripe-checkout';
import {listPrendas}from './graphql/queries'
// import About from './pages/About'
import Home from './pages copy/Home'
import ProductsList from './pages copy/ProductsList'
import Product from './pages copy/Product'
import Categorias from './pages/Categorias';
import Contact from './pages/Contact';
// import Group from './compo/Group'
import './App.css';
import { makeStyles } from '@mui/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import { filledInputClasses } from '@mui/material';
 Amplify.configure(awsconfigure)




const useStyles = makeStyles((theme)=>({
  root:{
    // minHeight:'100vh',
    // backgroundImage:`url(https://lamjce9b1a58db81496d90b0f125b07c8929185751-dev.s3.amazonaws.com/public/fondo-de+pantalla.jpeg)`,
    // backgroundRepeat:'no-repeat',
    // backgroundSize:'cover'
  }
}))


 
    

 function App() {
  const classes = useStyles();
  
 const [jollas,setJollas] =useState([])
 const [cate,setCate] =useState([])

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
      <Route exact path ='/productlist'>
        <ProductsList/>
       
      </Route>
      <Route exact path ='/product'>
       <Product/>
      </Route>
      <Route exact path='/group'>
       group
      </Route>
      <Route exact path ='/contact'>
        <Contact/>
      </Route>
    </Switch>
     
  </div> 
}
export default App   

       
    
