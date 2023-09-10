import React from 'react';
import '../styles/conteudo.css'
import casal from '../assets/tudo-sobre-cancer_convivendo_608x368-1.jpg'
import imagemBanner from '../assets/banner_prevencao-ao-cancer.jpg'

const Conteudo = () => {
    return (
        <div>
            <section className='containerRecomendacoes'>
                <div>
                    <div>Tudo sobre o câncer</div>
                    <h1>Convivendo com o câncer</h1>
                    <div>Após o diagnóstico, o Grupo Oncoclínicas oferece todo o apoio para o paciente com informações sobre práticas de exercícios físicos, medicina integrativa, nutrição, entre outros. Leia o conteúdo abaixo para saber mais.</div>
                    <div><img src={casal} /></div>
                </div>
            </section>

            <section className='banner'>
                <div className='imagemBanner'>
                    <img src={imagemBanner} />
                    <div className='content'>
                        <h2>Prevênção ao Câncer</h2>
                        <p>O Grupo Oncoclínicas desenvolve uma série de importantes ações e campanhas de conscientização e prevenção contra o câncer.</p>

                    </div>

                </div>

            </section>

            <section>
                <div>
                    <div></div>
                </div>
            </section>

        </div>
    )
}

export default Conteudo;