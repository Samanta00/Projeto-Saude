import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/styles.css";
import imageQuiz from './assets/QUIZ.png';
import icon1 from './assets/Icon__Quiz.png';
import icon2 from './assets/Icon__Quiz__2.png';

export default function QuizInicio() {
    return (
        <div className="background">
            <div className="icon-1"><img src={icon1} width= "200px" height= "200px"/></div>
            <div className="divImagemQuiz">
                <img src={imageQuiz} width= "200px" height= "200px" />
                <div className="divButtonQuiz">
                    <button className="buttonQuiz">
                    <Link to="/perguntas">Jogar</Link>
                    </button>
                </div>
            </div>
            <div className="icon-2"><img src={icon2} width= "200px" height= "200px"/></div>

        </div>
    );
}
