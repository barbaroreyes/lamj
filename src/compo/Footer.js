
import React from 'react';
import styled from 'styled-components';
import {EmailRounded, Facebook,Instagram,PhoneAndroid,Room,WhatsApp} from '@material-ui/icons'

const Container = styled.div `
display:flex;
justify-content:center;
flex-direction:row;
align-items:center;
background-color:#FAFAFA;
text-align:center;
`
const Left = styled.div `
flex:1;
padding:13px;
display:flex;
flex-direction:column;
align-items:center;

`
const Center = styled.div `
flex:1;
padding:13px;
display:flex;
flex-direction:column;
align-items:center;


`
const Title = styled.h1 `

`
const List = styled.ul `
flex:1;
display:flex;
flex-wrap:wrap;
list-style:none;
`
const Listitem = styled.li `
width:50%;
margin-bottom:10px;
`
const Rigth = styled.div `
flex:1;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
padding:5px;
margin:10px;
`

const Logo = styled.h1 `
margin:0;
padding:0;
flex:1;
`

const Des = styled.p `
flex:1;
margin:30px 0px; 
padding:10px;

`

const SocialContaimer = styled.div `
flex:1;
display:flex;
justify-content:center;
align-items:center;

`

const SocialIcon= styled.div `
display:flex;
justify-content:center;
align-items:center;
width:50px;
height:50px;
border-radius:50%;
border:2px solid black ;
margin:40px;
color: ${props => props.color};
`

const ContactItem = styled.div `
flex:1;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
margin-bottom:10px;
`
const Payment = styled.img `
width:20%;
heigth:100px;
   `
const Footer = () => {

  return (
    <Container>
      <Left>
          <Logo>Jewelry</Logo>
          <Des>
          Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Dolores eum accusamus quam ab, commodi eaque? Voluptatem in cupiditate cum nesciunt aspernatur,
           expedita eaque debitis delectus quidem minima quo ipsam obcaecati qui 
           consequatur quasi fuga eligendi accusamus doloribus hic, harum optio! Accusamus qui aliquid, ad dolorem possimus fuga culpa animi molestiae.
          </Des>
          <SocialContaimer>
         <SocialIcon color='rgb(169,157,129)'>
          <Facebook/>
         </SocialIcon>
         <SocialIcon color='red'>
          <Instagram/>
         </SocialIcon>
         <SocialIcon color='gold'>
          <WhatsApp/>
         </SocialIcon>
          </SocialContaimer>
      </Left>
      <Center>
          <Title>Usefull Links</Title>
          <List>
              <Listitem>item</Listitem>
              <Listitem>item</Listitem>
              <Listitem>item</Listitem>
              <Listitem>item</Listitem>
              <Listitem>item</Listitem>
              <Listitem>item</Listitem>
              <Listitem>item</Listitem>
              <Listitem>item</Listitem>
              <Listitem>item</Listitem>
              <Listitem>item</Listitem>
              <Listitem>item</Listitem>
              <Listitem>item</Listitem>
              <Listitem>item</Listitem>
              <Listitem>item</Listitem>
              <Listitem>item</Listitem>
              <Listitem>item</Listitem>
             
             
          </List>
      </Center>
      <Rigth>
          <Title>
              Contact
          </Title>
         <ContactItem>
             <Room/>address
         </ContactItem>
         <ContactItem>
            <PhoneAndroid/>phone-number
         </ContactItem>
         <ContactItem>
           <EmailRounded/>contact-email
         </ContactItem>
         <Payment src='https://www.bypeople.com/wp-content/uploads/2020/02/free-svg-payment-credit-card-icons.png'/>
      </Rigth>
      
     
    </Container>
  );
}

export default Footer;
