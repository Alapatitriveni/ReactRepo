


import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "../../component/navbar/navbar";

const Recipis = () => {
  const [recipeList, setRecipeList] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const { status, data } = await axios.get("https://dummyjson.com/recipes");
      if (status === 200) {
        setRecipeList(data.recipes);
      }
    } catch (err) {
      console.error("Error fetching recipes:", err);
    }
  };

  const handleSelectChange = (e) => {
    const selectedId = e.target.value;
    const recipe = recipeList.find((recipe) => recipe.id.toString() === selectedId);
    setSelectedRecipe(recipe);
  };

  return (
    <>
      <NavBar />
      <h2>Recipes List</h2>
      <label htmlFor="recipe">Select a recipe by ID:</label>
      <select name="recipeSelect" onChange={handleSelectChange} defaultValue="">
        <option value="" disabled>Select the name</option>
        {recipeList.map((recipe) => (
          <>
          <option key={recipe.id} value={recipe.id}>
            {recipe.name}
          </option>
          </>
        ))}
      </select>

      {selectedRecipe && (
        <div>
          <h4>{selectedRecipe.id}</h4>
          <h4>{selectedRecipe.name}</h4>
          <h4>{selectedRecipe.cuisine}</h4>
          <img src={selectedRecipe.image} height={300} width={300} alt={selectedRecipe.name} />
          <h4>Rating: {selectedRecipe.rating}</h4>
          <button>
            <Link to={`/recipe/${selectedRecipe.id}`}>See more</Link>
          </button>
        </div>
      )}
    </>
  );
};

export default Recipis;





























