import React from 'react'
// import StripeCheckout from 'react-stripe-checkout';
import  AppBar from   './compo/AppBar';
// import List from './compo/ListImages'
import './App.css';

function App() {

  // const onToken = (token) => {
  //   console.log(token)
  // }
  return (
    <div className="App">
      <AppBar/>
    
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
