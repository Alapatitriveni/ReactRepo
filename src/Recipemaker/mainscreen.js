

import { useContext } from "react";


import NavBar1 from "./Navbar1";
import { RecipeContext } from "./RecipeMaker";
import "./fatchcard3.css";
import { Link, useNavigate } from "react-router-dom";

const MainScreen1 = () => {
  const { recipeList,addFavouriteDishHandler} = useContext(RecipeContext);
  const navigate=useNavigate();
  console.log(recipeList, "recipeLists");
  

  const addFoodHandler = (eachFood) =>{
        addFavouriteDishHandler(eachFood);
  };
  const goToFavouriteHandler = () =>{
    navigate("Favourite");

  }
  return (
    <>
      <NavBar1/>
      <div className="triveni5">
      <h4>Welcome to Main screen</h4>
      <div className="triveni1">
      {recipeList.length > 0 ? (
        recipeList.map((each) => (
          <div key={each.id} className="triveni2" >
            <h1>{each.id}</h1>
            <h4>{each.name}</h4>
            <img src={each.image} alt={each.name} width={200} height={200} />
            <p>{each.ingredients}</p>
            <button style={{backgroundColor:"green"}}>
            <Link to={`/${each.cuisine}/${each.id}`} style={{ color: "white", textDecoration: 'none' }}>See more</Link>
              </button><br/><br/>
            {
              each.existsInFavourites ?(
              <button onClick={goToFavouriteHandler}>
                Go To Favourites
                </button>
                ):(
                <button onClick={()=>addFoodHandler(each)} style={{backgroundColor:"red",color:"white"}}>
                  Add to Favourites
                </button>
            )}
            {/* <button onClick={()=>addFoodHandler(each)}>Add to Favourites</button> */}
          </div>
        ))
      ) : (
        <p>No recipes available</p>
      )}
      </div>
      </div>
    </>
  );
};

export default MainScreen1;
