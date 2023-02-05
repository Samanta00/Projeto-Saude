import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ellen from '../../assets/img/euu.jpeg'
import './menu.css'

function Menu() {
  const [active, setMode]=useState(false)
  const toggleMode=()=>{
    setMode(!active);
  }
  return (
    <div>
     <header>
        <nav className='navBar'>
            <ul className="links">
            <li className="link1"><Link to="/quiz">Quiz</Link></li>
            <li className="link1"><Link to="/recomendacoes">Recomendações</Link></li>
            <li className="link1"><Link to="/agenda">Agenda</Link></li>
            <li className="link1"><Link to="/galeria">Galeria</Link></li>
            </ul>    
            <div className='blocoUsuario'>
              <h2 className='nomeUser'>Ellen</h2>
              <img className='usuario' src={ellen}/>
            </div>   

          
          <div className={active ? "icon iconActive" : "icon"} onClick={toggleMode}>
            <div className='hamburguer hamburguerIcon'></div>
          </div>  
            <div className={ active ? "menu menuOPen" : "menu menuClose"}>
                <div className='list'>
                    <ul className='listItems'>
                      <li>Perfil</li>
                      <li>Configurações</li>
                      <li>Sair</li>
                    </ul>
                </div>
            </div>
        

        </nav>
     </header>
    </div>
  )
};

export default Menu;