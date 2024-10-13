import React from 'react';
import Recipe from './Recipe';

const RecipeList = ({ recipes, onBackClick }) => {
  return (
    <div>
      <button onClick={onBackClick}>Back to Tags</button>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipeData={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
