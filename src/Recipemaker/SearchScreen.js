import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import NavBar1 from "./Navbar1";

const Search = () => {
  const [recipeList, setRecipeList] = useState([]);
  const [search, setSearch] = useState('');
  const [filters, setFilter] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const { status, data } = await axios.get("https://dummyjson.com/recipes");
      if (status === 200) {
        setRecipeList(data.recipes);
        setFilter(data.recipes); // Initialize filter with all recipes
      }
    } catch (err) {
      console.error("Error fetching recipes:", err);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filteredRecipes = recipeList.filter(recipe =>
      recipe.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilter(filteredRecipes);
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
    },
    searchInput: {
      padding: '10px',
      marginBottom: '20px',
      width: '300px',
      fontSize: '16px',
    },
    recipeList: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      width: '100%',
    },
    recipeCard: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      margin: '10px',
      padding: '20px',
      maxWidth: '300px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    recipeImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
    },
    recipeDetails: {
      marginTop: '10px',
    },
    recipeButton: {
      marginTop: '10px',
      padding: '10px 15px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      textDecoration: 'none',
    },
  };

  return (
    <>
    <NavBar1/>
    <div style={styles.container}>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search recipes..."
        style={styles.searchInput}
      />
      <div style={styles.recipeList}>
        {filters.length > 0 ? (
          filters.map((recipe) => (
            <div key={recipe.id} style={styles.recipeCard}>
              <h4>{recipe.id}</h4>
              <h4>{recipe.name}</h4>
              <h4>{recipe.cuisine}</h4>
              <img src={recipe.image} style={styles.recipeImage} alt={recipe.name} />
              <div style={styles.recipeDetails}>
                <h4>Rating: {recipe.rating}</h4>
                <button style={styles.recipeButton}>
                  
        <Link to={`/${recipe.cuisine}/${recipe.id}`} style={{ color: '#fff', textDecoration: 'none' }}>See more</Link>
        
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No recipes found</p>
        )}
      </div>
    </div>
    </>
  );
};

export default Search;