import logo from './logo.svg';
import './App.css';
import Table from './component/table';
import CostamImage from './component/image/costmimage';
import Card from './component/Card/card1';
import Button from './component/prop/button';
import Image from './component/prop/image';
import Heading1, { Heading2, Heading3 } from './component/heading';
import IplData from './component/prop/Genaral prop ipl';
import Greeting from './component/Greeting/Greeting';
// const students=["triveni","triveni","maha"];
function App() {
  return (
    <div className="App">
      { /*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/ }
      {/* <Table></Table> */}
     {/* <CostamImage></CostamImage> */}
     {/* <Card></Card> */}
     {/* <Card></Card> */}
     {/* <Button word="Submit" w="100" h="100" bgcolor="blue"/>
     <Button word="Register" w="1000" h="1000" bgcolor="blue"/> */}
     {/* <Image source="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alternate="bag" w="100" h="100"></Image>
     <Image source="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alternate="bag" w="200" h="200"></Image>
     <Image source="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alternate="bag" w="300" h="300"></Image>
      */}
      {/* <Heading1></Heading1>
      <Heading2></Heading2>
      <Heading3></Heading3> */}
      <IplData>
        <img src="https://documents.iplt20.com/ipl/RCB/Logos/Logooutline/RCBoutline.png" alternate="RCB" w="200" h="200"></img>
      </IplData>
      {/* {
        students.map((eachStudent)=>(
        <Greeting>
          <h4>good moring{eachStudent}</h4>
          <h4>good moring</h4>
        </Greeting>
        ))
      } */}

      <h1>Hello world</h1>
    </div>
   
  );
}

export default App;

// const Card=()=>{
//   return(
//     <>
//     <h4>Good Moring</h4>
//     <h4>good moring{eachStudent}</h4>
//     <h4>good moring{eachStudent}</h4>

//     </>
//   );
// };
