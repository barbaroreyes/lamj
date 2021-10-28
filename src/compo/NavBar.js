import React from 'react';
import styled from 'styled-components';
import {Search, ShoppingCartOutlined} from '@material-ui/icons'
import {Badge} from '@material-ui/core'
const Container =  styled.div`
height: 100px;

`

const  Wrapper =  styled.div`
 padding: 10px 20px ;
 
 
 display:flex;
 justify-content: space-between;
 align-items:center;
`
const Left =  styled.div`
display:flex;
align-items:center
flex:1;
`
const Lang = styled.span`
font-size: 12px;
display:flex;
align-items:center
`

const Rigth =  styled.div`
display:flex;
justify-content: flex-end;
padding:5px;
flex:1;

`
const Center =  styled.div`
flex:1;
text-align:center
`
const SearchContainer = styled.div`
border:0.1px solid lightgray;
display:flex;
align-items:center;
margin-left: 25px;
padding:1px;
`
const Input = styled.input`
border: none;
`
const Logo = styled.h1`
font-weith :bold;
font-size: 34px;
`
const MenuItem =  styled.div`
font-size: 14px;
cursor:pointer;
margin-left: 20px;
`

const NavBar = () => {
  return (
    <Container>
        <Wrapper>
         <Left>
             <Lang>Lang</Lang>
             <SearchContainer>
                 <Input/>
                 <Search style={{color:'grey', fontSize:'16px'}}/>
             </SearchContainer>
         </Left>
         <Center><Logo>La Mamgo Jewelry</Logo></Center>
         <Rigth>
             <MenuItem>Register</MenuItem>
             <MenuItem>Sign in</MenuItem>
             <MenuItem>
             <Badge badgeContent={1} color="primary">
                 <ShoppingCartOutlined/>
             </Badge>
             </MenuItem>


         </Rigth>
        
        </Wrapper>
      
    </Container>
  );
}

export default NavBar;
