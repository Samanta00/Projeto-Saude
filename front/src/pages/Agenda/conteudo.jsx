import React, { useState, useRef } from 'react';
import './style.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import servicos from "../../assets/img/euu.jpeg";
import estadosECidades from '../../estadosECidades.json';
import { Link } from 'react-router-dom';
import { subDays, subWeeks, subMonths } from 'date-fns';
import { setSeconds, setMinutes, setHours } from 'date-fns';
import { startOfDay, startOfWeek, startOfMonth } from 'date-fns';
import { toDate, parse, parseISO } from 'date-fns';
import { set } from 'date-fns';



const AgendaMedicacao = () => {
  const [medicamentos, setMedicamentos] = useState([]);
  const [dataMedicacao, setDataMedicacao] = useState(new Date());
  const [horaMedicacao, setHoraMedicacao] = useState('');
  const [nomeMedicacao, setNomeMedicacao] = useState('');
  const [descricaoMedicacao, setDescricaoMedicacao] = useState('');
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [sexo, setSexo] = useState(''); // Pode ser uma opção de seleção (Masculino/Feminino/Outro)
  const [numeroWhatsApp, setNumeroWhatsApp] = useState('');
  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const [cidadeSelecionada, setCidadeSelecionada] = useState('');
  const [resultadosConsulta, setResultadosConsulta] = useState([]);
  const [showAgendamento, setShowAgendamento] = useState(false);
  const [showConsulta, setShowConsulta] = useState(false);
  const [showResultados, setShowResultados] = useState(false);




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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envio do formulário aqui
  };

  const handleAcessarAgendamentoClick = () => {
    setShowAgendamento(true);
    setShowConsulta(false);
    setShowResultados(false);
    setShowForm(false);
  };

  const handleAcessarConsultaClick = () => {
    setShowAgendamento(false);
    setShowConsulta(true);
    setShowResultados(false);
    setShowForm(false);
  };

  const handleAcessarResultadosClick = () => {
    setShowAgendamento(false);
    setShowConsulta(false);
    setShowResultados(true);
    setShowForm(false); // Oculta o formulário quando "Acessar" é clicado
  };


  const handlePesquisaClick = () => {
    // Aqui você deve implementar a lógica de pesquisa
    // Pode ser uma chamada a uma API ou qualquer outra lógica que você precise
    // Os resultados da pesquisa devem ser armazenados em resultadosConsulta
    // Exemplo de como definir os resultados de pesquisa (substitua com sua lógica real):
    const resultadosExemplo = [
      { nomeMedico: 'Dr. João', especialidade: 'Cardiologia', data: '2023-09-10', horario: '09:00' },
      { nomeMedico: 'Dra. Maria', especialidade: 'Dermatologia', data: '2023-09-15', horario: '14:30' },
      // Adicione mais resultados conforme necessário
    ];

    setResultadosConsulta(resultadosExemplo);
  };


  const enviarLembreteWhatsApp = (medicacao) => {
    const mensagem = `Lembrete: Hoje, às ${medicacao.hora}, é o horário de tomar o medicamento ${medicacao.nome}.
Descrição: ${medicacao.descricao}`;
    const numeroTelefone = '5581981311245'; // Insira o número do destinatário do lembrete aqui
    const url = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  const [showForm, setShowForm] = useState(false);

  const formRef = useRef(null);
  const agendamentoRef = useRef(null);
  const consultaRef = useRef(null);
  const resultadosRef = useRef(null);

  const handleAccessClick = () => {
    setShowAgendamento(false);
    setShowConsulta(true);
    setShowResultados(false);
  }



  const handleForm = () => {
    setShowForm(true);

    // Role a página para o formulário
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });

      console.log('Dados do formulário:', {
        nomeCompleto,
        cpf,
        dataNascimento,
        sexo,
        numeroWhatsApp,
      });
    }
  }





  return (
    <div className="caixaAgenda">
      <div className="component-wrapper">
        <div className="subcomponents-container">
          <div className="subcomponent">
            <img src={servicos} className="servicos" alt="" />
            <h2>Agendar Medicação</h2>
            <h5>Quiz interativo com perguntas sobre hábitos que podem aumentar o risco de câncer bucal.</h5>
            <p>Como Funciona?</p>
            <h5>Com base nas informações do usuário, calcular uma estimativa de quando a pessoa estaria mais propensa a desenvolver um câncer bucal</h5>
            <button onClick={handleAcessarAgendamentoClick}>Acessar</button>
          </div>

          <div className="subcomponent">
            <img src={servicos} className="servicos" alt="" />
            <h2>Agendar Consulta</h2>
            <h5>Permitir que os usuários agendem consultas com profissionais de saúde especializados em câncer bucal.</h5>
            <p>Como Funciona?</p>
            <h5>Mostrar disponibilidade de horários e locais para as consultas.</h5>
            <button onClick={handleAccessClick}>Acessar</button>
          </div>

          <div className="subcomponent">
            <img src={servicos} className="servicos" alt="" />
            <h2>Resultados Médicos</h2>
            <h5>Possibilitar o compartilhamento seguro de resultados médicos entre pacientes e profissionais de saúde.</h5>
            <p>Como Funciona?</p>
            <h5>Garantir a confidencialidade e integridade das informações compartilhadas.</h5>
            <button style={{ textDecoration: 'none', color: 'black' }}>
              <Link to="/resultados">Acessar</Link>
            </button>
          </div>

        </div>

        <br /><br />
      </div>



      {showConsulta && (
        <div className="pagina" ref={consultaRef}>
          <h1>Agenda de Consulta Médica</h1>
          <div className="filtro">
            <label htmlFor="estadoSelect">Estado:</label>
            <select
              id="estadoSelect"
              value={estadoSelecionado}
              onChange={(e) => setEstadoSelecionado(e.target.value)}
            >
              <option value="">Selecione um estado</option>
              {Object.keys(estadosECidades).map((estado) => (
                <option key={estado} value={estado}>
                  {estado}
                </option>
              ))}
            </select>
            <label htmlFor="cidadeSelect">Cidade:</label>
            <select
              id="cidadeSelect"
              value={cidadeSelecionada}
              onChange={(e) => setCidadeSelecionada(e.target.value)}
            >
              <option value="">Selecione uma cidade</option>
              {estadoSelecionado && estadosECidades[estadoSelecionado].map((cidade) => (
                <option key={cidade} value={cidade}>
                  {cidade}
                </option>
              ))}
            </select>
            <button onClick={handlePesquisaClick}>Pesquisar</button>
          </div>
        </div>
      )}



      {resultadosConsulta.length > 0 && (
        <div className="resultados">
          <h2>Resultados da Consulta</h2>
          <ul>
            {resultadosConsulta.map((resultado, index) => (
              <li key={index}>
                <strong>Médico:</strong> {resultado.nomeMedico}<br />
                <strong>Especialidade:</strong> {resultado.especialidade}<br />
                <strong>Data:</strong> {resultado.data}<br />
                <strong>Horário:</strong> {resultado.horario}<br />
                <strong>Vagas Disponíveis:</strong> 123 <br />
                <button onClick={handleForm}>Agendar Consulta</button>
              </li>
            ))}
          </ul>
        </div>
      )}



      {showForm && (
        <div ref={formRef}>
          <form onSubmit={handleSubmit} className="centralized-form">
            <h3>Agendamento de Consultas na sua Região</h3>
            <div>
              <label>Nome Completo:</label>
              <input
                type="text"
                value={nomeCompleto}
                onChange={(e) => setNomeCompleto(e.target.value)}
                required
              />
            </div>
            <div>
              <label>CPF:</label>
              <input
                type="text"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Data de Nascimento:</label>
              <input
                type="date"
                value={dataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Sexo:</label>
              <select
                value={sexo}
                onChange={(e) => setSexo(e.target.value)}
                required
              >
                <option value="">Selecione</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
            <div>
              <label>Número do WhatsApp:</label>
              <input
                type="text"
                value={numeroWhatsApp}
                onChange={(e) => setNumeroWhatsApp(e.target.value)}
                required
              />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      )}


      {
        showAgendamento && (
          <div ref={agendamentoRef} className='AgendamentoMedicacao'>
            <h2 className='titleAgendamento'>Agenda de Medicação</h2>
            <div>
              <label className="labelAgenda">Data:</label>
              <DatePicker selected={dataMedicacao} onChange={(date) => setDataMedicacao(date)} />
            </div>
            <div>
              <label className="labelAgenda">Hora:</label>
              <input type="time" value={horaMedicacao} onChange={(e) => setHoraMedicacao(e.target.value)} />
            </div>
            <div>
              <label className="labelAgenda">Nome do Medicamento:</label>
              <input type="text" value={nomeMedicacao} onChange={(e) => setNomeMedicacao(e.target.value)} />
            </div>
            <div>
              <label className="labelAgenda">Descrição:</label>
              <textarea value={descricaoMedicacao} onChange={(e) => setDescricaoMedicacao(e.target.value)} />
            </div>
            <button className="buttonCalendario" onClick={adicionarMedicacao}>Adicionar Medicação</button>
            <ul className='ulAgendamento'>
              {medicamentos.map((medicacao, index) => (
                <li key={index} className='liAgendamento'>
                  {medicacao.data.toLocaleDateString()} - {medicacao.hora} - {medicacao.nome}
                  <button className="buttonCalendario" onClick={() => enviarLembreteWhatsApp(medicacao)}>Enviar Lembrete</button>
                </li>
              ))}
            </ul>
          </div>

        )
      }
    </div >

  )
}

export default AgendaMedicacao;
