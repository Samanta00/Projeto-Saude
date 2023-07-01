import React, { useState } from "react";
import Conteudo from "./conteudo";
import DicasSuspeitaCancerBucal from "./dicas";
import MenuEstados from "./MenuEstados";
import ClinicasPorEstado from "./ClinicasPorEstado";
import Navbar from "../../component/NavBar";
import ModalOptions from "../../component/NavBar/ModalOptions";

const Index = () => {
  const [estadoSelecionado, setEstadoSelecionado] = useState(null);
  const handleSelectEstado = (estado) => {
    setEstadoSelecionado(estado);
  };

  return (
    <>
      <Navbar />
      <ModalOptions />
      <div style={{ display: "inline-block" }}>
        <MenuEstados onSelectEstado={handleSelectEstado} />
      </div>
      {estadoSelecionado && <ClinicasPorEstado estado={estadoSelecionado} />}
      <Conteudo />
      <DicasSuspeitaCancerBucal />
    </>
  );
};

export default Index;
