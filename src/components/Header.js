import React from 'react';
import styled from '@emotion/styled';

const Title = styled.h1`
  background: #86A8E7;
  color: #f5f5f5;
  font-weight: bold;
  padding: 30px;
  text-shadow: 2px 2px 2px #000000;
  font-size: 47px;
`;

const Header = () =>{
  return(
    <Title className='text-center'>Breaking Bad</Title>
  )
}

export default Header;
