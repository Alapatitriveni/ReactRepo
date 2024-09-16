import ProgressBar from "react-bootstrap/esm/ProgressBar";
import CustomAccordion from "../boostrap/accordion";  
import "./card.css";
import CustomProgressBar from "../boostrap/Progress-bar";
const Card=()=>{
    return(
        <div className="triveni">
            <center>
        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="bag" height={100} width={100}>
            
        </img>
        <p>hiii this a card</p>
        <button>sing up</button>
        </center>
        {/* <CustomProgressBar/>
        <CustomAccordion/>
      
        <CustomProgressBar/> */}
        </div>

    )
}
export default Card;