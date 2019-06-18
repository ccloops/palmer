import React from 'react';
import styled from 'styled-components';
import Slash from '../assets/slash.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const TitleOne = styled.h1`
  font-size: 3em;
  background-color: black;
  color: white;
`;

const TitleTwo = styled.h1`
  font-size: 3em;
`;

const Image = styled.img`
  display: inline;
  width: 8em;
  height: 8em;
`;

const App = () => (
  <Container>
    <TitleOne>Palmer Kennedy Painting</TitleOne>
    <Image src={Slash} />
    <TitleTwo>Transforming Interior Spaces</TitleTwo>
  </Container>
);

export default App;
