import React from 'react';
import Conteudo from './conteudo';

// Navegação
import Navbar from '../../component/NavBar';
import ModalOptions from '../../component/NavBar/ModalOptions'



function PagesHome(props) {
  return (
    <>
      <Navbar />
      <ModalOptions />
      <Conteudo/>
    </>

  )
};

export default PagesHome;