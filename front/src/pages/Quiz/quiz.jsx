import React from 'react';
import Conteudo from './conteudo';

import './quiz.css'

import Navbar from '../../component/NavBar';
import ModalOptions from '../../component/NavBar/ModalOptions';





function Quiz() {
  return (
    <>
      <Navbar/>
      <ModalOptions/>
      <Conteudo/>
    </>

  )
};

export default Quiz;