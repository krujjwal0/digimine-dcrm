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
import OtpPage from '../LoginPage/OtpPage';
import EmpLogin from '../LoginPage/EmpLogin';
import DashboardContent from './DashboardContent';
import GlobalStyle from '../../global-styles';
import { NavBar } from '../../components/NavBar/NavBar';
import Dashboard from '../Dashboard/Loadable';
import Regulatory from '../Regulatory';
import Categories from '../Categories';
import MyProfile from '../MyProfile/Loadable';
import Listadd2 from '../ListAdd2/index';
import Listadd from '../ListAdd/index';
import Location from '../LoginPage/ChooseLocation';
import Users from '../Regulatory/Users';
import History from '../History';


export default function App() {
  const [nav, setNav] = useState(true);
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
            <Route path="/otp" component={OtpPage} />
            <Route path="/users" component={Users} />
            <Route path="/listadd" component={Listadd} />
            <Route path="/listadd2" component={Listadd2} />
            <Route path="/location" component={Location} />
            <Route path="/empLogin" component={EmpLogin} />
            <Route path="/myprofile" component={MyProfile} />
            <Route path="/history" component={History} />

            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </div>

      <GlobalStyle />
    </>
  );
}
