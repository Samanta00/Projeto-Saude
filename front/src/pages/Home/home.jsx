import React, { useState } from 'react';
import Menu from '../navBar/menu';
import Conteudo from './conteudo';




function PagesHome(props) {
  return (
    <>
      <Menu />
      <Conteudo/>
    </>

  )
};

export default PagesHome;