import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import MainScreen1 from "./mainscreen";
import RegistrationFrom from "./registration";
import LoginForm from "./Loginfile";
import FavouriteScreen from "./Favouritescreen";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Search from "./SearchScreen";
import Details from "./RecipeDetail";
import Location from "./Location";


export const RecipeContext = createContext();

const Recipemaker1 = () => {
  const [recipeList, setRecipeList] = useState([]);
  const[favouriteDish,setFavouriteDish]=useState([]);
  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    try {
      const { data, status } = await axios.get("https://dummyjson.com/recipes");
      const newData=data.recipes.map(EachData=>{
        return{...EachData,existsInFavourites:false};
      });
      console.log(newData,"newData");
      
      if (status === 200) {
        console.log(data);
        setRecipeList(newData);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const addFavouriteDishHandler = (newDish) =>{
  const recipeExists=favouriteDish.find(
    eachFood=>eachFood.id==newDish.id
  );
  const newRecipeList=recipeList.map(eachRecipe=>{
    if(eachRecipe.id==newDish.id){
      return{...eachRecipe,existsInFavourites:true}
    }else{
      return eachRecipe
    }
  })
  setRecipeList(newRecipeList);
    if(recipeExists){
      toast.error("Already exists");
      // alert("Already exists");
    }else{
      setFavouriteDish([...favouriteDish,newDish]);
      toast.success("Add");

    }
    
  };
const removeFromFavourite=(id)=>{
  const newRecipeList=recipeList.map(eachRecipe=>{
    if(eachRecipe.id==id){
      return{...eachRecipe,existsInFavourites:false}
    }else{
      return eachRecipe
    }
  })
  setRecipeList(newRecipeList);
    const newFavouriteList=favouriteDish.filter((eachDish)=>eachDish.id !=id
);
setFavouriteDish(newFavouriteList);
}
  return (
    <RecipeContext.Provider value={{ recipeList,favouriteDish,addFavouriteDishHandler,removeFromFavourite }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen1/>} />
          <Route path="Registration" element={<RegistrationFrom />} />
          <Route path="Login" element={<LoginForm/>} />
          <Route path="Search" element={<Search/>}/>
          <Route path="Favourite" element={<FavouriteScreen />} />
          <Route path="/:cuisine/:RecipiId" element={<Details/>} />
          <Route path="Location" element={<Location/>}/>
          <Route path="/Details" element={<Details/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </RecipeContext.Provider>
  );
};

export default Recipemaker1;
