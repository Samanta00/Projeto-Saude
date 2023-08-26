import React from 'react';
import { Route, } from 'react-router-dom';
import AuthLayout from '../../component/index';

import PagesHome from '../../pages/Home/home';
import Quiz from '../../pages/Quiz/index.jsx';
import Recomendacoes from '../../pages/Recomendacoes/index.jsx';
import Agenda from '../../pages/Agenda/index.jsx';



// import Pagesdog from '../../pages/CutDog/PagesCutDog';
// import PagesForm from '../../pages/Cadastro/postCadastro/PagesForm';
// import PagesEditForm from '../../pages/Cadastro/updateRegistration/form';

export const PrivateRoutes = () => (
    <>
        <Route element={<AuthLayout />}>


           {/* <Route path="/home" element={<PagesHome/>}/> */} 
            <Route path="/quiz" element={<Quiz/>} />
            <Route path='/recomendacoes' element={<Recomendacoes/>}/>
            <Route path='/agendamento' element={<Agenda/>}/>

            {/* <Route path="/dog" element={<Pagesdog />} />
            <Route path="/form" element={<PagesForm />} />
            <Route path="/editformulario/:id" element={<PagesEditForm />} /> */}

        </Route>
    </>
)