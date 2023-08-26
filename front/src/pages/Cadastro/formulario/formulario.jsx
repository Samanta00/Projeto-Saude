import React from "react";
import ButtonCadastro from "../postCadastro/PostButton";
import { BotaoVoltar } from "../updateRegistration/buttonBack";
import "../css/cadastro.css";

const Formulario = () => {
  return (
    <div className="classeMae">
      <h2 id="titulo-form">Novo Usuário</h2>
      <form id="form-adiciona">
        <div className="">
          <label for="nome">Nome</label>
          <input
            id="nome"
            name="nome"
            type="text"
            placeholder="Digite seu nome completo no campo"
            className="campo"
          />
        </div>
        <div className="grupo">
          <label for="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Ex:Ana.nunes@hotmail.com"
            className="campo campo-medio"
          />
        </div>
        <div className="grupo">
          <label for="telefone">Telefone</label>
          <input
            id="telefone"
            name="telefone"
            type="text"
            placeholder="EX:+55(81)981311245"
            className="campo campo-medio"
          />
        </div>
        <div className="grupo">
          <label for="endereco">Endereco</label>
          <input
            id="endereco"
            type="endereco"
            placeholder="Seu Endereço"
            className="campo campo-medio"
          />
        </div>
        <div className="grupo">
          <label for="cpf">CPF</label>
          <input
            id="cpf"
            type="cpf"
            placeholder="Digite seu CPF"
            className="campo campo-medio"
          />
        </div>
        <div className="grupo">
          <label for="cpf">Senha</label>
          <input
            id="senha"
            type="senha"
            placeholder="Digite uma senha"
            className="campo campo-medio"
          />
        </div>
      </form>

      <div className="container__botaoVoltar">
        <p>Já tem uma conta? <BotaoVoltar>Faça login aqui</BotaoVoltar></p>
      </div>

      <div className="botoes">
        {/* <BotaoVoltar /> */}
        <ButtonCadastro />
      </div>
    </div>
  );
};
export default Formulario;
