import React, { useState } from "react";
import "./conteudo.css";
import aceno from "../../assets/img/acenando.jpg";
import medicoAceno from "../../assets/img/medicoAcenando.jpg";
import woman from "../../assets/img/woman-cellphone.jpg";

function Perguntas() {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tabIndex, event) => {
    event.preventDefault(); // Impede o redirecionamento
    if (activeTab === tabIndex) {
      setActiveTab(null); // Fecha a aba se ela já estiver aberta
    } else {
      setActiveTab(tabIndex);
    }
  };
  return (
    <div className="container__perguntas">

      <div className="womanTeste"><img src={woman} className="womanphoto"></img></div>
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
      <div>

        <div>

        </div>
        <div className="container__perguntas-caixa">
          <div className="container__perguntas-imagem">
            <img
              decoding="async"
              width="800"
              height="640"
              src="https://queirozodontologia.com.br/wp-content/uploads/2023/05/2.png"
              className="attachment-large size-large"
              alt=""
              loading="lazy"
              srcSet="https://queirozodontologia.com.br/wp-content/uploads/2023/05/2.png 992w, https://queirozodontologia.com.br/wp-content/uploads/2023/05/2-300x240.png 300w, https://queirozodontologia.com.br/wp-content/uploads/2023/05/2-768x615.png 768w"
              sizes="(max-width: 800px) 100vw, 800px"
            />
          </div>
          <div className="container__perguntas-titulo">
            <div className="elementor-heading-title">
              Quais são as vantagens desse procedimento?
            </div>
            <div
              id="elementor-tab-title-1981"
              className="elementor-tab-title"
              data-tab="1"
              role="tab"
              aria-controls="elementor-tab-content-1981"
              aria-expanded={activeTab === 1}
              tabIndex="-1"
              aria-selected={activeTab === 1}
              onClick={(event) => handleTabClick(1, event)}
            >
              <span className="elementor-accordion-icon elementor-accordion-icon-left" aria-hidden="true">
                <span className="elementor-accordion-icon-closed"><i className="fas fa-plus"></i></span>
                <span className="elementor-accordion-icon-opened"><i className="fas fa-minus"></i></span>
              </span>
              <a className="elementor-accordion-title" href="#">Alívio do estresse e ansiedade</a>
            </div>
            {activeTab === 1 && (
              <div
                id="elementor-tab-content-1981"
                className={`elementor-tab-content elementor-clearfix ${activeTab === 1 ? "elementor-active" : ""
                  }`}
                data-tab="1"
                role="tabpanel"
                aria-labelledby="elementor-tab-title-1981"
                style={{ display: activeTab === 1 ? "block" : "none" }}
              >
                <p>A sedação consciente com óxido nitroso é uma ferramenta eficaz para aliviar o estresse e a ansiedade associados aos tratamentos odontológicos. Ela permite que os pacientes relaxem e esqueçam as preocupações e medos, tornando a experiência no consultório odontológico muito mais tranquila.</p>
              </div>
            )}
          </div>
        </div>


      </div>
    </div>







  );
}
export default Perguntas;
