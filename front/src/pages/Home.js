import "../Css/styleHome.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";

import React from "react";
import Menu from "../components/Menu";
import DecorativeBar from "../components/Perfumaria";

function Home() {
  return (
    <div className="home-container">
      <Header />
      <div>
        <Menu />
        <main className="main-content">
          <section className="intro">
            <h2>Bem-vindo à nossa Biblioteca Online!</h2>
            <p>
              Aqui você pode explorar uma vasta coleção de livros, reservar seus
              favoritos e acompanhar seus empréstimos.
            </p>
            <button className="explore-button">Explorar Livros</button>
          </section>

          <section className="featured-books">
            <h2>Seus livros</h2>
            <div className="book-list">
              <div className="book-item">
                <img src="caminho/para/capa1.jpg" alt="Livro 1" />
                <h3>Título do Livro 1</h3>
              </div>
              <div className="book-item">
                <img src="caminho/para/capa2.jpg" alt="Livro 2" />
                <h3>Título do Livro 2</h3>
              </div>
              <div className="book-item">
                <img src="caminho/para/capa3.jpg" alt="Livro 3" />
                <h3>Título do Livro 3</h3>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
