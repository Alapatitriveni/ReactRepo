import { Component } from "react";

class Counter extends Component{
    state={
        count:10
    };
    inscrement_handler=()=>{
        this.setState(
            {
                count:this.state.count+1,
            },()=>{}
        );
    };
    decrement_handler=()=>{
        
        this.setState(
            {
                count:this.state.count-1,
            },()=>{}
        );
    };
    reset_handler=()=>{
        this.setState(
            {
                count:0
            }
        )
    }
    render(){
        return(
            <>
            <center>
            <div style={{width:500,height:300 ,border:"2px solid black",borderRadius:"5px",backgroundColor:"yellow"}}>
           <h2>My counter </h2>
           <br/>
           
           <h3>{this.state.count}</h3>
           <br></br><br></br>
           <button onClick={this.inscrement_handler}style={{ borderRadius:"5px"}}>Inscrement</button>
           <button onClick={this.decrement_handler} style={{borderRadius:"5px"}}>Decrement</button><br></br><br></br>
           <button onClick={this.reset_handler} style={{borderRadius:"5px"}}>Reset</button>
           </div>
           </center>
            </>
        )
    }
}
export default Counter;