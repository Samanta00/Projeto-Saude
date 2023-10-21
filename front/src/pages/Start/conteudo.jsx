import React, { useState } from 'react';
import './style.css';
import Navbar from './navbarStart/navStart';
import SliderText from './slideshow/textSlide';

import seta from '../../assets/img/download.svg';
import seloGarantia from '../../assets/img/selo-garantia.svg';
import desconto from '../../assets/img/desconto.png'
import clinicaParticulares from '../../assets/img/clinica-particulares.png';
import profissionalSaude from '../../assets/img/profissionais-saude.png';
import ongs from '../../assets/img/ongs.png';
import maletaMedico from '../../assets/img/maleta-de-medico.png';
import instituicoesSaude from '../../assets/img/instituicoes-saude.png';
import estudantePesquisadores from '../../assets/img/estudantes-pesquisadores.png';
import cuidadores from '../../assets/img/cuidadores-50.png';

const ConteudoStart = () => {
    return (
        <div className='landingPage'>
            <Navbar />
            <section className='lp-inicio lp-sc-primario'>
                <div className='lp-sc-primario__conteudo'>
                    <h1 className='lp-sc-primario__titulo'>
                         BucalGuardian: Plataforma de Gerenciamento e Cuidado do Câncer Bucal
                    </h1>
                    <p className='lp-sc-primario__texto'>
                        Pelo menos 97% eficaz, até 30x mais rápido em resultados Médicos
                    </p>
                    <a className="lp-sc-primario__botao" href="#lp-sc-card">Assine</a>

                    <a className="lp-sc-primario__botao botao_secundario" href="#row-tabela-preco">Preço</a>

                    <a className='nossos-precos__seta' href='#row-tabela-preco'><img src={seta} alt="seta" />Preços</a>
                </div>
            </section>

            <section className='lp-corpo lp-sc-card'>

            <h2 className='lp-titulo-secundario'>
                    Nossos Pacotes
                </h2>

                <div className='lp-corpo_centro'>
                    <div className="lp-corpo__card">
                        <div className="lp-card">
                            <h3>Pacote Essencial</h3>
                            <h4>Explorando Fundamentos</h4>
                            <b>O que inclui:</b>
                            <ul>
                            <li>Acesso exclusivo a artigos informativos sobre prevenção e detecção precoce.</li>
                            <li>Vídeos educativos com especialistas em saúde bucal.</li>
                            <li>Notificações personalizadas sobre eventos e campanhas de conscientização.</li>
                            </ul>
                        </div>
                        <div className="lp-card">
                        <h3>Pacote Avançado</h3>
                            <h4>Aprofundando-se na Jornada</h4>
                            <b>O que inclui:</b>
                            <ul>
                            <li>Webinars exclusivos com profissionais da área médica.</li>
                            <li>E-books abrangentes sobre tratamentos inovadores.</li>
                            <li>Fóruns de discussão moderados por especialistas.</li>
                            </ul>
                        </div>
                        <div className="lp-card">
                        <h3>Pacote Premium</h3>
                            <h4>Personalizando sua Experiência</h4>
                            <b>O que inclui:</b>
                            <ul>
                            <li>Consultas online com especialistas em câncer bucal.</li>
                            <li>Relatórios personalizados sobre os últimos avanços na pesquisa.</li>
                            <li>Acesso prioritário a eventos presenciais e workshops exclusivos.</li>
                            </ul>   
                        </div>
                    </div>
                </div>
            </section>

            <section className='lp-corpo lp-sc-vantagens'>
            <h2 className='lp-titulo-terciario'>
                    Nossas vantagens
                </h2>
                <div className='vantagens__corpo__centro'>
                    <SliderText/>

                    <div className="vantagens__corpo">
                        <div className="card__vantagens">
                            <img className='card__vantagens_img' src={desconto} alt='desconto' />
                            <h3>Até 2-3x mais barato que os serviços de reconhecimento manual</h3>
                            <p><b>Vantagens:</b>
                            Base sólida de conhecimento para entender os riscos e práticas preventivas.
Compreensão aprofundada dos sinais precoces de câncer bucal.
Engajamento constante com a comunidade por meio de eventos e campanhas.</p>
                        </div>
                    </div>
                    <div className="vantagens__corpo">
                        <div className="card__vantagens">
                            <img className='card__vantagens_img' src={desconto} alt='desconto' />
                            <h3>Oferta 1</h3>
                            <p><b>Vantagens:</b>
Interação direta com especialistas para esclarecer dúvidas.
Conteúdo detalhado sobre opções de tratamento e avanços na pesquisa.
Participação ativa em discussões significativas com outros membros.
                            </p>
                        </div>
                    </div>
                    <div className="vantagens__corpo">
                        <div className="card__vantagens">
                            <img className='card__vantagens_img' src={desconto} alt='desconto' />
                            <h3>Oferta 1</h3>
                            <p><b>Vantagens:</b>
Orientação personalizada para questões específicas relacionadas ao câncer bucal.
Informações em primeira mão sobre descobertas recentes na área.
Participação VIP em eventos para construir uma rede de apoio.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <section className='lp-corpo lp-sc-ajuda '>
            <h2 className='lp-titulo-secundario'>
                    Para obter mais ajuda
                </h2>
                <div className='lp-corpo_centro'>
                    <div className='lp-card-ajuda'>
                        <div class='card__ajuda'>
                            <img className='card__ajuda-img' src={clinicaParticulares} alt="" />
                            <h2 class='lp-titulo-secundario-card'>Clínicas particulares</h2>
                        </div>
                        <div class='card__ajuda'>
                            <img className='card__ajuda-img' src={cuidadores} alt="" />
                            <h2 class='lp-titulo-secundario-card'>Pacientes e Cuidadores</h2>
                        </div>
                        <div class='card__ajuda'>
                            <img className='card__ajuda-img' src={profissionalSaude} alt="" />
                            <h2 class='lp-titulo-secundario-card'>Profissionais de Saúde</h2>
                        </div>
                        <div class='card__ajuda'>
                            <img className='card__ajuda-img' src={estudantePesquisadores} alt="" />
                            <h2 class='lp-titulo-secundario-card'>Estudantes e Pesquisadores</h2>
                        </div>
                        <div class='card__ajuda'>
                            <img className='card__ajuda-img' src={ongs} alt="" />
                            <h2 class='lp-titulo-secundario-card'>Ongs</h2>
                        </div>
                        <div class='card__ajuda'>
                            <img className='card__ajuda-img' src={instituicoesSaude} alt="" />
                            <h2 class='lp-titulo-secundario-card'>instituições de Saúde</h2>
                        </div>
                        <div class='card__ajuda'>
                            <img className='card__ajuda-img' src={maletaMedico} alt="" />
                            <h2 class='lp-titulo-secundario-card'>Governo e Órgãos de Saúde Pública</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className='lp-corpo lp-sc-precos'>
            <h2 className='lp-titulo-terciario'>
                    Nossos Preços
                </h2>
                <div className='lp-tabela'>

                    <div id='row-tabela-preco' className="lp-tabela-precos">
                        <div className="preco__plano">
                            <p className='price__titulo'>Plano Premium</p>
                            <p className="price__preco">$29.99/mês</p>
                            <ul className="features__preco">
                                <li>Todos os recursos</li>
                                <li>Suporte 24/7</li>
                            </ul>
                        </div>
                        <div className="preco__plano">
                            <p className='price__titulo'>Plano Premium</p>
                            <p className="price__preco">$29.99/mês</p>
                            <ul className="features__preco">
                                <li>Todos os recursos</li>
                                <li>Suporte 24/7</li>
                            </ul>
                        </div>
                        <div className="preco__plano">
                            <p className='price__titulo'>Plano Premium</p>
                            <p className="price__preco">$29.99/mês</p>
                            <ul className="features__preco">
                                <li>Todos os recursos</li>
                                <li>Suporte 24/7</li>
                            </ul>
                        </div>
                    </div>
                    <button className="buy-button__preco ">Teste Agora</button>
                </div>
            </section>

            <section className='container__titulo'>
                <h2 className='lp-titulo-secundario'>
                    Selo de Garantia
                </h2>
                <img className='garantia__img' src={seloGarantia} alt="seta" />
                <p className='garantia__texto'>Se você não gosta da qualidade dos serviços prestados pelo serviço, Garantimos-lhe um reembolso sem explicação no prazo de 3 dias a partir da data da compra.</p>
            </section>

            <footer className='rodape__lp'>
                <p className='rodape__lp__texto'>Fale Conosco
                    <ul className='rodape__lista'>
                        <li>
                            E-mail:
                            contato@queirozodontologia.com.br
                        </li>

                        <li>
                            Telefone
                            (81) 3461.3835
                        </li>
                        <li>
                            WhatsApp
                            (81) 99677-9647
                        </li>
                    </ul>
                </p>

                <p className='rodape__lp__texto'>
                    Nossa localização
                    <ul className='rodape__lista'>
                        <li>
                            Edifício Pontes Corporate Center, R. Barão de Souza Leão, 425 Salas 504/505 - Boa Viagem, Recife - PE
                        </li>
                    </ul>
                </p>

                <button className="buy-button__preco footer-button">Teste Agora</button>
            </footer>
        </div>
    );
};

export default ConteudoStart;