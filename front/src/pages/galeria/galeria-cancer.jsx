import React from 'react';
import Navbar from '../../component/NavBar';
import ModalOptions from '../../component/NavBar/ModalOptions'
import Conteudogaleria from './conteudo-galeria'


function Galeria (){
    return(<>
    <Navbar />
    <ModalOptions />
    <Conteudogaleria />
    </>
    )

}

export default Galeria;