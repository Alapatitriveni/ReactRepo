import "./Genaral prop ipl";

import "./ipl.css";
  const IplData=(props)=>{
    const {name,Captain,Button,source,w=200,h=200}=props;
    return(
         <div>
            <center>
              <h2>{name}</h2> 
           <img
        src={source}
        width={w}
        heigth={h}
        ></img>
         <h4>{Captain}</h4>
     <button>{Button}</button></center> 
    
     </div>

        
    )
}
export default IplData;