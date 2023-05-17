import React from 'react';
import { Route, } from 'react-router-dom';
import AuthLayout from '../../component/index';

import PagesHome from '../../pages/Home/home';
import Quiz from '../../pages/Quiz/quiz';
import UserLogin from '../../pages/Login/login';

// import Pagesdog from '../../pages/CutDog/PagesCutDog';
// import PagesForm from '../../pages/Cadastro/postCadastro/PagesForm';
// import PagesEditForm from '../../pages/Cadastro/updateRegistration/form';

export const PrivateRoutes = () => (
    <>
        <Route element={<AuthLayout />}>


            <Route path="/home" element={<PagesHome />} />
            <Route path="/quiz" element={<Quiz/>} />
            {/* <Route path="/dog" element={<Pagesdog />} />
            <Route path="/form" element={<PagesForm />} />
            <Route path="/editformulario/:id" element={<PagesEditForm />} /> */}

        </Route>
    </>
)