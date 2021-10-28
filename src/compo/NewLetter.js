import React from 'react';
import styled from 'styled-components';
import {Send} from '@material-ui/icons'
const Container = styled.div`
height:60vh;
display:flex;
justify-content: center;
align-items: center;
background-color: #fcf5f5;
flex-direction: column;
`
const Title = styled.h1`
font-size:70px;
margin-bottom:20px;
font-weight:300
`
const Description = styled.div`
font-size:24px;
margin-bottom:20px;
 `
const InputContainer = styled.div`
width:50%;
height:40px;
display:flex;
justify-content:space-between;
border:1px solid lightgrey;
`
const Input = styled.input`
border: none;
flex:6;
font-size:20px;
`
const Button = styled.button`
flex:1;
background-color: rgb(169,157,129);
color:#fff
`



const NewLetter = () => {
  return (
    <Container>
      <Title>News</Title>
      <Description>Get info for you favorite products</Description>
      <InputContainer>
      <Input placeholder="Your email"/>
      <Button>
        <Send/>
      </Button>

      </InputContainer>
    </Container>
  );
}

export default NewLetter;
