import React from 'react';
import './styles/menuEstado.css'

const estados = [
  'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal',
  'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais',
  'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte',
  'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'
];

const MenuEstados = ({ onSelectEstado }) => {
  return (
    <div>
      <h3>Selecione o estado:</h3>
      <ul className='listaEstados'>
        {estados.map((estado) => (
          <li key={estado}>
            <button onClick={() => onSelectEstado(estado)}>{estado}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuEstados;
