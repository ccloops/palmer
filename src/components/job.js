import React from 'react';
import styled from 'styled-components';
import Katherine from '../assets/katherine.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20em;
  height: 20em;
  margin-top: 3em;
  margin-bottom: 3em;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
    &:hover {
      cursor: pointer;
      transform: scale(1.01);
      box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
    }
`;

const Title = styled.h3`
  text-align: center;
  margin-top: 3em;
  color: #F2E1CD;
`;

const Image = styled.img`
  object-fit: contain;
  max-width: 100%;
  margin: 0 auto;
`;


const Job = () => (
  <Container>
    <Title>Katherine</Title>
    <Image src={Katherine} />
  </Container>
);

export default Job;
