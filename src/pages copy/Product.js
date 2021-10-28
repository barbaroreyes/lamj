import styled from 'styled-components';
import NavBar from '../Compo/NavBar'
import Anouncement from '../Compo/Anouncement';
import Footer from '../Compo/Footer';
import NewLetter from '../Compo/NewLetter';


const Container = styled.div`

`
const Image = styled.img`
width:50%;
height:90vh;
border-radius: 10%;
object-fit:cover;
`
const ImageContainer = styled.div`
flex:1;
`
const Wrapper = styled.div`
width:75%;
padding:50px;
display:flex;
justify-content: center;
`
const InfoContainer = styled.div`
width:20%;
font-size:40px;


`
const Title = styled.h1`
font-weight: 300;
`
const Des = styled.p`

`

const Product = () => {
  return (
    <Container>
      <NavBar/>
      <Anouncement/>
      <Wrapper>
          <ImageContainer>
          <Image src='https://lamjce9b1a58db81496d90b0f125b07c8929185751-dev.s3.amazonaws.com/public/aretes-aros-perlas.jpeg'/>
          </ImageContainer>
          <InfoContainer>
              <Title>Title</Title>
              <Des> Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Dolores eum accusamus quam ab, commodi eaque? Voluptatem in cupiditate cum nesciunt aspernatur,
           expedita eaque debitis delectus quidem minima quo ipsam obcaecati qui 
           consequatur quasi fuga eligendi accusamus doloribus hic, harum optio! Accusamus qui aliquid, ad dolorem possimus fuga culpa animi molestiae.</Des>
          </InfoContainer>
      </Wrapper>
      
      <NewLetter/>
      <Footer/>
    </Container>
  );
}

export default Product;
