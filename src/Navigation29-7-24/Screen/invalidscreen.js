import NavBar from "../../component/navbar/navbar";


const  InvalidScreen = ()=>{
    return(
        <>
         <NavBar/>
        <h3>Welcome to invalidScreen</h3>
        <button>
            <Link to={"/"}>Go to HomeScreen</Link>
        </button>
        </>
    )
}
export default InvalidScreen;