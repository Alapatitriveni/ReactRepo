
import { Link,NavLink }  from "react-router-dom";
import "./navbar.css";
const NavBar = () => {
    const  linkStyle = {margin:10,TextDecoder:"none"}
    return(
        <>
  <nav className="navbar navbar-expand-sm bg-light navbar-light">
    <div className="container-fluid">
      <ul className="navbar-nav">
      <li className="nav-item">
         <NavLink  to ={"/Screen"}style={linkStyle}>HomeScreen</NavLink >
        </li>
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
          <NavLink  to={"/Menu"} style={linkStyle}>Menu</NavLink >
        </li>
        <li className="nav-item">
          <NavLink  to={"/Location"}style={linkStyle}>Location</NavLink >
        </li>
        <li className="nav-item">
         <NavLink  to ={"/DrowpDown"}style={linkStyle}>singleItem</NavLink >
        </li>
        <li className="nav-item">
         <NavLink  to ={"/About"}style={linkStyle}>About</NavLink >
        </li>
      </ul>
    </div>
  </nav>
  {/* Black background with white text */}
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">...</nav>
  {/* Blue background with white text */}
  <nav className="navbar navbar-expand-sm bg-primary navbar-dark">...</nav>
</>


    );
}
export default NavBar;