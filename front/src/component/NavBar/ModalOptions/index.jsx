import React, { useState } from "react";
import { Link } from "react-router-dom";
import './index.css';
// assets
import UserImg from '../../../assets/img/euu.jpeg';

const ModalOptions = () => {
  const [OpenModal, setOpenModal] = useState(false);
  const [modalOptions, setModalOptions] = useState("modal hidden-modal");
  const [arrowShow, setArrowShow] = useState("arrow hidden-arrow");

  const OptionModal = () => {
      if(!OpenModal) {
        setModalOptions("modal visible-modal")
        setArrowShow("arrow visible-arrow")
      }
      else {
        setModalOptions("modal hidden-modal")
        setArrowShow("arrow hidden-arrow")
      }
      setOpenModal(!OpenModal)
  }

  return(
    <>
    <div className="UserContainer">
      <h3 className="UserName">User</h3>
      <img 
        className="UserImg" 
        src={UserImg} alt="User Image" 
        onClick={OptionModal}
      />
    </div>
    <div className={modalOptions}>
    <div className={arrowShow}></div>
      <ul>
        <li>Perfil</li>
        <li>Configurações</li>
        <li>Sair</li>
      </ul>
    </div>
    </>
  );
}

export default ModalOptions