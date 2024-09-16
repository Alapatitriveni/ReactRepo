import { Component } from "react";

class Button extends Component{
    state={
       name:"Welcome to subscribe",
       click:false,
       text1:"click Me",
       text2:"clicked"
    }
    adding(){
        this.setState({
            click: !this.state.click
        })
    }
    render(){
        return(
            <>
            {
                this.state.click ? <h1>{this.state.name}</h1> :  <h1>please  subscribe</h1>
            }
                <button onClick={()=>this.adding()}>
                    {!this.state.click ? this.state.text1:this.state.text2}
                    </button>:<button onClick={()=>this.adding()}>submit</button>
            </>
        )
    }
}
export default Button;