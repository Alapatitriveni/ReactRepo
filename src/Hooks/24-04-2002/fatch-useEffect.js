//_______________________________________with bootstrap__________________________________________________________
// import { useEffect, useState } from "react";
// import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Table3 = () => {
//     const [table, setTable] = useState([]);
//     const [loader, setLoader] = useState(true);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const { status, data } = await axios.get("https://fakestoreapi.com/products");
//                 if (status === 200) {
//                     setTable(data);
//                     setLoader(false);
//                     console.log(data);
//                 }
//             } catch (err) {
//                 console.log(err);
//             }
//         };
//         fetchData();
//     }, []);

//     return (
//         <div className="container mt-5">
//             {loader ? (
//                 <p>Loading...</p>
//             ) : (
//                 <table className="table table-bordered table-hover">
//                     <thead className="thead-light">
//                         <tr>
//                             <th>ID</th>
//                             <th>Title</th>
//                             <th>Price</th>
//                             <th>Description</th>
//                             <th>Category</th>
//                             <th>Image</th>
//                             {/* <th>Rating</th> */}
//                             <th>Rate</th>
//                             <th>Count</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {table.map((each) => (
//                             <tr key={each.id}>
//                                 <td>{each.id}</td>
//                                 <td>{each.title}</td>
//                                 <td>{each.price}</td>
//                                 <td>{each.description}</td>
//                                 <td>{each.category}</td>
//                                 <td>
//                                     <img src={each.image} alt={each.title} width="50" />
//                                 </td>
//                                 <td>{each.rating.rate}</td>
//                                 <td>{each.rating.count}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// }

// export default Table3;


// //_____________________________________________without bootstrap_________________________________________________

// import { useEffect, useState } from "react";
// import axios from "axios";

// const Table3 = () => {
//     const [table, setTable] = useState([]);
//     const [loader, setLoader] = useState(true);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const { status, data } = await axios.get("https://dummyjson.com/recipes");
//                 if (status === 200) {
//                     setTable(data);
//                     setLoader(false);
//                     console.log(data);
//                 }
//             } catch (err) {
//                 console.log(err);
//             }
//         }
//         fetchData();
//     }, []);

//     const tableStyle = {
//         borderCollapse: 'collapse',
//         width: '100%',
//     };

//     const thTdStyle = {
//         border: '1px solid black',
//         padding: '8px',
//         textAlign: 'left',
//     };

//     const thStyle = {
//         backgroundColor: '#f2f2f2',
//     };

//     return (
//         <>
//             {loader ? (
//                 <p>Loading...</p>
//             ) : (
//                 <table style={tableStyle}>
//                     <thead>
//                         <tr>
//                             <th style={{ ...thTdStyle, ...thStyle }}>ID</th>
//                             <th style={{ ...thTdStyle, ...thStyle }}>name</th>
//                             <th style={{ ...thTdStyle, ...thStyle }}>ingredients</th>
//                             <th style={{ ...thTdStyle, ...thStyle }}>instructions</th>
//                             <th style={{ ...thTdStyle, ...thStyle }}>prepTimeMinutes</th>
//                             <th style={{ ...thTdStyle, ...thStyle }}>cookTimeMinutes</th>
//                             {/* <th style={{ ...thTdStyle, ...thStyle }}>rating</th> */}
//                             <th style={{ ...thTdStyle, ...thStyle }}>servings</th>
//                             <th style={{ ...thTdStyle, ...thStyle }}>difficulty</th>

//                         </tr>
//                     </thead>
//                     <tbody>
//                         {table.map((each) => {
//                             return (
//                                 <tr key={each.id}>
//                                     <td style={thTdStyle}>{each.id}</td>
//                                     <td style={thTdStyle}>{each.title}</td>
//                                    <td style={thTdStyle}>{each.price}</td>
//                                     <td style={thTdStyle}>{each.instructions}</td>
//                                     <td style={thTdStyle}>{each.prepTimeMinutes}</td>
//                                     <td style={thTdStyle}> {each.cookTimeMinutes}</td>
//                                     {/* <td style={thTdStyle}>{each.rating}</td> */}
//                                      <td style={thTdStyle}>{each.servings}</td>
//                                     <td style={thTdStyle}>{each.difficulty}</td>  
//                                 </tr>
//                             );
//                         })}
//                     </tbody>
//                 </table>
//             )}
//         </>
//     );
// }

// export default Table3;
//___________________________________________________________________________________________________________________
import { useEffect, useState } from "react";
import axios from "axios";
import "./fatch.css";

const Table3 = () => {
    const [list, setTable] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { status, data } = await axios.get("https://dummyjson.com/recipes");
                if (status === 200) {
                    setTable(data.recipes);
                    setLoader(false);
                    console.log(data);
                }
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    return (
        <>
        <div>
            {loader ? (
                <p>Loading...</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Ingredients</th>
                            <th>Instructions</th>
                            <th>Prep Time (Minutes)</th>
                            <th>Cook Time (Minutes)</th>
                            <th>Servings</th>
                            <th>Difficulty</th>
                            <th>image</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        list.map((each) => {
                            return (
                                <tr key={each.id}>
                                    <td>{each.id}</td>
                                    <td>{each.name}</td>
                                    <td>{each.ingredients}</td>
                                    <td>{each.instructions}</td>
                                    <td>{each.prepTimeMinutes}</td>
                                    <td>{each.cookTimeMinutes}</td>
                                    <td>{each.servings}</td>
                                    <td>{each.difficulty}</td>
                                    <td><img src={each.image} alt={each.title} width="100" /></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
            </div>
        </>
    );
}

export default Table3;


