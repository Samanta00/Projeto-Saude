import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/styles.css";
import imageQuiz from './assets/teste.png';

export default function QuizInicio() {
    return (
        <div className="background">
            <div className="divImagemQuiz">
                <img src={imageQuiz} />
                <div className="divButtonQuiz">
                    <button className="buttonQuiz">
                    <Link to="/perguntas">Jogar</Link>
                    </button>
                </div>
            </div>


        </div>
    );
}
