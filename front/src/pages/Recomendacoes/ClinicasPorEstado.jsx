import React from 'react';

const ClinicasPorEstado = ({ estado }) => {
  // Aqui você pode fazer uma chamada para a API ou obter as clínicas do estado selecionado
  // e exibi-las na tela.
  // Por enquanto, vamos apenas exibir uma mensagem de exemplo.

  const clinicas = [
    'Clínica 1', 'Clínica 2', 'Clínica 3', 'Clínica 4', 'Clínica 5'
  ];

  return (
    <div>
      <h3>Clínicas de tratamento de câncer bucal em {estado}:</h3>
      <ul>
        {clinicas.map((clinica) => (
          <li key={clinica}>{clinica}</li>
        ))}
      </ul>
    </div>
  );
}

export default ClinicasPorEstado;
