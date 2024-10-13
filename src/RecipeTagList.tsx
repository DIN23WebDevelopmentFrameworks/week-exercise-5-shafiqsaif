import React from 'react';
import RecipeTag from './RecipeTag';

const RecipeTagList = ({ tagList, onSelectTag }) => {
  return (
    <div>
      {tagList.map((tag) => (
        <RecipeTag key={tag} tagName={tag} onSelectTag={onSelectTag} />
      ))}
    </div>
  );
};

export default RecipeTagList;
