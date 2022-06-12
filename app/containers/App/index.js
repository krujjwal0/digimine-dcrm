/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useState } from 'react';

import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import LoginPage from 'containers/LoginPage/LoginPage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
// import LoginPage2 from '../LoginPage/LoginPage';
import OtpPage from '../LoginPage/OtpPage';
import DashboardContent from './DashboardContent';
import GlobalStyle from '../../global-styles';
import { NavBar } from '../../components/NavBar/NavBar';
import Dashboard from '../Dashboard/Loadable';
import Regulatory from '../Regulatory';
import Categories from '../Categories';
import Users from '../Regulatory/Users';

// const AppWrapper = styled.div`
//   max-width: calc(768px + 16px * 2);
//   margin: 0 auto;
//   display: flex;
//   min-height: 100%;
//   padding: 0 16px;
//   flex-direction: column;
// `;

export default function App() {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="w-full h-full dis">
        <Router>
          {nav ? <NavBar /> : null}
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/categories" component={Categories} />
            <Route path="/regulatory" component={Regulatory} />
            <Route path="/features" component={FeaturePage} />
            {/* <Route path="/login" component={LoginPage2} /> */}
            <Route path="/otp" component={OtpPage} />
            <Route path="/users" component={Users} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </div>
      {/* <Switch>
        <Route path="/splash" component={LoginPage} />
        <Route path="/login" component={LoginPage2} />
        <Route path="/otp" component={OtpPage} /> 
        <Route path="/DashboardContent" component={DashboardContent} />
      </Switch>
       */}
      <GlobalStyle />
    </>
  );
}
