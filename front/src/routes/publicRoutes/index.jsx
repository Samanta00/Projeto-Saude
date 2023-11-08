import React from 'react';
import { Route } from 'react-router-dom';
import Start from '../../pages/Start';
import PagesHome from '../../pages/Home/home';
import PagesLogin from '../../pages/Login/login';
import Cadastro from '../../pages/Cadastro/updateRegistration/form'
import Quiz from '../../pages/quiz 2.0/quizNavegation';
import Agenda from '../../pages/Agenda';
import Recomendacoes from '../../pages/Recomendacoes/index.jsx';
import Resultados from '../../pages/Resultados';
import PerguntasQuiz from '../../pages/Quiz/index';
import Galeria from '../../pages/galeria/galeria-cancer.jsx';


export const PublicRoutes = () => (
  <React.Fragment>
    <Route path='/' element={< Agenda/>}/>
    <Route path='/home' element={<PagesHome/>}/>
    <Route path='/start' element={<Start/>}/>
    <Route path='/quiz' element={<Quiz/>}/>
    <Route path='/agenda' element={<Agenda/>}/>
    <Route path='/recomendacoes' element={<Recomendacoes/>}/>
    <Route path='/galeria' element={<Galeria/>}/>
    <Route path='/resultados' element={<Resultados/>}/>
    <Route path="/login" element={<PagesLogin />}/>
    <Route path='/cadastro' element={<Cadastro/>}/>
    <Route path='/perguntas' element={<PerguntasQuiz/>}/>
  </React.Fragment>
)





