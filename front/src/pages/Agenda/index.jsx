import React from "react";
import AgendaMedicacao from "./conteudo";
import Navbar from "../../component/NavBar";
import ModalOptions from "../../component/NavBar/ModalOptions";




function Agenda(props) {
  return (
    <>
      <Navbar />
      <ModalOptions />
      <AgendaMedicacao/>
    </>

  )
};

export default Agenda;
