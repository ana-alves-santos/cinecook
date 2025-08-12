import React from "react";
import { useNavigate } from "react-router-dom";
import recipes from "../data/recipes.json";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="home-container">
      <div className="content-wrapper">
        <section className="intro">
          <h1>Sabores que contam histórias</h1>
          <p>Receitas inspiradas nos seus filmes favoritos.</p>
          <button className="btn-primary" onClick={() => alert('Vamos cozinhar!')}>
            Vamos cozinhar
          </button>
        </section>

        <section className="about-us">
          <h2>Quem somos</h2>
          <p>
          Unimos cinema e culinária para compartilhar receitas que não são apenas deliciosas, mas também trazem para a sua mesa momentos inesquecíveis das telonas.
          </p>
        </section>

        <section className="movies-preview">
          <div className="movies-track">
            <img src="/src/images/filme1.jpg" alt="Imagem do filme 1" />
            <img src="/src/images/filme2.jpg" alt="Imagem do filme 2" />
            <img src="/src/images/filme3.jpg" alt="Imagem do filme 3" />
            {/* repetindo para efeito de movimento */}
            <img src="/src/images/filme1.jpg" alt="Imagem do filme 1" />
            <img src="/src/images/filme2.jpg" alt="Imagem do filme 2" />
            <img src="/src/images/filme3.jpg" alt="Imagem do filme 3" />
          </div>
        </section>

        <section className="recipes-section">
          <h2>Receitas</h2>
          <div className="recipes-grid">
            {recipes.map((item) => (
              <div key={item.id} className="recipe-card">
                <img src={item.image} alt={item.title} />
                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p>{item.movie}</p>
                  <button
                    className="btn-secondary"
                    onClick={() => navigate(`/recipe/${item.id}`)}
                  >
                    Veja a receita
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
