import React from "react";
import ConteudoResultados from "./conteudo";
import Navbar from '../../component/NavBar';
import ModalOptions from '../../component/NavBar/ModalOptions'


const Resultados=()=>{
    return(
        <>
        <Navbar />
        <ModalOptions />
        <ConteudoResultados/>
        </>
  
    )
}

export default Resultados;