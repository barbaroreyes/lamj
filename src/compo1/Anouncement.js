import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
height: 20px;
background-color:rgb(169,157,129);
display:flex;
justify-content: center;
color:#fff;
align-items:center;
font-size: 24px;
font-weith :700;
`
const Anouncement = () => {
  return (
    <Container>
      Big Deals only for you 
    </Container>
  );
}

export default Anouncement;
