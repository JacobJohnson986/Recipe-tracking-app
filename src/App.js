import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  const handleCreateRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const handleDeleteRecipe = (index) => {
    setRecipes(recipes.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <header>
        <h1 className="delicious-text">Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} onDelete={handleDeleteRecipe} />
      <RecipeCreate onCreate={handleCreateRecipe} />
    </div>
  );
}

export default App;
