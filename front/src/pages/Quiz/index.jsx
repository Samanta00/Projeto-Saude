import React, { useState } from "react";
import { Perguntas } from "../../data/perguntas";
import "./styles.css";
import Container from "./Container";
import img from "./img.png"
import Navbar from '../../component/NavBar';
import ModalOptions from '../../component/NavBar/ModalOptions'

export default function Quiz() {
  const questions = Perguntas ?? [];
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [showPoint, setShowPoint] = useState(false);
  const [points, setPoints] = useState(0);

  function proximaPergunta(correta) {
    const nextQuestion = perguntaAtual + 1;

    if (correta) {
      setPoints(points + 50);
    }

    if (nextQuestion < questions.length) {
      setPerguntaAtual(nextQuestion);
    } else {
      setShowPoint(true);
    }
  }

  function GoToBack() {
    setShowPoint(false);
    setPoints(0);
    setPerguntaAtual(0)
  }

  return (
    <>
      <Navbar />
      <ModalOptions />
      {showPoint ? (
        <div className="pointsShow">
          <p>Seu resultado foi <span className="point">{`%${points}`}</span></p>
          <button 
            className="botao"
            onClick={() => GoToBack()}
          >Resetar</button>
        </div>
      ) : (
        <Container>
          <div className="infoPerguntas">
            <div className="contagemPerguntas">
              <span>
                Pergunta <span className="contagem">{perguntaAtual + 1}</span> de <span className="contagem">{questions.length}</span>
              </span>
            </div>
            <div className="flex-direction">
              <img src={img} alt="" />
              <div className="pergunta">{questions[perguntaAtual].pergunta}</div>
            </div>
          </div>

          <div className="opcoesBox">
            <div className="resposta">
              {questions[perguntaAtual].opcoesResposta.map((opcoesResposta) => (
                <div className="grupoResposta"
                  onClick={() => proximaPergunta(opcoesResposta.correta)}
                >
                  <div className="ordem">{opcoesResposta.alternativa}</div>
                  <button
                    className="botao alternativa"
                  >
                    {opcoesResposta.resposta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </Container>
      )}
    </>
  );
}
