// //===========================using functional based components=============================================

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// //import './CardDisplay.css'; // Import CSS file for styling
// import "./fatch.css";

// const CardDisplay = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('https://dummyjson.com/recipes'); // Example API endpoint
//                 setData(response.data.recipes); // Adjust according to the API response structure
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div className="card-container">
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 data.map((item) => (
//                     <div className="card" key={item.id}>
//                        {/* <img src={item.image} alt={item.title} width="250px"/> */}
//                         <div className="card-body">
//                             <center>
//                             <h3 className="card-name">{item.name}</h3>

//                             <img src={item.image} alt={item.title} width="250px"/>
                            
//                             <p className="card-ingredients">{item.ingredients}</p>
//                             <button>See more</button>
//                             </center>
//                             {/* <h4 className="card-instructions">{item.instructions}</h4> */}
//                         </div>
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// };

// export default CardDisplay;
//==============================================using Classbased components=======================================================================
// import React, { Component } from 'react';
// import axios from 'axios';
// import './fatch.css'; // Import CSS file for styling

// class CardDisplay extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: [],
//             loading: true,
//         };
//     }

//     componentDidMount() {
//         // Fetch data when the component mounts
//         axios.get('https://dummyjson.com/recipes') // Example API endpoint
//             .then(response => {
//                 this.setState({
//                     data: response.data.recipes, // Adjust according to the API response structure
//                     loading: false,
//                 });
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//                 this.setState({ loading: false });
//             });
//     }

//     render() {
//         const { data, loading } = this.state;

//         return (
//             <div className="card-container">
//                 {loading ? (
//                     <p>Loading...</p>
//                 ) : (
//                     data.map((item) => (
//                         <div className="card" key={item.id}>
//                             <img src={item.image} alt={item.title} width="250px" />
//                             <div className="card-body">
//                                 <h3 className="card-name">{item.name}</h3>
//                                 <p className="card-ingredients">{item.ingredients}</p>
//                                 <h4 className="card-instructions">{item.instructions}</h4>
//                             </div>
//                         </div>
//                     ))
//                 )}
//             </div>
//         );
//     }
// }

// export default CardDisplay;
//=============================================================================================================
