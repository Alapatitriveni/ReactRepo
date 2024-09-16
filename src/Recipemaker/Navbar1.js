
import { useContext } from "react";
import { Link,NavLink }  from "react-router-dom";
import { RecipeContext } from "./RecipeMaker";
// import "./navbar.css";
const NavBar1 = () => {
    const  linkStyle = {margin:65,TextDecoder:"none",TextDecoder:"none",backgroundColour:"black"}
    const {favouriteDish}=useContext(RecipeContext)
    return(
        <>
  <nav className="navbar navbar-expand-sm bg-light navbar-light">
    <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item">
         <NavLink  to={"/ "}style={linkStyle}>Main</NavLink >
        </li>
        <li className="nav-item">
          <NavLink  to ={"/Registration"} style={linkStyle}>Registration</NavLink >
        </li>
        <li className="nav-item">
          <NavLink  to={"/Login"}style={linkStyle}>Login</NavLink >
        </li>
        <li className="nav-item">
          <NavLink  to={"/Search"} style={linkStyle}>Search</NavLink >
        </li>
        <li className="nav-item">
          <NavLink  to={"/Favourite"} style={linkStyle}>Favourites{favouriteDish.length}</NavLink >
        </li>
        <li className="nav-item">
         <NavLink  to ={"/Location"}style={linkStyle}>Location</NavLink >
        </li>
        <li className="nav-item">
         <NavLink  to ={"/Details"}style={linkStyle}>Details</NavLink >
        </li>
      </ul>
    </div>
  </nav>
  {/* Black background with white text */}
  {/* <nav className="navbar navbar-expand-sm bg-dark navbar-dark">...</nav>
  {/* Blue background with white text */}
  {/* <nav className="navbar navbar-expand-sm bg-primary navbar-dark">...</nav>  */}
</>


    );
}
export default NavBar1;