import React, { useState } from "react";

function RecipeCreate({ onCreate }) { // Parameter is the onCreate useState;

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  // useState for the recipe and the empty string values stored in the correct keys;
  const [formErrors, setFormErrors] = useState({}); // useState for error handling;
  const validateForm = () => { // Check for errors on form;
    const errors = {};
  
    // Validate name
    if (!recipe.name.trim()) {
      errors.name = "Name is required";
    }
  
    // Validate cuisine;
    if (!recipe.cuisine.trim()) {
      errors.cuisine = "Cuisine is required";
    }
  
    // Validate photo URL;
    if (!recipe.photo.trim()) {
      errors.photo = "Photo URL is required";
    } else if (!recipe.photo.startsWith("http")) {
      errors.photo = "Invalid URL format";
    }
  
    // Validate ingredients;
    if (!recipe.ingredients.trim()) {
      errors.ingredients = "Ingredients are required";
    }
  
    // Validate preparation;
    if (!recipe.preparation.trim()) {
      errors.preparation = "Preparation is required";
    }
  
    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if there are no errors;
  };
  
  const [recipe, setRecipe] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });

  // Change handler taking in the previous recipe;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe((prevRecipe) => ({ ...prevRecipe, [name]: value }));
  };

  // Submit handler when creating a new recipe;
  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Validate form;
    if (validateForm()) {
      onCreate(recipe);
      setRecipe({
        name: "",
        cuisine: "",
        photo: "",
        ingredients: "",
        preparation: "",
      });
      setFormErrors({});
    }
  };
  

  return (
    <form name="create" className="form-background" onSubmit={handleSubmit}>
    <label htmlFor="name">Name:</label>
    <input
      type="text"
      id="name"
      name="name"
      value={recipe.name}
      onChange={handleChange}
      required
    />
    {formErrors.name && <p className="error">{formErrors.name}</p>}

    <label htmlFor="cuisine">Cuisine:</label>
    <input
      type="text"
      id="cuisine"
      name="cuisine"
      value={recipe.cuisine}
      onChange={handleChange}
      required
    />
    {formErrors.cuisine && <p className="error">{formErrors.cuisine}</p>}

    <label htmlFor="photo">Photo URL:</label>
    <input
      type="url"
      id="photo"
      name="photo"
      value={recipe.photo}
      onChange={handleChange}
      required
    />
    {formErrors.photo && <p className="error">{formErrors.photo}</p>}

    <label htmlFor="ingredients">Ingredients:</label>
    <textarea
      id="ingredients"
      name="ingredients"
      value={recipe.ingredients}
      onChange={handleChange}
      required
    ></textarea>
    {formErrors.ingredients && <p className="error">{formErrors.ingredients}</p>}

    <label htmlFor="preparation">Preparation:</label>
    <textarea
      id="preparation"
      name="preparation"
      value={recipe.preparation}
      onChange={handleChange}
      required
    ></textarea>
    {formErrors.preparation && <p className="error">{formErrors.preparation}</p>}

      <button type="submit">Create</button>
    </form>
  );
}

export default RecipeCreate;