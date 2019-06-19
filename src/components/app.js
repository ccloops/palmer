import React, { Component } from 'react';
import styled from 'styled-components';
import Slash from '../assets/slash.png';

import Jobs from './jobs';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3em;
  // background-color: #CDDCDF;
  // background: 
  // linear-gradient(to top left,
  //     rgba(0,0,0,0) 0%,
  //     rgba(0,0,0,0) calc(50% - 0.8px),
  //     rgba(0,0,0,1) 50%,
  //     rgba(0,0,0,0) calc(50% + 0.8px),
  //     rgba(0,0,0,0) 100%),
  // linear-gradient(to top right,
  //     rgba(0,0,0,0) 0%,
  //     rgba(0,0,0,0) calc(50% - 0.8px),
  //     rgba(0,0,0,1) 50%,
  //     rgba(0,0,0,0) calc(50% + 0.8px),
  //     rgba(0,0,0,0) 100%);
`;

const HorizontalRow = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
  margin-bottom: 3em;
`;

const TitleOne = styled.h1`
  font-size: 3em;
  // background-color: black;
  // color: white;
  line-height: 3em;
`;

const TitleTwo = styled.h1`
  color: #527590;
  font-size: 3em;
  line-height: 3em;
`;

const Image = styled.img`
  display: inline;
  width: 8em;
  height: 8em;
`;

export default class App extends Component {
  state = {
    jobs: [],
  };

  viewJob() {

  }

  render() {
    return (
      <div>
        <HorizontalRow />
        <Container>
          <TitleOne>Palmer Kennedy Painting</TitleOne>
          <Image src={Slash} />
          <TitleTwo>Transforming Interior Spaces</TitleTwo>
        </Container>
        <HorizontalRow />
        <Jobs id="jobs" />
      </div>
    );
  }
}
