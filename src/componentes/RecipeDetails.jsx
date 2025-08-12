import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import recipes from "../data/recipes.json";
import "./RecipeDetails.css";

export default function RecipeDetails() {
  // Pega o ID 
  const params = useParams();
  const navigate = useNavigate();

  const id = Number(params.id);

  // Procura a receita
  const recipe = recipes.find(function (r) {
    return r.id === id;
  });

// mensagem de erro 
  if (!recipe) {
    return (
      <main className="recipe-details">
        <h2>Receita não encontrada</h2>
        <button onClick={() => navigate("/")}>Voltar</button>
      </main>
    );
  }

  //
  return (
    <main className="recipe-details">
      <h1>{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        style={{ width: "100%", borderRadius: 8 }}
      />
      <p>{recipe.description}</p>
      <p><b>Filme:</b> {recipe.movie}</p>

      <section className="preparation">
        <h3>Modo de Preparo</h3>
        <ol>
          {recipe.preparation.map(function (step, index) {
            return <li key={index}>{step}</li>;
          })}
        </ol>
      </section>

      <button onClick={() => navigate(-1)}>Voltar</button>
    </main>
  );
}
