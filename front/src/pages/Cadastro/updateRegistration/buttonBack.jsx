import React from "react";
import { useNavigate } from 'react-router-dom';

export const BotaoVoltar=()=>{
    const navigate = useNavigate()
    function Voltar() {
        return navigate(`/`)
    }
    return (
        <>
            <button onClick={Voltar}>Voltar</button>
        </>
    
    )
}
