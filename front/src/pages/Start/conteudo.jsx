import React, { useState } from 'react';
import './style.css'
const ConteudoStart = () => {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg">
                    {/* Conteúdo da navegação */}
                </nav>
            </div>

            <div>
                <section id="heading-section">
                    <div className="containerStart">
                        <div className="row py-4">
                            <div
                                className="col d-flex justify-content-center"
                                style={{ flexFlow: 'column', zIndex: 2 }}
                                id="heading-text-container"
                            >
                                <div>
                                    <h1>
                                        BucalGuardian: Plataforma de Gerenciamento e Cuidado do Câncer Bucal

                                    </h1>
                                    <h2 className="mt-lg-4 mt-3">
                                        Pelo menos 97% eficaz, até 30x mais rápido em resultados Médicos
                                        <br />

                                    </h2>

                                    <div className="mt-lg-5 mt-3 row" id="heading-btn-row">
                                        <div className="col-12 col-lg-auto">
                                            <a
                                                id="startfree2"
                                                className="btn btn-lg btn-green"
                                                href="/Account/Signup"
                                            >
                                                Tentar agora
                                            </a>
                                        </div>
                                        <div className="col-12 col-lg-auto mt-2 mt-lg-0 ml-0 ml-lg-n2">

                                        </div>
                                    </div>
                                    <div className="mt-4 row">
                                        <div className="col-12">
                                            <a
                                                href="#plans"
                                                className="green-link"
                                                data-gtm-id="go-to-plans-link"
                                            >
                                                <img
                                                    src="/img/icons/green-arrow-down_14x11.svg"
                                                    alt="↓"
                                                    className="m-0 pr-1"
                                                />
                                                <span className="ml-2">Preço</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        id="underMainButtonsAdditionalText"
                                        style={{ color: '#A0D2FA', marginTop: '10px' }}
                                    ></div>
                                </div>
                            </div>
                            <div className="col-md-7 col-lg-5 col-12 order-first order-md-last">
                                <picture id="landing-hero-new">
                                    <source srcSet="/img/landing/hero-animation.webp" type="image/webp" />
                                    <img src="/img/landing/hero-animation.gif" alt="" />
                                </picture>
                            </div>
                        </div>

                        <h3>Por que estamos sendo escolhidos</h3>


                        <div className="text-center">
                            <div className="offers-container">
                                <div className="offer">
                                    <h2>Oferta 1</h2>
                                    <p>Descrição da Oferta 1.</p>
                                </div>
                                <div className="offer">
                                    <h2>Oferta 2</h2>
                                    <p>Descrição da Oferta 2.</p>
                                </div>
                                <div className="offer">
                                    <h2>Oferta 3</h2>
                                    <p>Descrição da Oferta 3.</p>
                                </div>
                            </div>
                        </div>
                        <br /><br />
                        <div>
                            <h3 class="mb-5">
                                Nossas vantagens
                            </h3>
                            <div>
                                <div class="col-auto">
                                 
                                </div>
                                <div class="col">
                                    <h4>Até 2-3x mais barato que os serviços de reconhecimento manual</h4>
                                    <span class="label-text">
                                        Nenhuma pessoa está envolvida na resolução de captchas.<br/>Graças a isso, fornecemos o preço mais baixo do mercado.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};








export default ConteudoStart