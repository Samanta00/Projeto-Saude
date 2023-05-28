import React from "react";
import ButtonCadastro from '../postCadastro/postButton'
import { BotaoVoltar } from "../updateRegistration/buttonBack";
import '../css/cadastro.css'

const Formulario=()=>{
    return(
        <div className="classeMae">
            <h2 id="titulo-form">Novo Usuário</h2>
        <form id="form-adiciona" >
        <div className="">
            <label for="nome">Nome</label>
            <input id="nome" name="nome" type="text" placeholder="digite o nome do seu cliente" className="campo" />
        </div>
        <div className="grupo">
            <label for="email">Email</label>
            <input id="email" name="email" type="text" placeholder="digite o email do seu cliente" className="campo campo-medio" />
        </div>
        <div className="grupo">
            <label for="telefone">Telefone</label>
            <input id="telefone" name="telefone" type="text" placeholder="digite o telefone do seu cliente" className="campo campo-medio" />
        </div>
        <div className="grupo">
            <label for="endereco">Endereco</label>
            <input id="endereco" type="endereco" placeholder="digite o endereço do seu cliente" className="campo campo-medio" />
        </div>
        <div className="grupo">
            <label for="cpf">CPF</label>
            <input id="cpf" type="cpf" placeholder="digite o cpf do seu cliente" className="campo campo-medio" />
        </div> 
    </form>

    <div className="botoes">
        <BotaoVoltar/>
        <ButtonCadastro/>
    </div>
 
    </div>
    )
}
export default Formulario