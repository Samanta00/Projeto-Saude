import React from 'react';
import LesaoLabios from '../../assets/img/lesoes-bucal-labios.jpg'
import LesaoCeudaBoca from '../../assets/img/lesoes-no-ceu-da-boca.jpg'
import LesaoLingua from '../../assets/img/lesoes-na-lingua.jpg'
import LesaoBaixoLingua from '../../assets/img/lesoes-em-baixo-lingua.jpg'
import LesaoGengiva from '../../assets/img/lesoes-na-gengiva.jpg'
import LesaoBochecha from '../../assets/img/lesoes-na-bochecha.jpg'

function ConteudoGaleria (){
    return(<>
                <section className='banner-bioetica'>
                <div className="main-content">
                <h2 className='subtitulo__bioetica'>Galeria</h2>
                <h1 className='titulo__bioetica'>Estagios do Cancer Bucal</h1>
                <p className='paragrafo__bioetica' >Se você notar algum desses sintomas por mais de duas semanas, é recomendado consultar um clínico geral ou um dentista para uma avaliação adequada1. Lembre-se, o diagnóstico precoce pode aumentar significativamente as chances de cura.</p>
                </div>
                <img src={LesaoGengiva} alt="" />
            </section>


            <section className=' container-conteudo terceiro-conteudo'>
                <div className='segundo-conteudo__texto'>
                    <h1 className='conteudo-titulo-principal conteudo-titulo-section'>Examine os lábios</h1>
                    <p className='paragrafo-conteudo-texto-principal conteudo-paragrafo-section'>
                        Observe se há mudanças de cor e apalpe com os dedos para procurar áreas mais endurecidas, vire os labios e examine a parte internas 
                    </p>
                </div>
                <div>
                    <div ><img src={LesaoLabios} className='conteudo-imagem'/></div>
                </div>
            </section>

            <section className='container-conteudo segundo-conteudo'>
                <div><img src={LesaoCeudaBoca} className='conteudo-imagem'/></div>
                <div className='segundo-conteudo__texto'>
                    <h1 className='conteudo-titulo-principal conteudo-titulo-section'>Observe o céu da boca</h1>
                    <p className='paragrafo-conteudo-texto-principal conteudo-paragrafo-section'>
                        Incline a cabeça para tras e olhe no espelho, verifique se á algo incomun.
                    </p>
                </div>
            </section>

            <section className=' container-conteudo terceiro-conteudo'>
                <div className='segundo-conteudo__texto'>
                    <h1 className='conteudo-titulo-principal conteudo-titulo-section'>Apalpe a língua </h1>
                    <p className='paragrafo-conteudo-texto-principal conteudo-paragrafo-section'>
                        Apalpe a superficie procurando alterações, Lembre-se de que uma camada branca pode se acumular sobre a lingua se ela nao for higienizada.
                    </p>
                </div>
                <div>
                    <div ><img src={LesaoLingua} className='conteudo-imagem'/></div>
                </div>
            </section>

            <section className='container-conteudo segundo-conteudo'>
                <div><img src={LesaoBochecha} className='conteudo-imagem'/></div>
                <div className='segundo-conteudo__texto'>
                    <h1 className='conteudo-titulo-principal conteudo-titulo-section'>Examine a bochecha</h1>
                    <p className='paragrafo-conteudo-texto-principal conteudo-paragrafo-section'>
                        verifique em ambos os lados se há alguma fenda ou saliência diferente na 
                        parte interna das bochechas.
                    </p>
                </div>
            </section>

            <section className=' container-conteudo terceiro-conteudo'>
                <div className='segundo-conteudo__texto'>
                    <h1 className='conteudo-titulo-principal conteudo-titulo-section'>Embaixo da língua</h1>
                    <p className='paragrafo-conteudo-texto-principal conteudo-paragrafo-section'>
                        incline a cabeça para frente e observe embaixo da língua, não se esqueça de passar o dedo para sentir se há caroços.
                    </p>
                </div>
                <div>
                    <div ><img src={LesaoBaixoLingua} className='conteudo-imagem'/></div>
                </div>
            </section>

    </>
    )

}

export default ConteudoGaleria;