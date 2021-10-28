import React from 'react';
import styled from 'styled-components';
import NavBar from '../Compo/NavBar'
import Anouncement from '../Compo/Anouncement';
import Products from '../Compo/Products';
import Footer from '../Compo/Footer';
import NewLetter from '../Compo/NewLetter';
const Container = styled.div`

`
const FilterContainer= styled.div`
display:flex;
 justify-content: space-between;
 `
const Title = styled.h1`
margin:20px;
 `
const Filter = styled.div`
margin:20px;
 `
const FilterText = styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;
`
const Select = styled.select`
 padding:10px;
 margin-right:20px;
 `
 const Option = styled.option`
margin:20px;

 `
;
const ProductsList = () => {
  return (
    <Container>
      <NavBar/>
      <Anouncement/>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter><FilterText>Filter Products</FilterText>
        <Select>
            <Option disabled selected>Categoria</Option>
            <Option>Aretes</Option>
            <Option>Anillos</Option>
            <Option>Aros</Option>
            <Option>Argolla</Option>
            <Option>Cadenas</Option>
            <Option>Conjuntos</Option>
            <Option>Dijes</Option>
            <Option>Sortijas</Option>
            
        </Select>
        </Filter>
        <Filter><FilterText>Sort Products</FilterText>
        <Select>
            <Option disabled selected>Precio</Option>
            <Option>Major a menor</Option>
            <Option>Menor Major</Option>
            <Option>Precios Mejorados</Option>
          
            
        </Select>
        </Filter>
      </FilterContainer>
      <Products/>
      <NewLetter/>
      <Footer/>
    </Container>
  );
}

export default ProductsList;
