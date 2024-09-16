import CustomProgressBar from '../boostrap/Progress-bar'
import './heading.css'
import './Heading2.css'


    const Calucalator=(input)=>{
        const base=30
        let percentage=(input/base)*100
        return percentage;
    }
const Heading1=()=>{
    return (
    <div className='Heading1'>
        <h3 > home</h3>
        <h3> title</h3>
        <h3>logo</h3>
        <h3>Tropfies</h3>
    </div>)
};
 export const Heading2=(props)=>{
    const {Tropfy}=props
    return (
    <div >
        <h5> No of Tropfies:{Tropfy}</h5>
        <CustomProgressBar scale = {Calucalator(Tropfy) }></CustomProgressBar>
        
    </div>)
};
 export const Heading3=(props)=>{
    const {Title}=props
    return (
    <div>
        <h1>Title: {Title}</h1>
    </div>)
};
export default Heading1;
export const Heading=()=>{
return (
    <center>
    <div className='Heading'>
       <h3 > powered by IPL Team</h3>
    
    </div>
    </center>)
}