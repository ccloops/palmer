import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import App from './src/components/app';
import Jobs from './src/components/jobs';
import Contact from './src/components/contact';
import './src/styles/reset.css';
import './src/styles/style.css';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

const ListItem = styled.li`
  color: black;
  display: inline-block;
  font-size: 2em;
  margin: 1em;

  &:hover {
    color: pink;
  }
`;

ReactDOM.render((
  <BrowserRouter>
    <Nav>
      <ul>
        <ListItem><Link className="nav" to="/">Home</Link></ListItem>
        <ListItem><Link className="nav" to="/jobs">Jobs</Link></ListItem>
        <ListItem><Link className="nav" to="/contact">Contact</Link></ListItem>
      </ul>
    </Nav>
    <Route exact path="/" component={App} />
    <Route path="/jobs" component={Jobs} />
    <Route path="/contact" component={Contact} />
  </BrowserRouter>
), document.getElementById('root'));
