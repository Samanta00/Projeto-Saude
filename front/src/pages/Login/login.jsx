import React, { useState, useContext } from "react";
import StoreContext from "../../Store/context";
import { useNavigate, Link } from "react-router-dom";
import api from "../Cadastro/apiCadastros";
import Logo from "../../assets/img/denteIcone.png";
import "./login.css";

const UserLogin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);

  const navigate = useNavigate();
  function onChange(event) {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  }
  

  function onSubmit(event) {
    event.preventDefault();
    api
      .post("/auth/login", values)
      .then((response) => response.data)
      .then((data) => {
        setToken(data.token);
        navigate("/home");
        console("credencias existem")
      })
      .catch((error) => {
        setError("Credenciais inválidas."); // Define a mensagem de erro
        console.error(error);
      });
  }
  

  return (
    <div className="Box">
      <div className="container">
        <div className="login">
          <div className="Divimagem">
            <img src={Logo} className='logo' />
          </div>
          <h1 className="user-login__title">Happy Health</h1>
          <form className="login-form">
            <div className="user-login__form-control">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                defaultValue={values.email}
                onChange={onChange}
                value={values.email}
              />
            </div>
            <div className="user-login__form-control">
              <label htmlFor="password">Senha</label>
              <input
                id="password"
                type="password"
                name="password"
                defaultValue={values.password}
                onChange={onChange}
                value={values.password}
              />
            </div>
            {error && <div className="user-login__error">{error}</div>}
            <p>Não tem uma conta? <Link to="/cadastro">Cadastre-se aqui</Link></p>
            <input
              type={"submit"}
              value={"enviar"}
              className="user-login__submit-button"
              onClick={onSubmit}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
