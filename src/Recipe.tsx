import React from 'react';

const Recipe = ({ recipeData }) => {
  return (
    <div>
      <h2>{recipeData.name}</h2>
      <p>Ingredients: {recipeData.ingredients.join(', ')}</p>
      <p>Instructions: {recipeData.instructions.join('. ')}</p>
    </div>
  );
};

export default Recipe;
