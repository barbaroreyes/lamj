
import styled from 'styled-components';
import {ArrowLeftOutlined,ArrowRightOutlined} from '@material-ui/icons';
import { useEffect, useState } from 'react';

const Container = styled.div`
width: 100%; 
height:100vh;
display:flex;
// background-color: salmon;
position:relative;
overflow:hidden;


`;

const Arrow = styled.div`
width: 50px; 
height:50px;
background-color:#fff;
border-radius: 50%;
display:flex;
justify-content: center;
align-items: center;
position:absolute;
top:0; 
bottom:0;
left:${props => props.direction==="left" && "10px"};
right:${props => props.direction==="right" && '10px'};
margin:auto;
cursor:pointer;
opacity:0.5;

`
const Wrapper = styled.div`
hight:100%;
display:flex;
justify-content: center;
align-items: center;
transform: translateX(-100vw)
`
const Slide = styled.div`
width: 100vw;
higthL100vh;
display:flex;
align-items: center;
align-items: center;
background-color:${props => props.bg};

`
const ImageContainer = styled.div`
flex:1;
height:100%;
`
const Image = styled.img`
height:80%;
`
const InfoConten = styled.div`
flex:1;
padding:50px;
`
const Title = styled.h1`font-size:70px`
const Description = styled.p`
margin: 50px 0px; 
font-size:20px;
font-weight:500;
letter-spacing:3px;
`
const Button = styled.button`
padding :10px;
background-color:transparent;
cursor:pointer;
`


const Slider = () => {
    const [slideIndex,setIndex] = useState(0)
    const handleClick = (direction) => {
   
    }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick('left')}>
            <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper>
                <Slide bg='rgb(189,132,64)'>
                <ImageContainer>
                <Image src='https://lamjce9b1a58db81496d90b0f125b07c8929185751-dev.s3.amazonaws.com/public/gargantilla-con-sol.jpeg'/>
              </ImageContainer>
              <InfoConten>
                  <Title>This Sumer</Title>
                  <Description>Gargantilla con dije de  Sol</Description>
                  <Button>Shop Now</Button>
            </InfoConten> 
            
              </Slide>
              <Slide bg='rgb(189,132,64)'>
                <ImageContainer>
                <Image src='https://lamjce9b1a58db81496d90b0f125b07c8929185751-dev.s3.amazonaws.com/public/gargantilla-con-sol.jpeg'/>
              </ImageContainer>
              <InfoConten>
                  <Title>This Sumer</Title>
                  <Description>Gargantilla con dije de  Sol</Description>
                  <Button>Shop Now</Button>
            </InfoConten> 
            
              </Slide>
            
            </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick('right')}>
            <ArrowRightOutlined/>
            </Arrow>
      
    </Container>
  );
}

export default Slider;
