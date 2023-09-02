import React from "react";
import "./conteudo.css";
import dentista from "../../assets/img/dentista-editado.png";

function Conteudo() {
  return (
    <> <hr/>
      <div className="container__primario">
        <div className="container__caixa">
          <div className="container__caixa-icone">
            <img src={dentista} className="iconeSite" />
          </div>
         
          <div className="container__caixa-conteudo">
            <h1 className="container__titulo">Gold teeth health</h1>
            <h2 className="container__comentario">
              Olá, Me chamo Sr Dentista, Sou responsável por realizar exames
              clínico extra-buca e intra-bucal afim de encontrar Anormalidade para
              a prevenção do cancer bucal, como forma de prevenção e aprendizado
              educacional estou presente nesse sistema de software para te ensinar
              a ter um conhecimento superior sobre o cancer oral e suas prevenções
            </h2>
          </div>
          
        </div>
      </div>
      <hr/>
    </>
  );
}

export default Conteudo;
