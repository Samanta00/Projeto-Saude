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
                    <a className="lp-sc-primario__botao" href="aa">Assine</a>

                    <a className="lp-sc-primario__botao botao_secundario" href="aa">Preço</a>

                    <a className='nossos-precos__seta' href='#row-tabela-preco'><img src={seta} alt="seta" />Preços</a>
                </div>
            </section>

            <section className='container__titulo'>
                <h2 className='lp-titulo-secundario'>
                    Por que estamos sendo escolhidos
                </h2>
            </section>

            <section className='lp-corpo lp-sc-card'>

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
                            <p>Descrição da Oferta 2.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolores, similique voluptatibus repudiandae aspernatur magnam repellendus a odit tenetur. Dolorum neque dolorem recusandae libero quisquam atque laborum reprehenderit inventore! Voluptatem.
                            </p>
                        </div>
                        <div className="lp-card">
                            <h3>Oferta 3</h3>
                            <p>Descrição da Oferta 3.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia perspiciatis illo totam sequi explicabo veniam magni consectetur quas, cumque atque ratione nulla voluptas modi ducimus adipisci quae temporibus? Itaque, consequatur!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container__titulo'>
                <h2 className='lp-titulo-secundario '>
                    Nossas vantagens
                </h2>
            </section>
            <section className='lp-corpo lp-sc-vantagens'>
                <div className='vantagens__corpo__centro'>
                    <SliderText/>

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
                            <p>Descrição da Oferta 1.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque et asperiores optio magnam officiis eaque inventore, perferendis nulla cum fuga quis quisquam ducimus commodi impedit dicta aliquam est maiores numquam.
                            </p>
                        </div>
                    </div>
                    <div className="vantagens__corpo">
                        <div className="card__vantagens">
                            <img className='card__vantagens_img' src={desconto} alt='desconto' />
                            <h3>Oferta 1</h3>
                            <p>Descrição da Oferta 1.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem harum nobis suscipit, rem excepturi commodi autem officiis ex illum labore nesciunt libero illo, molestiae reiciendis, asperiores nemo quae nulla. Sed.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <section className='container__titulo'>
                <h2 className='lp-titulo-secundario'>
                    Para obter mais ajuda
                </h2>
            </section>

            <section className='lp-corpo lp-sc-ajuda '>
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

            <section className='container__titulo'>
                <h2 className='lp-titulo-secundario'>
                    Nossos Preços
                </h2>
            </section>

            <section className='lp-corpo lp-sc-precos'>
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