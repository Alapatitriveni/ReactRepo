import React, { useState } from "react";

const Weather=()=>{
    const [city,setCity]=useState("");
    const [result,setResult]=useState("");
    const changeHandler = e =>{
        setCity(e.target.value);
    }
    const submitHandler = e =>{
        e.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=80910612dcf7b8881a64531ad282247c`).then(
        response=>response.json()
    ).then(data => {
        const kelvin = data.main.temp;
        const celsius = kelvin -273.15
        setResult("Temperature at"+" "+city+"\n"+Math.round(celsius)+"C");
        setCity("");
    }).catch(error =>console.log(error)
    );
    
        
    }
    return(
        <>
        <center>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Weather App</h4>
                    <form  onSubmit={submitHandler }>
                        <input type="text" name="city" value={city} onChange={ changeHandler}/><br/><br/>
                        <input type="submit" value="Get Temperature"/>
                    </form>
                    <h1>{result}</h1>
                </div>
            </div>
        </center>
        </>
    )
}
export default Weather;