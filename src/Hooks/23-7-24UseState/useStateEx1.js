// import React from "react";
import {useState} from "react";

const UseStateExample1=()=>{
    const [login,setLogin]=useState(false);
    const loginHandler= () =>{
        setLogin((login)=>!login);
        // setLogin(!login);
        // setLogin(!login);

    };
    // const  incrementHandler=()=>{
    //     setInterval(()=>{
    //         setCount((count)=>count+1);
    //     },1000);
    // };
return(
    <>
    <h4>Use state example</h4>
    {login?<h4>Wellcome user</h4>:<h4>please  login</h4>}
         <button onClick={loginHandler}>Click me</button>
        <br></br><br></br> <button onClick={loginHandler}>Click me</button>
   
    
    </>
)
}
export default UseStateExample1;