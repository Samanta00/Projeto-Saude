import React, { useState } from "react";

import Navbar from '../../component/NavBar';
import ModalOptions from '../../component/NavBar/ModalOptions'
import QuizInicio from "./paginas/QuizInicio";

export default function Quiz() {
 
  return (
    <>
      <Navbar />
      <ModalOptions />
      <QuizInicio/>
   
    </>
  );
}
