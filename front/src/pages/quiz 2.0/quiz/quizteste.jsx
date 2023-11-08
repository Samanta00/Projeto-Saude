import React, { useState } from 'react';
import './style.css'; // Certifique-se de que este caminho está correto e que o arquivo de estilo existe no mesmo diretório
import Navbar from '../../../component/NavBar';
import imageQuiz from '../../Quiz/paginas/assets/QUIZ.png';

const questions = [
    {
        question: 'Pergunta 1: Qual Sua Idade?',
        answers: ['A) 0 a 17 anos', 'B) 18 a 35 anos', 'C) 36 a 60 anos', 'D) 61 anos ou mais'],
        points: { 'A) 0 a 17 anos': 2, 'B) 18 a 35 anos': 4, 'C) 36 a 60 anos': 6, 'D) 61 anos ou mais': 8 },
    },
    {
        question: 'Pergunta 2: Você Costuma Beber bebidas alcoólicas?',
        answers: ['A) Sim', 'B) Não'],
        points: { 'A) Sim': 2, 'B) Não': 4 },
    },
    {
        question: 'Pergunta 3: Há quantos anos você já consome álcool?',
        answers: ['A) menos de 1 ano', 'B) de 1 a 5 anos', 'C) 10 anos ou mais'],
        points: { 'A) menos de 1 ano': 2, 'B) de 1 a 5 anos': 4, 'C) 10 anos ou mais': 6 },
    },
    {
        question: 'Pergunta 4: Você é fumante?',
        answers: ['A) Sim', 'B) Não', 'C) já fui, mas parei'],
        points: { 'A) Sim': 2, 'B) Não': 6, 'C) já fui, mas parei': 4 },
    },
    {
        question: 'Pergunta 5: A quantos anos você fuma?',
        answers: ['A) menos de 1 ano', 'B) de 1 a 5 anos', 'C) 10 anos ou mais'],
        points: { 'A) menos de 1 ano': 2, 'B) de 1 a 5 anos': 4, 'C) 10 anos ou mais': 6 },
    },
    {
        question: 'Pergunta 6: Quantas horas por dia você costuma ficar exposto(a) ao sol?',
        answers: ['A)Nunca me exponho', 'B) Menos de 1 hora por dia', 'C) Pelo menos 3 horas por dia', 'D) Mais de 3 horas por dia'],
        points: { 'A) Nunca me exponho': 2, 'B) Menos de 1 hora por dia': 4, 'C) Pelo menos 3 horas por dia': 6, 'D) Mais de 3 horas por dia': 8 },
    },
    {
        question: 'Pergunta 7: Há alguma ferida na sua boca que não cicatriza?',
        answers: ['A) Sim', 'B) Não'],
        points: { 'A) Sim': 2, 'B) Não': 4 },
    },
    {
        question: 'Pergunta 8: Você costuma utilizar protetor labial?',
        answers: ['A) Nunca', 'B) De vez em quando', 'C) Frequentemente', 'D) Sempre'],
        points: { 'A) Nunca': 8, 'B) De vez em quando': 6, 'C) Frequentemente': 4, 'D) Sempre': 2 },
    },
    {
        question: 'Pergunta 9: Você costuma comer alimentos saudáveis?',
        answers: ['A) O tempo todo', 'B) Frequentemente', 'C) De vez em quando', 'D) Nunca'],
        points: { 'A) O tempo todo': 2, 'B) Frequentemente': 4, 'C) De vez em quando': 6, 'D) Nunca': 8 },
    },
    {
        question: 'Pergunta 10: Você se considera uma pessoa saudável?',
        answers: ['A) Sim', 'B) Não', 'C) Preciso melhorar', 'D) Não tão bem ultimamente'],
        points: { 'A) Sim': 2, 'B) Não': 8, 'C) Preciso melhorar': 4, 'D) Não tão bem ultimamente': 6 },
    },
];

function QuizCancer() {
    <Navbar />
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);
    const [quizStarted, setQuizStarted] = useState(false);

    const handleStartQuiz = () => {
        setQuizStarted(true);
    };

    const handleAnswer = (answer) => {
        setAnswers({ ...answers, [currentQuestion]: answer });

        if (currentQuestion < questions.length - 1) {
            let nextQuestion = currentQuestion + 1;

            if (shouldSkipNextQuestion(currentQuestion, answer)) {
                nextQuestion += 1;
            }

            setCurrentQuestion(nextQuestion);
        } else {
            calculatePercentage();
            setShowResult(true);
        }
    };

    const shouldSkipNextQuestion = (currentQuestion, answer) => {
        if (currentQuestion === 1,3 && answer === 'B) Não') {
            return true;
        }
        return false;
    };

    const calculatePercentage = () => {
        let totalPoints = 0;
        let maxPoints = 0;

        for (let i = 0; i < questions.length; i++) {
            const answer = answers[i];
            if (answer) {
                totalPoints += questions[i].points[answer];
            }
            maxPoints += 8; // Máximo de pontos possíveis por pergunta
        }

        let chancePercentage = (totalPoints / maxPoints) * 100;
        if (chancePercentage > 90) {
            chancePercentage = 90;
        }

        return chancePercentage.toFixed(2);
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setAnswers({});
        setShowResult(false);
        setQuizStarted(false);
    };

    return (
        
        <div className="background">
            <div className="opcoesBox">
            <div className="divImagemQuiz">
            <img src={imageQuiz} width= "200px" height= "200px"  className='quizImagemteste'/>
            </div>
                <h1 className="infoPerguntas">
                    {quizStarted ? (
                        <p className="contagemPerguntas">
                            <span className="contagem">{currentQuestion + 1}/{questions.length}</span>
                        </p>
                    ) : null}
                    {!quizStarted ? (
                        <button className="botao" onClick={handleStartQuiz}>
                            Iniciar o quiz
                        </button>
                    ) : showResult ? (
                        <div className="pointsShow">
                            <p>
                                Você tem no máximo {calculatePercentage()}% de chance de ter câncer bucal.
                            </p>
                            <button className="botao" onClick={restartQuiz}>Reiniciar</button>
                        </div>
                    ) : (
                        <div>
                            <div className="resposta">
                                <p className="pergunta">{questions[currentQuestion].question}</p>
                                {questions[currentQuestion].answers.map((answer) => (
                                    <button className="grupoResposta" key={answer} onClick={() => handleAnswer(answer)}>
                                        <span className="ordem">{answer.split(')')[0]})</span>
                                        <span className="alternativa">{answer.split(')')[1]}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </h1>
            </div>
        </div>
        
    );
}

export default QuizCancer;
