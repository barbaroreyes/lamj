import React from 'react';

const Categoria = (props) => {
  console.log('props',props.categoria)
  return (
    <div className='categoria'>
      {props.categoria}
    </div>
  );
}

export default Categoria;
