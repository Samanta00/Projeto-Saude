import React, { useState, useContext } from "react";
import StoreContext from "../../Store/context";
import { useNavigate, Link } from "react-router-dom";
import api from "../Cadastro/apiCadastros";
import Logo from "../../assets/img/denteIcone.png";
import "./login.css";

const UserLogin = () => {
  const [values, setValues] = useState({
    nome: "desafiosharenergy",
    senha: "sh@r3n3rgy",
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
        console.log("entrou aqui");
      })
      .catch((error) => {
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
              <label htmlFor="nome">Usuário</label>
              <input
                id="nome"
                type="text"
                name="nome"
                defaultValue={values.nome}
                onChange={onChange}
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
            {error && <div className="user-login__error">{error}</div>}
            <p>Não tem uma conta? <Link to="/create">Cadastre-se aqui</Link></p>
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
