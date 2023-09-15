import React from 'react';
import '../styles/conteudo.css'
import casal from '../assets/tudo-sobre-cancer_convivendo_608x368-1.jpg'
import convivendoNutricao from '../assets/convivendo-com-cancer_nutricao.jpg'
import convivendoBioetica from '../assets/convivendo-com-cancer_bioetica.png'
import convivendoCardioOnco from '../assets/convivendo-com-cancer_cardio-onco.jpg'
import convivendoControle from '../assets/convivendo-com-cancer_controle.jpg'
import convivendoExercicios from '../assets/convivendo-com-cancer_exercicios.jpg'
import convivendoMedIntegrativa from '../assets/convivendo-com-cancer_med-integrativa.jpg'
import convivendoOdonto from '../assets/convivendo-com-cancer_odonto.jpg'
import convivendoOncoFertilidade from '../assets/convivendo-com-cancer_oncofertilidade.jpg'
import convivendoSaudeMental from '../assets/convivendo-com-cancer_saude-mental.jpg'

const Conteudo = () => {
    return (
        <div>
            <section className='container-conteudo primeiro-conteudo'>
                <div className='conteudo-conteiner__recomendacoes'>
                    <h2 className='subtitulo-conteudo-principal'>Tudo sobre o câncer</h2>
                    <h1 className='conteudo-titulo-principal '>Convivendo com o câncer</h1>
                    <p className='paragrafo-conteudo-texto-principal'>Após o diagnóstico, o Grupo Oncoclínicas oferece todo o apoio para o paciente com informações sobre práticas de exercícios físicos, medicina integrativa, nutrição, entre outros. Leia o conteúdo abaixo para saber mais.</p>
                </div>
                <div><img className='imagem-conteiner__recomendacoes'  src={casal} /></div>
            </section>

            <section className='banner__cancer-prevencao'>
                <div className='container__cancer'>
                    <div className='container-conteudo cancer-prevencao'>
                        <div>
                            <h2 className='subtitulo-conteudo-principal'>Prevênção ao Câncer</h2>
                            <p className='paragrafo-conteudo-texto-principal'>O Grupo Oncoclínicas desenvolve uma série de importantes ações e campanhas de conscientização e prevenção contra o câncer.</p>
                            <button className="buy-button__preco footer-button">Teste Agora</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container-conteudo segundo-conteudo'>
                <div><img src={convivendoExercicios} className='conteudo-imagem'/></div>
                <div className='segundo-conteudo__texto'>
                    <h2 className='subtitulo-conteudo-principal conteudo-subtitulo-section'>
                        Convivendo com o Câncer
                    </h2>
                    <h1 className='conteudo-titulo-principal conteudo-titulo-section'>Exercícios Físicos</h1>
                    <p className='paragrafo-conteudo-texto-principal conteudo-paragrafo-section'>
                        A prática de exercícios físicos regulares durante o tratamento de câncer pode melhorar a qualidade de vida do paciente, aliviando alguns dos efeitos adversos dos medicamentos, além de fortalecer a imunidade e aumentar a disposição.
                    </p>
                </div>
            </section>

            <section className=' container-conteudo terceiro-conteudo'>
                <div className='segundo-conteudo__texto'>
                    <h2 className='subtitulo-conteudo-principal conteudo-subtitulo-section'>
                        Medicina Integrativa
                    </h2>
                    <h1 className='conteudo-titulo-principal conteudo-titulo-section'>Exercícios Físicos</h1>
                    <p className='paragrafo-conteudo-texto-principal conteudo-paragrafo-section'>
                        Medicina integrativa foca na mente, no estado de espírito e outras necessidades do paciente durante o tratamento de câncer para melhorar a sua qualidade de vida.
                    </p>
                </div>
                <div>
                    <div ><img src={convivendoMedIntegrativa} className='conteudo-imagem'/></div>
                </div>
            </section>

            <section className='container-conteudo segundo-conteudo'>
                <div ><img src={convivendoNutricao} className='conteudo-imagem'/></div>
                <div className='segundo-conteudo__texto'>
                    <h2 className='subtitulo-conteudo-principal conteudo-subtitulo-section'>
                        Convivendo com o Câncer
                    </h2>
                    <h1 className='conteudo-titulo-principal conteudo-titulo-section'>Nutrição</h1>
                    <p className='paragrafo-conteudo-texto-principal conteudo-paragrafo-section'>
                        Para o paciente com câncer, a nutrição adequada durante o tratamento é fundamental para manter o balanço do organismo, já que os efeitos colaterais de alguns medicamentos podem atrapalhar a aceitação e digestão de alimentos.
                    </p>
                </div>
            </section>


            <section className='container-conteudo terceiro-conteudo'>
                <div className='segundo-conteudo__texto'>
                    <h2 className='subtitulo-conteudo-principal conteudo-subtitulo-section'>
                        Convivendo com o Câncer
                    </h2>
                    <h1 className='conteudo-titulo-principal conteudo-titulo-section'>Cardio-Oncologia</h1>
                    <p className='paragrafo-conteudo-texto-principal conteudo-paragrafo-section'>
                        A cardio-oncologia trata do coração durante o tratamento do câncer para garantir que o órgão não seja afetado devido certas terapias oncológicas que podem causar efeitos colaterais..
                    </p>
                </div>
                <div ><img src={convivendoCardioOnco} className='conteudo-imagem'/></div>
            </section>

            <section className=' container-conteudo segundo-conteudo'>
                <div ><img src={convivendoOdonto} className='conteudo-imagem'/></div>
                <div className='segundo-conteudo__texto'>
                    <h2 className='subtitulo-conteudo-principal conteudo-subtitulo-section'>
                        Convivendo com o Câncer
                    </h2>
                    <h1 className='conteudo-titulo-principal conteudo-titulo-section'>Odontologia</h1>
                    <p className='paragrafo-conteudo-texto-principal conteudo-paragrafo-section'>
                        A odontologia no tratamento oncológico cuida dos danos na cavidade bucal ocasionados pelos efeitos adversos dos medicamentos no combate ao câncer.
                    </p>
                </div>
            </section>

            <section className='container-conteudo terceiro-conteudo'>
                <div className='segundo-conteudo__texto'>
                    <h2 className='subtitulo-conteudo-principal conteudo-subtitulo-section'>
                        Convivendo com o Câncer
                    </h2>
                    <h1 className='conteudo-titulo-principal conteudo-titulo-section'>Controle da dor</h1>
                    <p className='paragrafo-conteudo-texto-principal conteudo-paragrafo-section'>
                        O tratamento de câncer pode causar dores da própria doença, mas também devido aos procedimentos e exames necessários para combatê-la. Entenda as medidas tomadas para que o paciente tenha mais qualidade de vida.
                    </p>
                </div>
                <div ><img src={convivendoControle} className='conteudo-imagem'/></div>
            </section>


            <section className='container-conteudo segundo-conteudo'>
                <div ><img src={convivendoSaudeMental} className='conteudo-imagem'/></div>
                <div className='segundo-conteudo__texto'>
                    <h2 className='subtitulo-conteudo-principal conteudo-subtitulo-section'>
                        Convivendo com o Câncer
                    </h2>
                    <h1 className='conteudo-titulo-principal conteudo-titulo-section'>Saúde Mental</h1>
                    <p className='paragrafo-conteudo-texto-principal conteudo-paragrafo-section'>
                        Durante o tratamento oncológico, cuidar da saúde mental com especialistas é fundamental para a melhoria da qualidade de vida do paciente e seu enfrentamento da doença.

                    </p>
                </div>
            </section>

            <section className=' container-conteudo terceiro-conteudo'>
                <div className='segundo-conteudo__texto'>
                    <h2 className='subtitulo-conteudo-principal conteudo-subtitulo-section'>
                        Convivendo com o Câncer
                    </h2>
                    <h1 className='conteudo-titulo-principal conteudo-titulo-section'>Oncofertilidade</h1>
                    <p className='paragrafo-conteudo-texto-principal conteudo-paragrafo-section'>
                        A oncofertilidade tem como objetivo desenvolver e aplicar opções de tratamento para a preservação da fertilidade em jovens pacientes com câncer.
                    </p>
                </div>
                <div ><img src={convivendoOncoFertilidade} className='conteudo-imagem'/></div>
            </section>

            <section className='container-conteudo segundo-conteudo'>
                <div ><img src={convivendoBioetica} className='conteudo-imagem'/></div>
                <div className='segundo-conteudo__texto'>
                    <h1 className='conteudo-titulo-principal conteudo-titulo-section'>Bioética</h1>
                    <p className='paragrafo-conteudo-texto-principal conteudo-paragrafo-section'>
                        Bioética é a boa e eficiente comunicação entre as partes na medicina. Precisa unir conhecimento, habilidade e atitude, fatores essenciais para que as informações, dados e fatos estejam alinhados com a moral, a ética e a legalidade.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Conteudo;