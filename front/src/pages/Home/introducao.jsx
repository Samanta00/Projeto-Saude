import React from "react";
import "./conteudo.css";
import dentista from "../../assets/img/doutorDentista.jpg";

function Conteudo() {
  return (
    <>
      <div className="divMae">
        <div className="bloco1">
          {/* <hr /> */}
          <h1 className="tema">Gold teeth health</h1>
          <div className="blocoEsquerdoPrincipal">
            <img src={dentista} className="iconeSite" />

            <article className="font">
              <p className="link">
                fonte:https://br.freepik.com/vetores-premium/logotipo-do-medico-dentista-segurando-o-desenho-do-mascote-do-desenho-animado-de-dente-triste_11686850.htm
              </p>
            </article>
            <div className="blocoDireitoPrincipal">
            <h2 className="comentario">
              "Olá, Me chamo Sr Dentista, Sou responsável por realizar exames
              clínico extra-buca e intra-bucal afim de encontrar Anormalidade
              para a prevenção do cancer bucal, como forma de prevenção e
              aprendizado educacional estou presente nesse sistema de software
              para te ensinar a ter um conhecimento superior sobre o cancer oral
              e suas prevenções"
            </h2>
          </div>
          </div>

          
        </div>
      </div>
      <hr />

      <div className="bloco2">
        <h3 className="perguntaIntrodutoria">
          O'que eu aprenderei com esse sistema de software?
        </h3>

        <div className="introducao">
          <h4>
            Com o Gold teeth health Você terá um gerenciador que te trará 
            diversas formas alarmantes para a prevenção e conhecimento do 
            cancer bucal, o sistema de software foi projetado para auxiliar de
            uma forma divertida e educativa Pessoas que sofram ou não com a
            doença{" "}
          </h4>
        </div>
     
      </div>
    </>
    
  );
}

export default Conteudo;
