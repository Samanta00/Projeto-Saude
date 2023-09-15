import React, { useState } from "react";

import Navbar from "../../component/NavBar";
import ModalOptions from "../../component/NavBar/ModalOptions";
import Conteudo from "./paginas/Conteudo";

const Index = () => {

  return (
    <>
      <Navbar />
      <ModalOptions />
      <Conteudo/>
    </>
  );
};

export default Index;
