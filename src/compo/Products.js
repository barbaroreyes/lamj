import styled from 'styled-components'
import Data from '../Compo/Data';
import Product from '../Compo/Product'

const Container = styled.div `
padding: 20px;
display:flex;
flex-wrap: wrap;
justify-content:space-between;
`

const Products = () => {
  return (
    <Container>
      {Data.map((item,i)=>{
          return (
              <Product item={item} key={i}/>
          )
      })}
    </Container>
  );
}

export default Products;
