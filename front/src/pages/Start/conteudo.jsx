import React, { useState } from 'react';
import './style.css';
import seta from './download.svg';
import seloGarantia from './img/selo-garantia.svg';
import desconto from './img/desconto.png'
import clinicaParticulares from './img/clinica-particulares.png';
import profissionalSaude from './img/profissionais-saude.png';
import ongs from './img/ongs.png';
import maletaMedico from './img/maleta-de-medico.png';
import instituicoesSaude from './img/instituicoes-saude.png';
import estudantePesquisadores from './img/estudantes-pesquisadores.png';
import cuidadores from './img/cuidadores-50.png';

const ConteudoStart = () => {
    return (
        <div className='landingPage'>
            <div>
                <nav className="navbar navbar-expand-lg" id='navStart'>
                    
                    <a className='botao_navbar' href="#">Login</a>
                    <a className='botao_navbar' href="#">Registre-se</a>
                </nav>
            </div>

            <section className='lp-inicio lp-sc-primario'>
                <div className='lp-sc-primario__conteudo'>
                    <h1 className='lp-sc-primario__titulo'>
                        BucalGuardian: Plataforma de Gerenciamento e Cuidado do Câncer Bucal
                    </h1>
                    <p className='lp-sc-primario__texto'>
                        Pelo menos 97% eficaz, até 30x mais rápido em resultados Médicos
                    </p>
                    <a className="lp-sc-primario__botao" href="#">Assine</a>

                    <a className="lp-sc-primario__botao botao_secundario" href="#">Preço</a>

                    <a className='nossos-precos' href='#row-tabela-preco'><img src={seta} alt="seta" />Preços</a>
                </div>
            </section>


            <section className='lp-corpo lp-sc-card'>
                <h2 className='lp-titulo-secundario'>
                    Por que estamos sendo escolhidos
                </h2>

                <div className='lp-corpo_centro'>
                    <div className="lp-corpo__card">
                        <div className="lp-card">
                            <h3>Oferta 1</h3>
                            <p>Descrição da Oferta 1.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore dolorem sunt repellat velit sapiente tempora? Distinctio qui architecto maxime, asperiores fugit obcaecati nihil adipisci voluptate blanditiis eius, dignissimos deserunt commodi?
                            </p>
                        </div>
                        <div className="lp-card">
                            <h3>Oferta 2</h3>
                            <p>Descrição da Oferta 2.</p>
                        </div>
                        <div className="lp-card">
                            <h3>Oferta 3</h3>
                            <p>Descrição da Oferta 3.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className='lp-corpo lp-sc-vantagens'>
                <h2 class='lp-titulo-secundario'>
                    Nossas vantagens
                </h2>

                <div className="vantagens__corpo">
                    <div className="card__vantagens">
                        <img className='card__vantagens_img' src={desconto} alt='desconto' />
                        <h3>Até 2-3x mais barato que os serviços de reconhecimento manual</h3>
                        <p>Nenhuma pessoa está envolvida na resolução de captchas.<br />Graças a isso, fornecemos o preço mais baixo do mercado.</p>
                    </div>
                </div>
                <div className="vantagens__corpo">
                    <div className="card__vantagens">
                        <img className='card__vantagens_img' src={desconto} alt='desconto' />
                        <h3>Oferta 1</h3>
                        <p>Descrição da Oferta 1.</p>
                    </div>
                </div>
                <div className="vantagens__corpo">
                    <div className="card__vantagens">
                        <img className='card__vantagens_img' src={desconto} alt='desconto' />
                        <h3>Oferta 1</h3>
                        <p>Descrição da Oferta 1.</p>
                    </div>
                </div>

            </section>

            <section className='lp-corpo lp-sc-ajuda'>
                <div className='lp-card-ajuda'>
                    <div class='card__ajuda'>
                        <img className='card__ajuda-img' src={clinicaParticulares} alt="" />
                        <h2 class='lp-titulo-secundario'>Clínicas particulares</h2>
                    </div>
                    <div class='card__ajuda'>
                        <img className='card__ajuda-img' src={cuidadores} alt="" />
                        <h2 class='lp-titulo-secundario'>Pacientes e Cuidadores</h2>
                    </div>
                    <div class='card__ajuda'>
                        <img className='card__ajuda-img' src={profissionalSaude} alt="" />
                        <h2 class='lp-titulo-secundario'>Profissionais de Saúde</h2>
                    </div>
                    <div class='card__ajuda'>
                        <img className='card__ajuda-img' src={estudantePesquisadores} alt="" />
                        <h2 class='lp-titulo-secundario'>Estudantes e Pesquisadores</h2>
                    </div>
                    <div class='card__ajuda'>
                        <img className='card__ajuda-img' src={ongs} alt="" />
                        <h2 class='lp-titulo-secundario'>Ongs</h2>
                    </div>
                    <div class='card__ajuda'>
                        <img className='card__ajuda-img' src={instituicoesSaude} alt="" />
                        <h2 class='lp-titulo-secundario'>instituições de Saúde</h2>
                    </div>
                    <div class='card__ajuda'>
                        <img className='card__ajuda-img' src={maletaMedico} alt="" />
                        <h2 class='lp-titulo-secundario'>Governo e Órgãos de Saúde Pública</h2>
                    </div>
                </div>
            </section>

            <section className='lp-corpo lp-sc-precos'>
                <div id='row-tabela-preco' className="lp-tabela-precos">
                    <div className="preco__plano">
                        <h2>Plano Básico</h2>
                        <p className="price">$9.99/mês</p>
                        <ul className="features">
                            <li>Recursos básicos</li>
                            <li>Suporte por e-mail</li>
                        </ul>
                        <button className="buy-button">Comprar</button>
                    </div>
                    <div className="preco__plano">
                        <h2>Plano Intermediário</h2>
                        <p className="price">$19.99/mês</p>
                        <ul className="features">
                            <li>Recursos avançados</li>
                            <li>Suporte prioritário</li>
                        </ul>
                        <button className="buy-button">Comprar</button>
                    </div>
                    <div className="preco__plano">
                        <h2>Plano Premium</h2>
                        <p className="price">$29.99/mês</p>
                        <ul className="features">
                            <li>Todos os recursos</li>
                            <li>Suporte 24/7</li>
                        </ul>
                        <button className="buy-button">Comprar</button>
                    </div>
                </div>
            </section>

            <section className='lp-corpo lp-sc-garantia'>
                <img src={seloGarantia} alt="seta" />
                <h2>Garantia</h2>
                <p>Se você não gosta da qualidade dos serviços prestados pelo serviço, Garantimos-lhe um reembolso sem explicação no prazo de 3 dias a partir da data da compra.</p>
            </section>

            <footer>
                <p>Comece economizando até 90% do seu orçamento sobre o reconhecimento de captchas com CapMonster.cloud</p>
                <button className="buy-button">Teste Agora</button>
            </footer>
        </div>
    );
};

export default ConteudoStart;