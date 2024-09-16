import React, { useState, useEffect } from 'react';
import './RecipeManager.css'; // Import CSS file for styling

const RecipeManager = () => {
    const [recipes, setRecipes] = useState([]);
    const [newRecipe, setNewRecipe] = useState({
        name: '',
        ingredients: '',
        instructions: ''
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = () => {
        fetch('https://dummyjson.com/recipes') // Example API endpoint
            .then(response => response.json())
            .then(data => {
                setRecipes(data.recipes); // Adjust according to the API response structure
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewRecipe({
            ...newRecipe,
            [name]: value
        });
    };

    const handleAddRecipe = () => {
        const { name, ingredients, instructions } = newRecipe;
        if (name && ingredients && instructions) {
            const newRecipeEntry = {
                id: Date.now(), // Generate a unique ID
                name,
                ingredients,
                instructions
            };
            setRecipes([...recipes, newRecipeEntry]);
            setNewRecipe({ name: '', ingredients: '' });
        }
    };

    const handleDeleteRecipe = (id) => {
        setRecipes(recipes.filter(recipe => recipe.id !== id));
    };

    const handleDeleteAll = () => {
        setRecipes([]);
    };

    return (
        <div className="recipe-manager">
            <div className="form">
                <h2>Add Recipe</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Recipe Name"
                    value={newRecipe.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="ingredients"
                    placeholder="Ingredients"
                    value={newRecipe.ingredients}
                    onChange={handleChange}
                />
                {/* <input
                    type="text"
                    name="instructions"
                    placeholder="Instructions"
                    value={newRecipe.instructions}
                    onChange={handleChange}
                /> */}
                <button onClick={handleAddRecipe}>Add Recipe</button>
            </div>

            <button onClick={handleDeleteAll} className="delete-all">Delete All Recipes</button>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="recipe-table">
                    <h2>Recipes</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Ingredients</th>
                                {/* <th>Instructions</th> */}
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recipes.map(recipe => (
                                <tr key={recipe.id}>
                                    <td>{recipe.name}</td>
                                    <td>{recipe.ingredients}</td>
                                    {/* <td>{recipe.instructions}</td> */}
                                    <td>
                                        <button onClick={() => handleDeleteRecipe(recipe.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default RecipeManager;
