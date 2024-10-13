
/*const App = () => {


  return (
    <div>
        <h1>ACME Recipe O'Master</h1>
        <div>Remove this and implement recipe tag list here. </div>
        <ul>
        <li>On start the application displays a list of recipe tags such as 'pasta', 'cookies' etc. The tag information is loaded from an API (https://dummyjson.com/recipes/tags)</li>
        <li> The user can click on a tag and the application will then hide the tag list and display a list of recipes matching the selected tag. The recipe information for the clicked tag is loaded from an API (https://dummyjson.com/recipes/tag/Pizza).</li>
        <li> User can also go back to the tag list. </li>
        <li> Each receipe is displayed as box where recipe data such as ingredients and instructions are displayed</li>
        </ul>
    </div>
  );
};

export default App;*/

import React, { useState, useEffect } from 'react';
import RecipeTagList from './RecipeTagList';
import RecipeList from './RecipeList';

const App = () => {
  const [tags, setTags] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes/tags')
      .then((response) => response.json())
      .then((data) => setTags(data));
  }, []);

  const handleTagClick = (tagName) => {
    fetch(`https://dummyjson.com/recipes/tag/${tagName}`)
      .then((response) => response.json())
      .then((data) => setRecipes(data.recipes));
    setSelectedTag(tagName);
  };

  const handleBackClick = () => {
    setSelectedTag(null);
    setRecipes([]);
  };

  return (
    <div>
      <h1>ACME Recipe O'Master</h1>
      {selectedTag ? (
        <RecipeList recipes={recipes} onBackClick={handleBackClick} />
      ) : (
        <RecipeTagList tagList={tags} onSelectTag={handleTagClick} />
      )}
    </div>
  );
};

export default App;

