import React from 'react'
import {Switch , Route} from 'react-router-dom';
// import StripeCheckout from 'react-stripe-checkout';
import  AppBar from   './compo/AppBar';
import About from './pages/About'
import Home from './pages/Home'
import Categorias from './pages/Categorias';
import Contact from './pages/Contact';
// import List from './compo/ListImages'
import './App.css';

function App() {
  
 
  // const onToken = (token) => {
  //   console.log(token)
  // }
  return (
    <div className="App">
      <AppBar/>
        <Switch>
     <Route exact path='/'
     render={props => <Home {...props}/>}/>
       
     
     <Route exact path='/categories'>
       <Categorias/>
     </Route>
     <Route exact path='/about'>
       <About/>
     </Route>
     <Route exact path='/contact'>
       <Contact/>
     </Route>
    
   </Switch>
      

       
      {/* <StripeCheckout
        token={onToken}
        stripeKey="pk_live_51JkyRMLm3LiulVebwtzLghNlEl99W5u7kXuHgQfFmx8t8tG02z25ezrRktAlx2OeFVMrIYQEzp1P8AQ0v48Gu1B300P3z7YUIz"
        name='pepe'
        currency='USD'
        amount='100'
      /> */}
    </div>
  );
}

export default App;
