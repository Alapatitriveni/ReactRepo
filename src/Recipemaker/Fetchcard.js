import axios from "axios";
import { useEffect, useState } from "react";
// import "./fatchcard1.css";

const Recipemaker = () => {
    const [recipeList, setRecipeList] = useState([]);

    useEffect(() => {
        FetchData(); 
    }, []);

    const FetchData = async () => {
        try {
            const { data } = await axios.get("https://dummyjson.com/recipes");
            setRecipeList(data.recipes || []); // Ensure the state is set correctly with recipes or an empty array
        } catch (error) {
            console.error("Error fetching recipes:", error);
            setRecipeList([]); // Set to an empty array in case of an error
        }
    };

    return (
        <></>
    );
};

export default Recipemaker;



//==========================================================================================================================================
// import axios from "axios"
// import { useEffect, useState } from "react";

// const Recipemaker=()=>{
//     const [recipeList,setRecipeList]=useState([]);
//     useEffect(()=>{
//         FetchData();

//     },[])
//     const FetchData=async()=>{
//         const {data}=await axios.get("https://dummyjson.com/recipes")
//         setRecipeList();
         
//         console.log(data)  
//      }
//     return(
//         <>
//        {
//         recipeList && recipeList.recipes && recipeList.recipes.length>0 &&
//         recipeList.recipes.map(each=>{
//             return(
//             <div>

//             <h3>{each.id}</h3>
//                   <h4>{each.name}</h4>
//                <img src={each.image} width={200} height={200}></img>
//             </div>

//             )
//         })
//        }
//         </>
//     );
// }
// export default Recipemaker;