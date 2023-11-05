import React from 'react';
import './style.css';
import convivendoBioetica from './assets/convivendo-com-cancer_odonto.jpg';
import seta from './assets/arrow-left-solid.svg';
import facebook from './assets/facebook-f.svg';
import twitter from './assets/twitter.svg';
import linkedin from './assets/linkedin-in.svg';
import whatsapp from './assets/whatsapp.svg';
import email from './assets/envelope-regular.svg';

const Odontologia = () => {
    return (
        <div>
            <section className='banner-ondotologia banner-bioetica'>
                <img className='seta' src={seta} alt=''></img>
                <a href="#">Convivendo com o Cancer</a>
                <div className="main-content">
                <h2 className='subtitulo__'>Convivendo com o câncer</h2>
                <h1 className='titulo__'>Odontologia</h1>
                <p className='paragrafo__' >A odontologia no tratamento oncológico cuida dos danos na cavidade bucal ocasionados pelos efeitos adversos dos medicamentos utilizados no combate ao câncer. Saiba mais</p>
                </div>
                <img src={convivendoBioetica} alt="" />
            </section>

            <section className="conteudo__odontologia">

                <div className="just__space"></div>

                <div className="conteudo">
            <p className='paragrafo__cardio-oncologia'></p>
                <h1 className='titulo__cardio-oncologia'></h1>
                <h2 className='subtitulo-cardio-oncologia'></h2>

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

export default Odontologia;
