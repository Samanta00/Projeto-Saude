import React from 'react';
import { Route } from 'react-router-dom';
import Start from '../../pages/Start';
import PagesHome from '../../pages/Home/home';
import PagesLogin from '../../pages/Login/login';
import Cadastro from '../../pages/Cadastro/updateRegistration/form'
import Quiz from '../../pages/Quiz';

export const PublicRoutes = () => (
  <React.Fragment>
    <Route path='/' element={<Start/>}/>

    <Route path="/login" element={<PagesLogin />} />
    <Route path='/create' element={<Cadastro/>}/>
    <Route path='/quiz' element={<Quiz/>}/>
  </React.Fragment>
)





