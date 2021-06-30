import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  background: rgba( 248, 231, 28, 0.15 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 0.0px );
  -webkit-backdrop-filter: blur( 0.0px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 47px;
  text-align: center;
  text-shadow: 2px 2px 2px #86A8E7;
`;

const Text = styled.p`
  font-weight: bold;
  font-size: 21px;
  margin-top: 20px;
  color: #666;
`;


const Frase = ({frase}) =>{
  return(
    <Container>
      <Title>{frase.quote}</Title>
      <Text>{frase.author}</Text>
    </Container>
  );
}

export default Frase;
