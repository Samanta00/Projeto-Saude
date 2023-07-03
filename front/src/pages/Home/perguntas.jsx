import React from "react";
import "./conteudo.css";
import aceno from "../../assets/img/acenando.jpg";
import medicoAceno from "../../assets/img/medicoAcenando.jpg";


function Perguntas(){
    const virarCarta = () => {
        const card = document.querySelectorAll("#card");
        card.forEach((card) => {
          card.addEventListener("click", (e) => {
            card.classList.toggle("flip");
          });
        });
      };
    return(
        <div className="colunao">
          <div className="coluna1">
            <h4 className="pergunta">
              {" "}
              Não sofro com A doença, Como o Sistema Poderia me Ajudar?
            </h4>
            <div className="flip" id="card" onClick={virarCarta}>
              <div className="face" id="front">
                <img src={aceno} className="aceno" />
              </div>

              <div className="face" id="back">
                O Projeto de Software tras diversas formas educacionais e
                objetivas para a prevenção e o conhecimento do cancer bucal,
                desta forma uma pessoa saudavel será Ciente Sobre o assunto e
                suas responsabilidades para uma saúde saudavel.
              </div>
            </div>
          </div>

          <div className="coluna2">
            <h4 className="pergunta">
              {" "}
              Sofro com A doença, Como o Sistema Poderia me Ajudar?
            </h4>
            <div className="flip" id="card" onClick={virarCarta}>
              <div className="face" id="front">
                <img src={medicoAceno} className="aceno" />
              </div>

              <div className="face" id="back">
                Na Plataforma do Sistema de Software existem alguns cuidados
                especiais pensados em você, uns deles é o calendário de
                medicamentos assim que você agendar os dias para seus remedios
                será enviado uma mensagem no seu whatsapp para te lembrar do
                medicamento necessário para o dia agendado. Como forma de
                auxilia-lo(a) a um bem estar melhor, existe uma categoria de
                recomendações médicas no sistema para que você saiba com qual
                especialista médico realmente você pode se orientar.
              </div>
            </div>
          </div>
        </div>
    )
}
export default Perguntas;