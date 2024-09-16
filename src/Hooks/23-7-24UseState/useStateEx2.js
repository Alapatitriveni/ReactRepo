import { useState } from "react";

const UseStateExample2=()=>{
    const [period,todo]=useState([
        {
            period:"Morning",
            todo:"woke up at 8pm",
    },
    {
        period:"Morning",
        todo:"woke up at 8pm", 
    },
])
const TodoHandler=()=>{
    console.log(todo);
}
return(
    <>
    <h4>use state example2</h4>
    <button onClick={TodoHandler}>Add Todo</button>
    </>
);
};
export default UseStateExample2;