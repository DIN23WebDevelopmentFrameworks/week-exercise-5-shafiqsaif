import React from 'react';

const RecipeTag = ({ tagName, onSelectTag }) => {
  return (
    <button onClick={() => onSelectTag(tagName)}>
      {tagName}
    </button>
  );
};

export default RecipeTag;
