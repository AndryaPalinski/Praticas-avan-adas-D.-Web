import React from 'react';
import '../Css/styleLogin.css';
import { useNavigate } from 'react-router-dom';
import LoginHeader from '../components/HeaderLogin';
import LoginFooter from '../components/FooterLogin';
import DecorativeBar from '../components/Perfumaria';



function Login() {

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de autenticação
    navigate('/Home'); // Redireciona para a página inicial (Home)
  }


  return (
    <div>
      <LoginHeader/>
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Login</h1>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Digite seu email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Digite sua senha" required />
          </div>
          <div>
            <button onClick={handleLogin} type="submit" className="login-button">Entrar</button>
          </div>
        </form>
      </div>
    </div>
    <LoginFooter />
    <DecorativeBar/>
    </div>

      );
}

export default Login;
