import React from 'react';
import './style.css';
import convivendoBioetica from './assets/convivendo-com-cancer_exercicios.jpg';
import seta from './assets/arrow-left-solid.svg';
import facebook from './assets/facebook-f.svg';
import twitter from './assets/twitter.svg';
import linkedin from './assets/linkedin-in.svg';
import whatsapp from './assets/whatsapp.svg';
import email from './assets/envelope-regular.svg';

const Exercicios = () => {
    return (
        <div>
            <section className='banner-exercicio banner-bioetica'>
            <img className='seta' src={seta} alt=''></img>
                <a href="#">Convivendo com o Cancer</a>
                <div className="main-content">
                <h2 className='subtitulo__banner-exercicio'>Convivendo com o Cancer</h2>
                <h1 className='titulo__banner-exercicio'>Exercícios Físicos</h1>
                <p className='paragrafo__banner-exercicio'>A prática de exercícios físicos regulares durante o tratamento de câncer pode melhorar a qualidade de vida do paciente, aliviando alguns dos efeitos adversos dos medicamentos, além de fortalecer a imunidade e aumentar a disposição. Saiba mais</p>
                <div className='exercicio'><img src={convivendoBioetica} alt="" /></div>
                </div>
            </section>

            <section className='estrutura-exercicio-fisico'>

                <div className="just__space"></div>

                <div className='conteudo'>

                <p className='paragrafo__estrutura-exercicio-fisico'>A fadiga acomete até 70% dos pacientes de câncer e pode ser decorrente tanto da doença quanto dos tratamentos (cirurgia, quimioterapia, radioterapia e toda a dinâmica que os envolve e mexe com a rotina das pessoas). Por causa disso, durante muito tempo acreditou-se que o melhor a fazer fosse permanecer em repouso o máximo possível e diminuir a prática de exercícios físicos ao longo do tratamento contra a doença.</p>

                <p className='paragrafo__estrutura-exercicio-fisico'>Depois de estudos e pesquisas que sistematicamente provaram o contrário, hoje a recomendação é que os pacientes, em sua ampla maioria, mantenham o corpo em movimento enquanto combatem o câncer – algumas exceções serão observadas adiante. Vale destacar, ainda, que repouso em excesso pode levar à perda de funções corporais, à fraqueza muscular e à redução da mobilidade.</p>

                <p className='paragrafo__estrutura-exercicio-fisico'>A prática de atividades físicas não apenas é segura como pode melhorar a qualidade de vida da pessoa em tratamento, trazendo como benefícios físicos:</p>

                <ul>
                    <li>
                        Alívio dos efeitos adversos da quimioterapia (como náuseas);
                    </li>
                    <li>
                        Aumento da disposição;
                    </li>
                    <li>
                        Redução do cansaço (aquele mesmo que atinge até 70% dos pacientes);
                    </li>
                    <li>
                        Melhora das funções vitais do organismo;
                    </li>
                    <li>
                        Fortalecimento da imunidade;
                    </li>
                    <li>
                        Melhora do equilíbrio (diminuindo o risco de quedas e fraturas ósseas);
                    </li>
                    <li>
                        Diminuição do risco de osteoporose; e
                    </li>
                    <li>
                        Melhora da circulação sanguínea.
                    </li>
                </ul>

                <p className='paragrafo__estrutura-exercicio-fisico'>Os efeitos dos exercícios físicos também se refletem na manutenção de um peso corporal adequado, uma das principais formas de prevenir e combater o câncer. O excesso de gordura corporal provoca processo inflamatório e aumenta a produção de hormônios, o que pode causar danos às células, provocando ou acelerando o surgimento da doença.</p>

                <p className='paragrafo__estrutura-exercicio-fisico'>Sobrepeso, obesidade e ganho de peso na fase adulta são associados a cânceres no esôfago, estômago, pâncreas, vesícula biliar, fígado, intestino (cólon e reto), rins, mama, ovário, endométrio (corpo do útero), meningioma, tireoide, mieloma múltiplo e, possivelmente, próstata (avançado), mama (em homens) e linfoma difuso de grandes células B. </p>

                <p className='paragrafo__estrutura-exercicio-fisico'>Psicologicamente, os exercícios físicos durante o tratamento contra o câncer ajudam a:</p>

                <ul>
                    <li>
                        Controlar a ansiedade, normal em pacientes oncológicos;
                    </li>
                    <li>
                        Amenizar sintomas depressivos surgidos com o diagnóstico da doença;
                    </li>
                    <li>
                        Aumentar a autonomia do paciente em suas atividades cotidianas;
                    </li>
                    <li>
                        Melhorar a autoestima; e
                    </li>
                    <li>
                        Melhorar o humor e o relacionamento social.
                    </li>
                </ul>

                <h1 className='titulo__estrutura-exercicio-fisico'>Exercícios físicos recomendados durante o tratamento de câncer </h1>

                <p className='paragrafo__estrutura-exercicio-fisico'>São muitos os benefícios dos exercícios físicos durante o tratamento contra o câncer, mas é importante realizar um programa baseado no que é seguro, eficaz e confortável para o paciente. </p>

                <p className='paragrafo__estrutura-exercicio-fisico'>Devem ser levados em consideração o passado de atividades físicas e os novos limites do corpo do indivíduo – eles podem ter mudado devido ao tipo de câncer, ao seu estadiamento e ao tratamento definido para combater a doença. </p>

                <p className='paragrafo__estrutura-exercicio-fisico'>Não é o momento de se exercitar para perder peso ou ganhar massa muscular; o objetivo é manter a capacidade física e amenizar efeitos adversos do tratamento. Os exercícios físicos mais recomendados para o paciente oncológico apto são:</p>

                <ul>
                    <li>
                        Atividades aeróbicas leves (caminhada e pedaladas leves);
                    </li>
                    <li>
                        Alongamento;
                    </li>
                    <li>
                        Pilates leve; e
                    </li>
                    <li>
                        Dança.
                    </li>
                </ul>

                <p className='paragrafo__estrutura-exercicio-fisico'>Em geral, recomenda-se a realização de pelo menos 30 minutos de atividades físicas por dia, mas há evidências de que os benefícios ocorrem mesmo quando a disponibilidade de tempo é menor. A duração diária é um elemento, mas não o principal. </p>

                <h1 className='titulo__estrutura-exercicio-fisico'>Precauções para a prática durante o tratamento de câncer </h1>

                <p className='paragrafo__estrutura-exercicio-fisico'>Exames solicitados pelos médicos responsáveis pelo tratamento oncológico (e suas devidas análises) e alguns cuidados fazem parte das precauções para a prática de exercícios físicos durante o tratamento de câncer. As principais são: </p>

                <ul>
                    <li>
                        Realizar exames de sangue e verificar se todos os resultados estão dentro do esperado para que os exercícios físicos não prejudiquem o quadro geral de saúde;
                    </li>
                    <li>
                        Não fazer atividades físicas em dias em que sentir dor, mal-estar ou outro sintoma incapacitante;
                    </li>
                    <li>
                        Reduzir a duração do exercício físico caso bata um cansaço durante sua realização;
                    </li>
                    <li>
                        Evitar superfícies irregulares que possam prejudicar o equilíbrio e facilitar quedas;
                    </li>
                    <li>
                        Trocar a esteira pela bicicleta ergométrica caso sinta dormência nos pés;
                    </li>
                    <li>
                        Procurar o médico imediatamente caso perceba sangramento, inchaço, dor, tontura ou visão turva durante ou depois dos exercícios físicos;
                    </li>
                    <li>
                        Evitar piscinas com cloro após sessões de radioterapia; e
                    </li>
                    <li>
                        Evitar esportes aquáticos e outros com riscos de infecção caso esteja usando cateter.
                    </li>
                </ul>

                <h1 className='titulo__estrutura-exercicio-fisico'>Condições que contraindicam a prática durante o tratamento de câncer</h1>

                <p className='paragrafo__estrutura-exercicio-fisico'>Apesar dos benefícios já apresentados, nem todos os pacientes oncológicos podem realizar exercícios físicos. Algumas condições que contraindicam as atividades são:</p>

                <ul>
                    <li>
                        Anemia acentuada (diminui a resistência, pois a hemoglobina que falta no sangue é a responsável por levar oxigênio aos pulmões);
                    </li>
                    <li>
                        Nível de plaquetas baixo (elas são responsáveis pela coagulação e pela cicatrização); e
                    </li>
                    <li>
                        Dores ósseas causadas pelos tumores e suas metástases.
                    </li>
                </ul>

                <p className='paragrafo__estrutura-exercicio-fisico'>Em alguns casos, o médico responsável pelo tratamento poderá avaliar os benefícios gerados por atividades de baixa carga, como hidroterapia, e indicar alguma movimentação para o corpo. Lembre-se: para não causar danos à saúde e ao tratamento, toda e qualquer modalidade adotada precisa ter sido aprovada pelo médico especialista. </p>

                <h1 className='titulo__estrutura-exercicio-fisico'>7 dicas práticas para realizar exercícios físicos no dia a dia durante o tratamento de câncer</h1>

                <p className='paragrafo__estrutura-exercicio-fisico'>O cansaço e os efeitos adversos do tratamento contra o câncer podem dificultar a criação de uma rotina diária de exercícios físicos. Para auxiliar nesse processo até que o hábito esteja criado, seguem algumas dicas práticas:</p>

                <p className='paragrafo__estrutura-exercicio-fisico'> 1)  Escolha atividades físicas que tragam prazer ao dia a dia – o exercício nunca deve ser sinônimo de sofrimento;</p>
                <p className='paragrafo__estrutura-exercicio-fisico'> 2)  Troque o carro pela caminhada em trajetos curtos;</p>
                <p className='paragrafo__estrutura-exercicio-fisico'> 3)  Suba escadas – respeitando seu ritmo – em vez de usar o elevador;</p>
                <p className='paragrafo__estrutura-exercicio-fisico'> 4)  Leve amigos para se exercitarem com você;</p>
                <p className='paragrafo__estrutura-exercicio-fisico'> 5)  Faça caminhadas e ciclismo ao ar livre (em praças e parques ou ambientes de uso comum de condomínios, por exemplo);</p>
                <p className='paragrafo__estrutura-exercicio-fisico'> 6)  Dependa o mínimo possível de academias (reserve o uso das instalações para dias de chuva ou frio intenso);</p>
                <p className='paragrafo__estrutura-exercicio-fisico'> 7)  Limite o tempo de telas (TV, celular, tablet, computador, videogame) de seus dias – elas são viciantes e podem desestimular o pontapé inicial para o exercício do dia.</p>

                <h1 className='titulo__estrutura-exercicio-fisico'>Que médicos devem orientar sobre prática de exercícios físicos durante o tratamento de câncer</h1>

                <p className='paragrafo__estrutura-exercicio-fisico'>Na equipe multidisciplinar que acompanha o tratamento oncológico, os especialistas que podem orientar sobre a prática de exercícios físicos são o oncologista, o fisioterapeuta e o educador físico.</p>

                <h1 className='titulo__estrutura-exercicio-fisico'>Mitos e verdades sobre prática de exercícios físicos durante o tratamento de câncer</h1>

                <p className='paragrafo__estrutura-exercicio-fisico'>Todos os exercícios físicos são bons para a saúde dos pacientes oncológicos</p>
                <p className='paragrafo__estrutura-exercicio-fisico'><strong> MITO.</strong> Exercícios de muito impacto e alta performance, como corridas competitivas e aparelhos de musculação com carga alta, prejudicam a saúde e são proibidos para pacientes oncológicos.</p>

                <p className='paragrafo__estrutura-exercicio-fisico'>É bom o paciente oncológico fazer exercício físico quando estiver com náusea, para aliviá-la</p>
                <p className='paragrafo__estrutura-exercicio-fisico'><strong> MITO.</strong> O exercício físico pode aliviar as náuseas comuns no pós-quimioterapia, mas como efeito contínuo, não imediato. Durante uma crise de náusea, o melhor é dispensar a atividade temporariamente.</p>

                <p className='paragrafo__estrutura-exercicio-fisico'>Mesmo quem nunca fez exercícios físicos pode aderir a eles durante o tratamento de câncer</p>
                <p className='paragrafo__estrutura-exercicio-fisico'><strong> VERDADE.</strong> Todo e qualquer paciente que esteja em condições de se movimentar e que seja orientado por médicos especializados pode e deve realizar exercícios físicos durante o tratamento contra o câncer, e assim melhorar a saúde e a qualidade de vida. </p>

                <p className='paragrafo__estrutura-exercicio-fisico'>Quem já se exercitava antes do diagnóstico de câncer pode manter a rotina de atividades físicas inalterada</p>
                <p className='paragrafo__estrutura-exercicio-fisico'><strong> MITO.</strong> O passado é importante, mas os limites do corpo podem mudar por causa da doença e do tratamento. Avaliações físicas e clínicas devem ser feitas pelo médico especialista, de modo que o exercício físico não prejudique nem a saúde nem o tratamento do paciente. </p>

                <p className='paragrafo__estrutura-exercicio-fisico'>Acrescentar pequenas atividades físicas ao dia a dia já é suficiente para auxiliar a saúde do paciente oncológico</p>
                <p className='paragrafo__estrutura-exercicio-fisico'><strong> VERDADE.</strong> Não precisa haver uma atividade atlética e sistemática para que o organismo sinta benefícios durante o tratamento contra o câncer. Movimentar o corpo diariamente, por mínimo que seja – pequenos afazeres domésticos ou mudanças na locomoção, por exemplo – já promove uma evolução na qualidade de vida.</p>
                <p className='paragrafo__estrutura-exercicio-fisico'></p>

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

export default Exercicios;
