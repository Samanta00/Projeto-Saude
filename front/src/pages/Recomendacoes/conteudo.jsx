import React from 'react';
import './styles/recomendacoes.css';

const Conteudo=()=>{
    return(
        <div className="recomendacoes-container">
        <h1>Recomendações para o Tratamento do Câncer de Boca</h1>
        <p>
          Aqui estão alguns dos maiores hospitais no Brasil especializados no tratamento do câncer de boca:
        </p>
        <ul>
          <li>Hospital do Câncer de São Paulo</li>
          <li>Centro de Referência em Estomatologia - CROSP</li>
          <li>Instituto Nacional de Câncer (INCA) - Rio de Janeiro</li>
          <li>Hospital A.C. Camargo - São Paulo</li>
          <li>Centro de Oncologia e Hematologia do Hospital Sírio-Libanês - São Paulo</li>
        </ul>
      </div>
    )
}

export default Conteudo;