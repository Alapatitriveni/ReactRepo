import { Component } from "react";
import CustomProgressBar from "../boostrap/Progress-bar";
import "./fatch.css"
class FetchFackStore extends Component{
    state={
        products:[],
        loader:true,
        error:false

    }
    fetchproducts=()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((data)=>this.setState({products:data,loader:false}))
   
    }
    Calucalator=(input)=>{
        const base=1000
        let percentage=(input/base)*100
        return percentage;
    }
      
    render(){
        return(
            <>
            <button onClick={this.fetchproducts}>fetchdata</button>
            <card className="tri">
            {this.state.loader?(<h2>Please wait....</h2>):(<>
            {this.state.products.map((each)=>{
             return(
                <>
                 <center>
                <div className="triveni">
                
                <div>id:{each.id}</div>
                <div>title:{each.title}</div>
                <div>price:{each.price}</div>
                <div>description:{each.description}</div>
               
                <div>category:{each.category}</div>
                
                <div>
                    <img src={each.image} width={200} height={200}/>
                </div>
                {/* {console.log(each.rating,"rate")} */}
                 <div>rate:{each.rating.rate}
                 {/* <BasicProgress scale = {this.Calucalator(each.rating.rate) }></BasicProgress> */}
                 </div>
                 <div>count:{each.rating.count}
                 <CustomProgressBar scale = {this.Calucalator(each.rating.count) }></CustomProgressBar>
                 </div>
                </div>
                </center>
                               </>
                               
             )
            })}

            </>)}
            </card>
            </>
        )
    }
}
        
        
            
   
export default FetchFackStore;