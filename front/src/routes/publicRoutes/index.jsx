import React from 'react';
import { Route } from 'react-router-dom';
import Start from '../../pages/Start';
import PagesHome from '../../pages/Home/home';
import PagesLogin from '../../pages/Login/login';
import Cadastro from '../../pages/Cadastro/updateRegistration/form'
import Quiz from '../../pages/Quiz';
import Agenda from '../../pages/Agenda';
import Recomendacoes from '../../pages/Recomendacoes/index.jsx';
import Resultados from '../../pages/Resultados';
import PerguntasQuiz from '../../pages/Quiz/paginas/PerguntasQuiz';

export const PublicRoutes = () => (
  <React.Fragment>
    <Route path='/' element={<Recomendacoes/>}/>
    <Route path='/home' element={<PagesHome/>}/>
    <Route path='/agendamento' element={<Agenda/>}/>
    <Route path='/recomendacoes' element={<Recomendacoes/>}/>
    <Route path='/resultados' element={<Resultados/>}/>
    <Route path="/login" element={<PagesLogin />} />
    <Route path='/create' element={<Cadastro/>}/>
    <Route path='/quiz' element={<Quiz/>}/>
    <Route path='/perguntas' element={<PerguntasQuiz/>}/>
  </React.Fragment>
)





