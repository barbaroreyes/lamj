import React from 'react';
import {Link}from 'react-router-dom'
const Categoria = (props) => {
  
  return (
    <div className='categoria-box'>
      
      <Link to='/'>{props.name}</Link>
    </div>
  );
}

export default Categoria;
