import React from 'react';
import NavBar from '../Compo/NavBar'
import Anouncement from '../Compo/Anouncement';
import Slider from '../Compo/Slider';
import Categories from '../Compo/Categories';
import Products from '../Compo/Products';
import NewLetter from '../Compo/NewLetter';
import Footer from '../Compo/Footer';

const Home = () => {
  return (
    <div>
     <Anouncement/> 
     < NavBar/>
     <Slider/>
     <Categories/>
     <Products/>
     <NewLetter/>
     <Footer/>
    </div>
  );
}

export default Home;
