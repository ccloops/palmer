import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
// import styled from 'styled-components';
// import FakeLogo from './src/assets/katherine.png';

import App from './src/components/app';
import Jobs from './src/components/jobs';
import Contact from './src/components/contact';
import './src/styles/reset.css';
import './src/styles/style.css';

// const Nav = styled.nav`
// `;

// const Container = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

// const UnorderedList = styled.ul`
//   display: flex;
//   justify-content: flex-end;
// `;

// const ListItem = styled.li`
//   color: black;
//   display: inline-block;
//   font-size: 2em;
//   margin: 1em;

//   &:hover {
//     color: pink;
//   }
// `;

// const Icon = styled.img`
//   width: 10em;
//   height: 10em;
//   margin: 2em 0 0 2em;
// `;

ReactDOM.render((
  <BrowserRouter>
    <nav>
      <ul>
        <li>lologo</li>
        {/* <li><img src={FakeLogo} /></li> */}
        <li><Link className="nav" to="/">Home</Link></li>
        <li><Link className="nav" to="/jobs">Jobs</Link></li>
        <li><Link className="nav" to="/contact">Contact</Link></li>
      </ul>
    </nav>
    <Route exact path="/" component={App} />
    <Route path="/jobs" component={Jobs} />
    <Route path="/contact" component={Contact} />
  </BrowserRouter>
), document.getElementById('root'));
