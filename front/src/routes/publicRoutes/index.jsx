import React from 'react';
import { Route } from 'react-router-dom';
import PagesHome from '../../pages/Home/home';
// import PagesLogin from '../../pages/Login/login';
import Cadastro from '../../pages/Cadastro/updateRegistration/form'


export const PublicRoutes = () => (
  <React.Fragment>
    <Route path="/" element={<PagesHome />} />
    <Route path='/create' element={<Cadastro/>}/>
  </React.Fragment>
)





