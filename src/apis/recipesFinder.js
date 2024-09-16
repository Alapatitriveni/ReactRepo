// import axios from "axios";
// import { useEffect, useState } from "react";

// const RecipesFinder = () => {
//     const [recipes, setRecipes] = useState([]);

//     useEffect(() => {
//         fetchData();
//     }, []);
    
//     const fetchData = async () => {
//         const { data } = await axios.get("https://dummyjson.com/recipes");
//         const revampData = data.recipes.map((eachRecipe) => ({
//             id: eachRecipe.id,
//             name: eachRecipe.name,
//         }));
//         console.log(revampData);
//         setRecipes(revampData);
//     };

//     const selectHandler = (event) => {
//         const selectedId = event.target.value;
//         console.log(selectedId); // Logs the selected recipe ID
//         // Optionally, find the selected recipe from the recipes array
//         const selectedRecipe = recipes.find(recipe => recipe.id.toString() === selectedId);
//         if (selectedRecipe) {
//             console.log("Selected Recipe:", selectedRecipe);
//         }
//     };

//     return (
//         <>
//             <h4>Welcome to Recipes</h4>
//             {recipes.length > 0 && (
//                 <select onChange={selectHandler}>
//                     {recipes.map((each) => (
//                         <option key={each.id} value={each.name}>
//                             {each.name}
//                         </option>
//                     ))}
//                 </select>
//             )}
//             {/* {
//                 <>
//                 <h4>{eachRecipe.id}</h4>
//                 <h4>{eachRecipe.name}</h4>
//                 </>
//             } */}
//         </>
//     );
// };

// export default RecipesFinder;




//==============================================================================================================================================
//====================================================================================================================================
import axios from "axios";
import { useEffect, useState } from "react";

const RecipeFinder = () => {
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        try {
            const { data } = await axios.get("https://dummyjson.com/recipes");
            const revampData = data.recipes.map((eachRecipe) => ({
                id: eachRecipe.id,
                name: eachRecipe.name
            }));
            setRecipes(revampData);
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    };

    const selectHandler = (event) => {
        const selectedRecipeId = event.target.value;
        fetchEachRecipe(selectedRecipeId);
    };

    const fetchEachRecipe = async (recipeId) => {
        try {
            const { data } = await axios.get(`https://dummyjson.com/recipes/${recipeId}`);
            setSelectedRecipe(data);
        } catch (error) {
            console.error("Error fetching recipe details:", error);
        }
    };

    return (
        <>
            <h4>Welcome to Recipes</h4>
            {recipes.length > 0 && (
                <select onChange={selectHandler} defaultValue="">
                    <option value="" disabled>Select a recipe</option>
                    {recipes.map((each) => (
                        <option key={each.id} value={each.id}>
                            {each.name}
                        </option>
                    ))}
                </select>
            )}
            {selectedRecipe && (
                <div>
                    <h4>Recipe Details:</h4>
                    <h4><strong>Name:</strong> {selectedRecipe.name}</h4>
                    <h4><strong>ID:</strong> {selectedRecipe.id}</h4>
                    {/* Add more details here if needed */}
                </div>
            )}
        </>
    );
};

export default RecipeFinder;

































