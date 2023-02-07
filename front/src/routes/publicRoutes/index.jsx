import React from 'react';
import { Route } from 'react-router-dom';
import PagesHome from '../../pages/Home/home';
import PagesLogin from '../../pages/Login/login';


export const PublicRoutes = () => (
  <React.Fragment>
    <Route path="/" element={<PagesLogin />} />
  </React.Fragment>
)





