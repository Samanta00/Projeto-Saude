import React from 'react';
import './conteudo.css'

import dentista from '../../assets/img/doutorDentista.jpg'

function Conteudo() {
  return (
    <>

      <div className='divMae'>

        <div className='bloco1'>
          <hr />
          <h1 className='tema'>Gold teeth health</h1>
          <div className='blocoEsquerdoPrincipal'>
            <img src={dentista} className='iconeSite' />

            <article className='card'>
              <p className='link'>fonte:https://br.freepik.com/vetores-premium/logotipo-do-medico-dentista-segurando-o-desenho-do-mascote-do-desenho-animado-de-dente-triste_11686850.htm</p>
            </article>

          </div>

          <div className='blocoDireitoPrincipal'>
            <h2 className='comentario'>"Olá, Me chamo Sr Dentista, Sou responsável por realizar exames clínico extra-buca e intra-bucal afim de encontrar Anormalidade
              para a prevenção do cancer bucal, como forma de prevenção e aprendizado educacional estou presente nesse sistema de software
              para te ensinar a ter um conhecimento superior sobre o cancer oral e suas prevenções"</h2>
          </div>

        </div>

      </div>
      <hr />

      <div className='bloco2'>

        <h3 className='perguntaIntrodutoria'>O'que eu aprenderei com esse sistema de software?</h3>
        
        <div className='introducao'>
            <h4>Com o Gold teeth health Você terá um gerenciador da Saúde contra o cancer bucal, o sistema de software foi projetado
            para auxiliar Pessoas que sofrem ou não com a doença</h4>
        </div>
        <div className='intro2'>
            <p>Não sofro com A doença, Como o Sistema Poderia me Ajudar?</p>
            <h4>O Projeto de Software tras diversas formas educacionais e objetivas para a prevenção e o conhecimento do cancer bucal,
              desta forma uma pessoa saudavel será Ciente Sobre o assunto e suas responsabilidades para uma saúde saudavel.
            </h4>
        </div>

        <div className='intro3'>
            <p>Sofro com a doença, Como o Sistema Poderá me Ajudar?</p>
            <h4>Na Plataforma do Sistema de Software existem alguns cuidados especiais pensados em você, uns deles é o calendário de medicamentos
              assim que você agendar os dias para seus remedios será enviado uma mensagem no seu email para te lembrar do medicamento necessário para
              o dia agendado. Como forma de auxilia-lo(a)  a um bem estar melhor, existe uma categoria de recomendações médicas no sistema para que você
              saiba com qual especialista médico realmente você pode se orientar.
            </h4>
        </div>

      </div>
    </>


  )
};

export default Conteudo;