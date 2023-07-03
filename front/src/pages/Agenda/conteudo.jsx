import React, { useState } from 'react';
import './style.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import WhatsAppButton from 'react-whatsapp-button';

const AgendaMedicacao = () => {
  const [medicamentos, setMedicamentos] = useState([]);
  const [dataMedicacao, setDataMedicacao] = useState(new Date());
  const [horaMedicacao, setHoraMedicacao] = useState('');
  const [nomeMedicacao, setNomeMedicacao] = useState('');
  const [descricaoMedicacao, setDescricaoMedicacao] = useState('');

  const adicionarMedicacao = () => {
    const novaMedicacao = {
      data: dataMedicacao,
      hora: horaMedicacao,
      nome: nomeMedicacao,
      descricao: descricaoMedicacao,
    };
    setMedicamentos([...medicamentos, novaMedicacao]);
    setDataMedicacao(new Date());
    setHoraMedicacao('');
    setNomeMedicacao('');
    setDescricaoMedicacao('');
  };

  const enviarLembreteWhatsApp = (medicacao) => {
    const mensagem = `Lembrete: Hoje, às ${medicacao.hora}, é o horário de tomar o medicamento ${medicacao.nome}. 
Descrição: ${medicacao.descricao}`;
    const numeroTelefone = '5581981311245'; // Insira o número do destinatário do lembrete aqui
    const url = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  return (
    <div className='caixaAgenda'>
      <h2>Agenda de Medicação</h2>
      <div>
        <label className='labelAgenda'>Data:</label>
        <DatePicker selected={dataMedicacao} onChange={(date) => setDataMedicacao(date)} />
      </div>
      <div>
        <label className='labelAgenda'>Hora:</label>
        <input type="time" value={horaMedicacao} onChange={(e) => setHoraMedicacao(e.target.value)} />
      </div>
      <div>
        <label className='labelAgenda'>Nome do Medicamento:</label>
        <input type="text" value={nomeMedicacao} onChange={(e) => setNomeMedicacao(e.target.value)} />
      </div>
      <div>
        <label className='labelAgenda'>Descrição:</label>
        <textarea
          value={descricaoMedicacao}
          onChange={(e) => setDescricaoMedicacao(e.target.value)}
        />
      </div>
      <button className='buttonCalendario' onClick={adicionarMedicacao}>Adicionar Medicação</button>
      <ul>
        {medicamentos.map((medicacao, index) => (
          <li key={index}>
            {medicacao.data.toLocaleDateString()} - {medicacao.hora} - {medicacao.nome}
            <button className='buttonCalendario' onClick={() => enviarLembreteWhatsApp(medicacao)}>Enviar Lembrete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AgendaMedicacao;
