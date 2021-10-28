
import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
display:flex;

flex:1;
margin: 4px;
heigth:100vh;
position:relative;


`
const Image = styled.img`
width:100%;
heigth:100%;
object-fit:cover;
`
const Info = styled.div`
position:absolute;
width:100%;
justify-content:center;
flex-direction:column;
display:flex;
align-items:center;
margin-top:361px;
text-aling:center;
text-align:center;
`
const Title = styled.h1`
color:rgb(189,132,64);
`
const Button = styled.button`
padding:14px;
background:black;
color:rgb(189,132,64);
border-radius:30px 30px;
width:80%;
cursor:pointer;
`


const CategorieItem = ({item}) => {

  return (
    <Container>
        <Image src={item.image} 
        />
        <Info>
        <Title>{item.name}</Title>
        <Button>Shop Now</Button>
        </Info>
    </Container>
  );
}

export default CategorieItem;
