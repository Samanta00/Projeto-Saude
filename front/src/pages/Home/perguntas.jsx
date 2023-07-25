import React from "react";
import "./conteudo.css";
import aceno from "../../assets/img/acenando.jpg";
import medicoAceno from "../../assets/img/medicoAcenando.jpg";

function Perguntas() {
  return (
    <div className="container__perguntas">
      <h2 className="subtitulo-verde">Dúvidas</h2>

      <div className="container__perguntas-caixa">
        <div className="container__perguntas-conteudo">
          <h3 className="perguntaIntrodutoria">
            O'que eu aprenderei com esse sistema de software?
          </h3>
          <div className="container__resposta">
            <h4 className="resposta__texto texto-centralizado">
              Com o Gold teeth health Você terá um gerenciador que te trará
              diversas formas alarmantes para a prevenção e conhecimento do cancer
              bucal, o sistema de software foi projetado para auxiliar de uma
              forma divertida e educativa Pessoas que sofram ou não com a doença
            </h4>
          </div>
        </div>
      </div>

      <div className="container__perguntas-caixa">
        <div className="container__perguntas-conteudo">
          <h3 className="perguntaIntrodutoria">
            Não sofro com A doença, Como o Sistema Poderia me Ajudar?
          </h3>
          <div className="container__resposta">
            <h4 className="resposta__texto">
              O Projeto de Software tras diversas formas educacionais e
              objetivas para a prevenção e o conhecimento do cancer bucal,
              desta forma uma pessoa saudavel será Ciente Sobre o assunto e
              suas responsabilidades para uma saúde saudavel.
            </h4>
          </div>
        </div>
        <img src={aceno} alt="" />
      </div>

      <div className="container__perguntas-caixa">
        <img src={medicoAceno} alt="" className="perguntas-segunda__imagem" />
        <div className="container__perguntas-conteudo">
          <h3 className="perguntaIntrodutoria">
            Sofro com A doença, Como o Sistema Poderia me Ajudar?
          </h3>
          <div className="container__resposta">
            <h4 className="resposta__texto">
              Na Plataforma do Sistema de Software existem alguns cuidados
              especiais pensados em você, uns deles é o calendário de
              medicamentos assim que você agendar os dias para seus remedios
              será enviado uma mensagem no seu whatsapp para te lembrar do
              medicamento necessário para o dia agendado. Como forma de
              auxilia-lo(a) a um bem estar melhor, existe uma categoria de
              recomendações médicas no sistema para que você saiba com qual
              especialista médico realmente você pode se orientar.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Perguntas;
