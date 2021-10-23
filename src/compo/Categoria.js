import React from 'react';

const Categoria = (props) => {
  console.log('props',props.jollas)
  const filtereCat = [...new Set(props.jollas.map((item =>item.categoria )))]
  console.log(filtereCat)

  // console.log('props',props.categoria)
  return (
    <div className='categoria'>
     {filtereCat}
    </div>
  );
}

export default Categoria;
