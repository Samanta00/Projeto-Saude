import React from 'react';
import Conteudo from './introducao';
import Perguntas from './perguntas';

import Navbar from '../../component/NavBar';
import ModalOptions from '../../component/NavBar/ModalOptions'



function PagesHome(props) {
  return (
    <>
      <Navbar />
      <ModalOptions />
      <Conteudo/>
      <Perguntas/>
    </>

  )
};

export default PagesHome;