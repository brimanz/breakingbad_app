import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import Frase from './components/Frase'
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 50px;
  flex-direction: column;
  width: 100%;
`;

const Boton = styled.button`
  background: #86A8E7;
  color: #f5f5f5;
  padding: 20px;
  font-weight: bold;
  margin-top: 50px;
  border-radius: 10px;
  width: 250px;
  box-shadow: 2px 2px 2px #BBD2C5;
  &&:hover{
    background: #f5f5f5;
    color: #86A8E7;
  }
`;


function App() {

  //usando el state
  const [frase, guardarFrase] = useState({})


  const consultarAPI = async ()=>{
    const api = await fetch('https://www.breakingbadapi.com/api/quote/random');
    const frase = await api.json()
    guardarFrase(frase[0]);
  }

  useEffect(()=>{
    consultarAPI();
  },[])

  return (
    <div>
      <Header/>
      <Container>
        <Frase
          frase={frase}
        />
        <Boton
          onClick={consultarAPI}
        >New quote
        </Boton>
      </Container>
    </div>

  );
}

export default App;
