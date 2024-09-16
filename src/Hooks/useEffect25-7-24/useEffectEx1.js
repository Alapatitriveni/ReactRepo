import { useEffect, useState } from "react";

const UseEffect=()=>{
    const [xposition,setXposition]=useState(0)
    const [yposition,setYposition]=useState(0)
    useEffect(()=>{
        window.addEventListener("mousemove",mouseTrack)
        return()=>{};
    
    },[]);
    const mouseTrack=(event)=>{
        setXposition(event.clientX);
        setYposition(event.clientY);
        console.log(event);

    }
    return (
        <>
        <h3>use effect example</h3>
        <h4>current moves position in x-axis  {xposition}</h4>
        <h4>current moves position in y-axis  {yposition}</h4>
        </>
    )
}
export default UseEffect;