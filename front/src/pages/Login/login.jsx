import React, { useState, useContext } from 'react';
import StoreContext from '../../Store/context';
import { useNavigate, Link } from 'react-router-dom';
import api from '../Cadastro/apiCadastros';
import ImgMedico from '../../assets/img/dentista-editado.png'
import './login.css';


const UserLogin = () => {
  const [values, setValues] = useState({
    nome: "desafiosharenergy",
    senha: "sh@r3n3rgy"
  });

  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);

  const navigate = useNavigate()
  function onChange(event) {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  }



  function onSubmit(event) {
  
    event.preventDefault();
    api.post("/auth/login", values)
      .then(response => response.data)

      .then(data => {
        setToken(data.token)
        navigate('/home') 
        console.log("entrou aqui")
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <div className='container'>
      
      <div className="login">
        
        <h1 className="user-login__title">Happy Health APP</h1>
       
        
     
        <div className='Divimagem'>
        <img src={ImgMedico} className='Imagemdentista'></img>
      </div>

       
      
        <form className='login-form'>
          <div className="user-login__form-control">
            <label htmlFor="nome">Usuário</label>
            <input id="nome" type="text" name="nome" defaultValue={values.nome} onChange={onChange}
            value={values.nome}
            />
          </div>
          <div className="user-login__form-control">
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              type="password"
              name="senha"
              defaultValue={values.senha}
              onChange={onChange}
              value={values.senha}
            />
          </div>
          {error && (
            <div className="user-login__error">{error}</div>
          )}

          <Link to='/create'>Novo Cadastro</Link>

          <br /><br />
          <input type={'submit'} value={"enviar"} className="user-login__submit-button" onClick={onSubmit} />
        </form>
      

      </div>
    </div>

  );
};

export default UserLogin;