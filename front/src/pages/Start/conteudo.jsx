import React, { useState } from 'react';

import './style.css'
//import usuario from "./usuario-circulo.png";



import seta from './download.svg';


const ConteudoStart = () => {
    return (
        <div className='startContainer'>
            <div>
                <nav className="navbar navbar-expand-lg">
                    
                    <a className='botao_navbar' href="#">Login</a>
                    <a className='botao_navbar' href="#">Registre-se</a>
                </nav>
            </div>

            <section className='containers principal'>
                <div className='containers__conteudo'>
                    <h1 className='containers__titulo'>
                         BucalGuardian: Plataforma de Gerenciamento e Cuidado do Câncer Bucal
                    </h1>
                    <p className='containers__texto'>
                        Pelo menos 97% eficaz, até 30x mais rápido em resultados Médicos
                    </p>
                    <a className="containers__botao" href="#">Assine</a>

                    <a className="containers__botao botao_secundario" href="#">Preço</a>

                    <a className='nossos-precos' href='#teste'><img src={seta} alt="seta"/>Preços</a>
                </div>
                </section>
                <section className='containers secundario'>
                    <h2 className='descricao__titulo'>
                        Por que estamos sendo escolhidos
                    </h2>


                    <div className='containers_centro'>
                        <div className="containers__card">
                            <div className="card">
                                <h2>Oferta 1</h2>
                                <p>Descrição da Oferta 1.</p>
                            </div>
                            <div className="card">
                                <h2>Oferta 2</h2>
                                <p>Descrição da Oferta 2.</p>
                            </div>
                            <div className="card">
                                <h2>Oferta 3</h2>
                                <p>Descrição da Oferta 3.</p>
                            </div>
                        </div>
                    </div>
                        <h3 class="mb-5">
                            Nossas vantagens
                        </h3>
                        <div>
                            <div class="col-auto">
                             
                            </div>
                        </div>
                    </section>

                    <section className='conteiners terciario'>
                        <div class="col">
                                <h4 id='teste'>Até 2-3x mais barato que os serviços de reconhecimento manual</h4>
                                <span class="label-text">
                                    Nenhuma pessoa está envolvida na resolução de captchas.<br/>Graças a isso, fornecemos o preço mais baixo do mercado.
                                </span>
                            </div>
                    </section>
                    
            </div>                
            
    );
};


export default ConteudoStart;