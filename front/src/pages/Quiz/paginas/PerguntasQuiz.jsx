import React, { useState } from "react";
import { Perguntas } from "../../../data/perguntas";
import "./styles/pergunta-Styles.css";
import Container from "../Container";
import img from "../img.png";
import Navbar from "../../../component/NavBar";
import ModalOptions from "../../../component/NavBar/ModalOptions";

export default function PerguntasQuiz() {
  const questions = Perguntas ?? [];
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [showPoint, setShowPoint] = useState(false);
  const [points, setPoints] = useState(0);

  const handleResposta = (alternativa) => {
    // Verificar se a alternativa está correta e adicionar pontos
    if (questions[perguntaAtual].opcoesResposta[alternativa].correta) {
      const pontosDaResposta =
        questions[perguntaAtual].opcoesResposta[alternativa].pontos ||
        defaultPontosPorAlternativa(alternativa);
      setPoints(points + pontosDaResposta);
    }

    // Avançar para a próxima pergunta
    if (perguntaAtual + 1 < questions.length) {
      setPerguntaAtual(perguntaAtual + 1);
    } else {
      // Exibir os pontos finais quando todas as perguntas forem respondidas
      setShowPoint(true);
    }
  };

  const defaultPontosPorAlternativa = (alternativa) => {
    // Definir pontos padrão caso não seja especificado nas opções
    const pontosPadrao = {
      A: 2,
      B: 4,
      C: 6,
      D: 8,
    };
    const letraAlternativa = questions[perguntaAtual].opcoesResposta[alternativa]
      .alternativa;
    return pontosPadrao[letraAlternativa];
  };

  return (
    <Container>
      {showPoint ? (
        // Mostrar os pontos finais
        <div>
          <h2>Pontuação Final: {points} pontos</h2>
          {/* Aqui você pode adicionar qualquer coisa que queira exibir após o término do quiz */}
        </div>
      ) : (
        // Mostrar a pergunta atual e as opções de resposta
        <div>
          <h2>{questions[perguntaAtual].pergunta}</h2>
          <div>
            {questions[perguntaAtual].opcoesResposta.map((opcao, index) => (
              <button key={index} onClick={() => handleResposta(index)}>
                {opcao.alternativa} {opcao.resposta}
              </button>
            ))}
          </div>
        </div>
      )}
    </Container>
  );
}