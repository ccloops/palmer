import React from 'react';
import styled from 'styled-components';
import Job from './job';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background-color: #CDDCDF;

  @media (max-width: 768px) {
    flex-direction: column;
    align-content: center;
  }
`;

const Jobs = () => (
  <Container>
    <Job />
    <Job />
    <Job />

  </Container>
);

export default Jobs;
