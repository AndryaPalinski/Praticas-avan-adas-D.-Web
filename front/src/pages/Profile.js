import React from 'react';
import '../Css/styleProfile.css';

import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import DecorativeBar from '../components/Perfumaria';


function Profile() {
  return (      
    <div className="profile-container">
      <Header/>
    <div >
      <Menu />
      <div className="profile-info">
        <div className="profile-pic">
          <img src="caminho/para/foto-perfil.jpg" alt="Foto de Perfil" />
        </div>
        <div className="profile-details">
          <h1 className="profile-name">Nome do Usuário</h1>
          <p className="profile-bio">Breve descrição sobre o usuário, hobbies, interesses, etc.</p>
          <button className="edit-profile-button">Editar Perfil</button>
          <Link to="/personal-library" className="library-link">Minha Biblioteca</Link>
        </div>
      </div>
      <section className="followers-section">
        <h2>Seguidores</h2>
        <div className="follower-list">
          <div className="follower-item">
            <Link to="/follower/1">
              <img src="caminho/para/foto1.jpg" alt="Seguidor 1" />
              <h3>Nome Seguidor 1</h3>
            </Link>
          </div>
          <div className="follower-item">
            <Link to="/follower/2">
              <img src="caminho/para/foto2.jpg" alt="Seguidor 2" />
              <h3>Nome Seguidor 2</h3>
            </Link>
          </div>
          {/* Adicione mais seguidores conforme necessário */}
        </div>
      </section>
    </div>
    <Footer/>
    </div>

  );
}

export default Profile;
