import React from 'react';
import styled from 'styled-components';
import {categorie} from './CategoriesData'

import CategorieItem from '../Compo/CategorieItem'
const Container = styled.div`
display:flex;
// padding:3px;
justify-content:space-around;

`


const Categories = () => {


  return (
    <Container>
      {categorie.map((item,i)=> {
          return(
              <CategorieItem  key={i}item={item}/>
          )
      })}
    </Container>
  );
}

export default Categories;
