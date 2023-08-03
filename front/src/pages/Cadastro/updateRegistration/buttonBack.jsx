import React from "react";
import { useNavigate } from 'react-router-dom';
import "../css/cadastro.css"

export const BotaoVoltar=({ children })=>{
    const navigate = useNavigate()
    function Voltar() {
        return navigate(`/`)
    }
    return (
        <>
            <span onClick={Voltar}>{children}</span>
        </>
    
    )
}
