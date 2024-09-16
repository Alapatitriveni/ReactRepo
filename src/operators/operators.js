import React from "react";

const ConditionalRendering=(prop)=>{

const {triveni}=prop;

return(

<>

{triveni.length==0? (<h1> The given array length is 0</h1>): (<h1> array length is  { `${triveni.length}`} </h1>)}

</>

);

};

 export default ConditionalRendering;