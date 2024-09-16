import NavBar from "../navbar/navbar"
import withProfileData from "./hocEx1"


const Screen =(props)=>{
    const {name}=props.data;
    console.log(props);
    
    
    
    return(
        <>
        <NavBar/>
        <h3>Welcome to about screen   </h3>
        {
            Object.keys(props.data).length>0?(
<h3>Good morning{JSON.stringify(props.data.username)}</h3>
            ):(
                <h3>Good morning user</h3>
            )
        }
        </>
    )
}
export default withProfileData(Screen);