import React, { useState } from "react";
import "./conteudo.css";
import aceno from "../../assets/img/acenando.jpg";
import servicos from "../../assets/img/euu.jpeg";
import woman from "../../assets/img/euu.jpg";
import clinica from "../../assets/img/clinica.png";
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous"></link>

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [woman, woman, woman]; // Substitua com suas imagens

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <div className="container__perguntas">
      <div className="womanTeste">
        <img src={woman} className="womanphoto" alt="" />
      </div>
      <h2 className="subtitulo-verde">Dúvidas</h2>

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
            className={`elementor-tab-title ${activeTab === 1 ? "elementor-active" : ""
              }`}
            data-tab="1"
            role="tab"
            aria-controls="elementor-tab-content-1981"
            aria-expanded={activeTab === 1}
            tabIndex="-1"
            aria-selected={activeTab === 1}
            onClick={(event) => handleTabClick(1, event)}
          >
            <span
              className={`elementor-accordion-icon ${activeTab === 1
                ? "elementor-accordion-icon-opened"
                : "elementor-accordion-icon-closed"
                }`}
            >
              <i className="fas fa-minus"></i>
            </span>
            <a className="elementor-accordion-title" href="#">
              Sofro com A doença, Como o Sistema Poderia me Ajudar?
            </a>
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
              <p>
                Na Plataforma do Sistema de Software existem alguns cuidados
                especiais pensados em você, uns deles é o calendário de
                medicamentos assim que você agendar os dias para seus remedios
                será enviado uma mensagem no seu whatsapp para te lembrar do
                medicamento necessário para o dia agendado. Como forma de
                auxilia-lo(a) a um bem estar melhor, existe uma categoria de
                recomendações médicas no sistema para que você saiba com qual
                especialista médico realmente você pode se orientar.
              </p>
            </div>
          )}
          <div className="container__perguntas-titulo">

            <div
              id="elementor-tab-title-1981"
              className={`elementor-tab-title ${activeTab === 1 ? "elementor-active" : ""
                }`}
              data-tab="1"
              role="tab"
              aria-controls="elementor-tab-content-1981"
              aria-expanded={activeTab === 1}
              tabIndex="-1"
              aria-selected={activeTab === 1}
              onClick={(event) => handleTabClick(1, event)}
            >
              <span
                className={`elementor-accordion-icon ${activeTab === 1
                  ? "elementor-accordion-icon-opened"
                  : "elementor-accordion-icon-closed"
                  }`}
              >
                <i className="fas fa-minus"></i>
              </span>
              <a className="elementor-accordion-title" href="#">
                Não sofro com A doença, Como o Sistema Poderia me Ajudar?
              </a>
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
                <p>
                  O Projeto de Software tras diversas formas educacionais e
                  objetivas para a prevenção e o conhecimento do cancer bucal,
                  desta forma uma pessoa saudavel será Ciente Sobre o assunto e
                  suas responsabilidades para uma saúde saudavel.
                </p>
              </div>
            )}
          </div>

          {/* Segundo acordeão */}
          <div className="container__perguntas-titulo">

            <div
              id="elementor-tab-title-1982"
              className={`elementor-tab-title ${activeTab === 2 ? "elementor-active" : ""
                }`}
              data-tab="2"
              role="tab"
              aria-controls="elementor-tab-content-1982"
              aria-expanded={activeTab === 2}
              tabIndex="-1"
              aria-selected={activeTab === 2}
              onClick={(event) => handleTabClick(2, event)}
            >
              <span
                className={`elementor-accordion-icon ${activeTab === 2
                  ? "elementor-accordion-icon-opened"
                  : "elementor-accordion-icon-closed"
                  }`}
              >
                <i className="fas fa-minus"></i>
              </span>
              <a className="elementor-accordion-title" href="#">
                Título do segundo acordeão
              </a>
            </div>
            {activeTab === 2 && (
              <div
                id="elementor-tab-content-1982"
                className={`elementor-tab-content elementor-clearfix ${activeTab === 2 ? "elementor-active" : ""
                  }`}
                data-tab="2"
                role="tabpanel"
                aria-labelledby="elementor-tab-title-1982"
                style={{ display: activeTab === 2 ? "block" : "none" }}
              >
                <p>
                  Conteúdo do segundo acordeão.
                </p>
              </div>
            )}
          </div>
          {/* ... previous code ... */}

          {/* Third acordeão */}
          <div className="container__perguntas-titulo">

            <div
              id="elementor-tab-title-1982"
              className={`elementor-tab-title ${activeTab === 2 ? "elementor-active" : ""
                }`}
              data-tab="2"
              role="tab"
              aria-controls="elementor-tab-content-1982"
              aria-expanded={activeTab === 2}
              tabIndex="-1"
              aria-selected={activeTab === 2}
              onClick={(event) => handleTabClick(2, event)}
            >
              <span
                className={`elementor-accordion-icon ${activeTab === 2
                  ? "elementor-accordion-icon-opened"
                  : "elementor-accordion-icon-closed"
                  }`}
              >
                <i className="fas fa-minus"></i>
              </span>
              <a className="elementor-accordion-title" href="#">
                Título do terceiro acordeão
              </a>
            </div>
            {activeTab === 2 && (
              <div
                id="elementor-tab-content-1982"
                className={`elementor-tab-content elementor-clearfix ${activeTab === 2 ? "elementor-active" : ""
                  }`}
                data-tab="2"
                role="tabpanel"
                aria-labelledby="elementor-tab-title-1982"
                style={{ display: activeTab === 2 ? "block" : "none" }}
              >
                <p>
                  Conteúdo do terceiro acordeão.
                </p>
              </div>
            )}
          </div>



        </div>

      </div>
      <section class="elementor-section elementor-inner-section elementor-element elementor-element-e9fb4cf elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e9fb4cf" data-element_type="section">
        <div className="homeContainer">
          <h2>QUEIROZ ODONTOLOGIA</h2>
          <h1>Nossos serviços</h1>
          <p>Oferecemos serviços diferenciados de alto padrão de qualidade</p>
        </div>
      </section>

      <div className="component-wrapper">
        <div className="subcomponents-container">
          <div className="subcomponent">
            <img src={servicos} className="servicos" alt="" />
            <h2>Quiz Educacional</h2>
            <h5>Quiz interativo com perguntas sobre hábitos que podem aumentar o risco de câncer bucal.</h5>
            <p>Como Funciona?</p>
            <h5>Com base nas informações do usuário, calcular uma estimativa de quando a pessoa estaria mais propensa a desenvolver um câncer bucal</h5>
            <button>Acessar</button>
          </div>

          <div className="subcomponent">
            <img src={servicos} className="servicos" alt="" />
            <h2>Agendamento de Consulta</h2>
            <h5>Permitir que os usuários agendem consultas com profissionais de saúde especializados em câncer bucal.</h5>
            <p>Como Funciona?</p>
            <h5>Mostrar disponibilidade de horários e locais para as consultas.</h5>
            <button>Acessar</button>
          </div>

          <div className="subcomponent">
            <img src={servicos} className="servicos" alt="" />
            <h2>Envio de Resultados Médicos</h2>
            <h5>Possibilitar o compartilhamento seguro de resultados médicos entre pacientes e profissionais de saúde.</h5>
            <p>Como Funciona?</p>
            <h5>Garantir a confidencialidade e integridade das informações compartilhadas.</h5>
            <button>Acessar</button>
          </div>
        </div>

        <br /><br />
      </div>

      <div className="faixa">
        <div className="itensFaixa">
          <h1>Aqui seu sorriso está em ótimas mãos!</h1>
          <p>Profissional qualificado, materiais certificados e esterilização que segue todas as normas de biossegurança.</p>
        </div>
      </div>

      <section class="elementor-section elementor-inner-section elementor-element elementor-element-2541f58 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="2541f58" data-element_type="section">
        <div class="elementor-container elementor-column-gap-default">
          <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-bb57f32" data-id="bb57f32" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
              <div class="elementor-element elementor-element-a615d87 elementor-widget elementor-widget-heading animated slideInUp" data-id="a615d87" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;slideInUp&quot;}" data-widget_type="heading.default">
                <div class="elementor-widget-container">
                  <h2 class="elementor-heading-title elementor-size-default">QUEIROZ ODONTOLOGIA</h2>		</div>
                <h2 class="elementor-heading-title elementor-size-default">Nossos Especialistas</h2>		</div>

            </div>
            <div class="elementor-element elementor-element-7701d27 elementor-widget elementor-widget-heading animated slideInUp" data-id="7701d27" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;slideInUp&quot;}" data-widget_type="heading.default">
              <div class="elementor-widget-container">
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="component-wrapper">
        <div className="subcomponents-container">
          <div className="subcomponent">
            <img src={servicos} className="servicos" alt="" />
            <h2>Ceo Fundador</h2>
            <h1>Reynaldo Gianecchini</h1>
          </div>
        </div>

      </div>

      <div>
      <div>
        <img className="d-block w-100" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button onClick={goToPreviousSlide}>Previous</button>
      <button onClick={goToNextSlide}>Next</button>
    </div>

      <div className="entreEmContato">
        <div className="contact-info">
          <div className="contact-text">
            <h2>Fale Conosco</h2>
            <div class="elementor-element elementor-element-24ecee4b elementor-view-stacked elementor-position-left elementor-mobile-position-left elementor-shape-circle elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="24ecee4b" data-element_type="widget" data-widget_type="icon-box.default">
              <div class="elementor-widget-container">
                <div class="elementor-icon-box-wrapper">
                  <div class="elementor-icon-box-icon">
                    <span class="elementor-icon elementor-animation-grow">
                      <i aria-hidden="true" class="fas fa-envelope"></i>				</span>
                  </div>
                  <div class="elementor-icon-box-content">
                    <h3 class="elementor-icon-box-title">
                      <span>
                        E-mail					</span>
                    </h3>
                    <p class="elementor-icon-box-description">
                      contato@queirozodontologia.com.br					</p>
                  </div>
                </div>
              </div>
            </div><div class="elementor-element elementor-element-34bbb025 elementor-view-stacked elementor-position-left elementor-mobile-position-left elementor-shape-circle elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="34bbb025" data-element_type="widget" data-widget_type="icon-box.default">
              <div class="elementor-widget-container">
                <div class="elementor-icon-box-wrapper">
                  <div class="elementor-icon-box-icon">
                    <span class="elementor-icon elementor-animation-grow">
                      <i aria-hidden="true" class="fas fa-phone"></i>				</span>
                  </div>
                  <div class="elementor-icon-box-content">
                    <h3 class="elementor-icon-box-title">
                      <span>
                        Telefone					</span>
                    </h3>
                    <p class="elementor-icon-box-description">
                      (81) 3461.3835					</p>
                  </div>
                </div>
              </div>
            </div><div class="elementor-element elementor-element-4239bed elementor-view-stacked elementor-position-left elementor-mobile-position-left elementor-shape-circle elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="4239bed" data-element_type="widget" data-widget_type="icon-box.default">
              <div class="elementor-widget-container">
                <div class="elementor-icon-box-wrapper">
                  <div class="elementor-icon-box-icon">
                    <span class="elementor-icon elementor-animation-grow">
                      <i aria-hidden="true" class="fab fa-whatsapp"></i>				</span>
                  </div>
                  <div class="elementor-icon-box-content">
                    <h3 class="elementor-icon-box-title">
                      <span>
                        WhatsApp					</span>
                    </h3>
                    <p class="elementor-icon-box-description">
                      (81) 99677-9647					</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="elementor-element elementor-element-5d311de elementor-view-stacked elementor-position-left elementor-mobile-position-left elementor-shape-circle elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="5d311de" data-element_type="widget" data-widget_type="icon-box.default">
              <div class="elementor-widget-container">
                <div class="elementor-icon-box-wrapper">
                  <div class="elementor-icon-box-icon">
                    <span class="elementor-icon elementor-animation-grow">
                      <i aria-hidden="true" class="fas fa-map-marker-alt"></i>				</span>
                  </div>
                  <div class="elementor-icon-box-content">
                    <h3 class="elementor-icon-box-title">
                      <span>
                        Excelente localização					</span>
                    </h3>
                    <p class="elementor-icon-box-description">
                      Edifício Pontes Corporate Center, R. Barão de Souza Leão, 425 Salas 504/505 - Boa Viagem, Recife - PE					</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-image">
            <img src={clinica} alt="Imagem de contato" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perguntas;
