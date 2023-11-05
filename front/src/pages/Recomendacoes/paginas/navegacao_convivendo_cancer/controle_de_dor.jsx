import React from 'react';
import './style.css';
import convivendoBioetica from './assets/convivendo-com-cancer_controle.jpg';
import seta from './assets/arrow-left-solid.svg';
import facebook from './assets/facebook-f.svg';
import twitter from './assets/twitter.svg';
import linkedin from './assets/linkedin-in.svg';
import whatsapp from './assets/whatsapp.svg';
import email from './assets/envelope-regular.svg';

const ControleDeDor = () => {
    return (
        <div>
            <section className='banner-controle-dor banner-bioetica'>
            <img className='seta' src={seta} alt=''></img>
                <a href="#">Convivendo com o Cancer</a>
                <div className="main-content">
                <h2 className='subtitulo__'>Convivendo com o câncer</h2>
                <h1 className='titulo__'>Controle da dor</h1>
                <p className='paragrafo__' >O tratamento de câncer pode causar dores da própria doença, mas também pelos procedimentos necessários para combater o tumor e até pelos exames. O controle da dor oncológica é parte do tratamento e melhora o prognóstico. Saiba mais.</p>
                </div>
                <img src={convivendoBioetica} alt="" />
            </section>

            <section className="conteudo__controle-dor">

            <div className="just__space"></div>

                <div className="conteudo">
            <p className='paragrafo__nutricao'></p>
                <h1 className='titulo__nutricao'></h1>
                <h2 className='subtitulo-nutricao'></h2>

                <ul>
                    <li>

                    </li>
                </ul>

                <div className="social-media">
                    <a href="" className="facebook"><img src={facebook}></img></a>
                    <a href="" className="twitter"><img src={twitter}></img></a>
                    <a href="" className="linkedin"><img src={linkedin}></img></a>
                    <a href="" className="whatsapp"><img src={whatsapp}></img></a>
                    <a href="" className="email"><img src={email}></img></a>
                </div>
                </div>
                <div className="just__space2">
                    <div className="side__box">
                        <h3>Convivendo com o câncer</h3>
                        <p>Este conteúdo faz parte de uma série de artigos sobre a convivência com o câncer</p>
                        <button>Saiba mais</button>
                    </div>

                    </div>
                </section>
        </div>

        
    )
}

export default ControleDeDor;
