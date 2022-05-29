import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { saveEmail } from '../store/actions';
import '../styles/Login.scss';

export default function Login() {
  const [data, setData] = useState({
    email: '',
    senha: '',
  });
  const [button, setButton] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const number = 5;
    const regex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g;
    setButton(data.senha.length > number
      && data.email.match(regex));
  }, [data]);

  const handleChangeInput = (e) => {
    const campo = (e.target.name);
    setData({ ...data, [campo]: e.target.value });
  };

  const loginValidation = () => {
    dispatch(saveEmail(data.email));
  };

  return (
    <div className="login-container">
      <section className="input-box">
        <h3>Falta pouco pra ter acesso a plataforma!</h3>
        <input
          placeholder="Email"
          className="inputs"
          value={ data.email }
          onChange={ handleChangeInput }
          name="email"
          data-testid="email-input"
          type="text"
        />
        <input
          placeholder="Senha"
          className="inputs"
          value={ data.senha }
          onChange={ handleChangeInput }
          name="senha"
          data-testid="password-input"
          type="text"
        />
        <Link to="/carteira">
          <button
            className="buttons"
            onClick={ loginValidation }
            disabled={ !button }
            type="button"
          >
            Entrar
          </button>
        </Link>
        <button
          type="button"
          className="esqueceu"
        >
          Esqueceu a senha?
        </button>
      </section>
    </div>
  );
}
