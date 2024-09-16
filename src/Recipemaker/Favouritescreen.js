 import React, { useContext } from 'react'
import NavBar1 from './Navbar1';
import { RecipeContext } from './RecipeMaker';
import "./fatchcard3.css";
 
 function FavouriteScreen() {
  const{favouriteDish,removeFromFavourite}=useContext(RecipeContext);
  const removeHandler =(eachFood) =>{
    removeFromFavourite(eachFood.id);
  };
   return (
    <>
    <NavBar1/>
    <center>
    <h3>Welcome to FavouritesScreen</h3>
    </center>
    {
      favouriteDish.length>0 ? <>
      {
        favouriteDish.map(each=>{
          return(
           
            <>
           <center>
            <div key={each.id} className="triveni2" >
            <h1>{each.id}</h1>
            <h4>{each.name}</h4>
            <img src={each.image} alt={each.name} width={200} height={200} />
            <p>{each.ingredients}</p>
            <button onClick={()=>removeHandler(each)}>Remove recipe</button>
           
          </div>
          </center>
            </>
          )
        })
      }
      
      </>:<center><h1>No dish found </h1></center>
    }
    </>
   )
 }
 
 export default FavouriteScreen;