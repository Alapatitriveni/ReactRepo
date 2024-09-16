import { useState } from "react";

function DishListing(){
    const [rasagullaprice,setRasagullaPrice]=useState(100);
    const [literDrink,setLiterDrink]=useState(100);
    const[briyaniItems,setBiryaniItemprice]=useState(200);
    const priceInSweetShop=()=>{
        return rasagullaprice+literDrink
    };
    const priceInStore=()=>{
        return briyaniItemsprice;
    };
    const rasagullaHandler=()=>{
        setLiterDrink(literDrink+5);
    }
    return(
        <div>
            <h3>1kg rasagulla price</h3>
            <button/>
            <h3>1liter Drink price</h3>
            <h1>total  price in Sweet Shop</h1>
            <h3>1kg rasagulla price</h3>
        </div>
    );
    }
    export default DishListing
