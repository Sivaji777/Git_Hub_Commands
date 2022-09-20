


// // import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import axios from "axios";
// import Pagination from "react-js-pagination";
// import "../Pagination/Style.css";


// // // import "./styles.css";

// // export default class Paginate extends Component{
// //   state = {
// //     data: [],
// //     activePage: 1
// //   };

// //   componentDidMount() {
// //     axios
// //       .get("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10")
// //       .then((res) => {
// //         this.setState({
// //           data: res.data
// //         });
// //       });
// //   }
// //   handlePageChange = (pageNumber) => {
// //     console.log(`active page is ${pageNumber}`);
// //     axios
// //       .get(
// //         `https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=20`
// //       )
// //       .then((res) => {
// //         this.setState({
// //           data: res.data
// //         });
// //       });
// //     this.setState({ activePage: pageNumber });
// //   };
// //   render() {
// //     const allData = this.state.data.map((item) => {
// //       return (
// //         <div>
// //           <table>
// //             <thead>
// //               <th>name</th>
// //             </thead>
// //             <tbody>
// //               <tr>
// //                 <td key={item.id}>{item.title}</td>;
// //               </tr>
// //             </tbody>
// //           </table>
// //         </div>
// //       );
// //     });
// //     return (
// //       <div className="App">
// //         <p>React pagination test</p>
// //         <ul>{allData}</ul>
// //         <Pagination
// //           activePage={this.state.activePage}
// //           itemsCountPerPage={10}
// //           totalItemsCount={450}
// //           pageRangeDisplayed={1}
// //           onChange={this.handlePageChange}
// //         />
// //       </div>
// //     );
// //   }
// // }






// import React, { useEffect, useState } from 'react'

// function Paginate() {

//     const [state, setState] = useState({
//         data: [],
//         activePage: 1
//     })
//     useEffect(() => {
//         axios
//             .get("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10")
//             .then(res => {
//                 setState({
//                     data: res.data
//                 });
//             });
//     }, [])

//     const handlePageChange =async (pageNumber) => {
//         await axios
//             .get(
//                 `https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=20`
//             )
//             .then(res => {
//                 setState({
//                     data: res?.data
//                 });
//             });
//         setState({ activePage: pageNumber });
//     }

//     return (
//         <div>
//             <div className="App">
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             state != '' ? state?.data.map(item => {

//                                 return (
//                                     <tr>
//                                         <td key={item.id}>{item.title}</td>
//                                     </tr>
//                                 )
//                             }) : ''
//                         }
//                     </tbody>
//                 </table>

//                 <p>React pagination test</p>

//                 <Pagination
//                     activePage={state.activePage}
//                     itemsCountPerPage={10}
//                     totalItemsCount={450}
//                     pageRangeDisplayed={1}
//                     onChange={handlePageChange}
//                 />
//             </div>
//         </div>
//     )
// }

// export default Paginate


// import axios from "axios";
// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import Page from "./Page";
// import { RiDeleteBin6Fill } from 'react-icons/ri'
// import { GrEdit } from 'react-icons/gr'
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "../Pagination/Style.css";

// toast.configure()

// function PageNation() {
//     const [data, setData] = useState([]);
//     const [perpage, setPerpage] = useState([]);

//     const [mail, setMail] = useState('')


//     /* get Data */

//     useEffect(() => {
//         axios
//             .get("https://jsonplaceholder.typicode.com/users")
//             .then((res) => {
//                 setData(res.data);
//                 setPerpage(res.data.slice(0, 5));
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }, []);
//     const pageHandler = (pageNumber) => {
//         setPerpage(data.slice(pageNumber * 5 - 5, pageNumber * 5));
//     };


//     let PageNumber = [];

//     for (let i = 1; i < Math.ceil(data.length / 5) + 1; i++) {
//         PageNumber.push(i);
//     }

//     return (
//         <div className="container-fluid">
//             <div className="table-container mt-5">
//                 <table class="table table-bordered border-0">
//                     <thead>
//                         <tr>
//                             <th scope="col">#</th>
//                             <th scope="col">First</th>
//                             <th scope="col">Last</th>
//                             <th scope="col">Handle</th>
//                         </tr>
//                     </thead>
//                     <tbody className="border-top-0">

//                         {
//                             perpage.map((post, ind) => {
//                                 return (
//                                     <tr>
//                                         <td>{post.name}</td>
//                                         <td>{post.name}</td>
//                                         <td>{post.email}</td>
//                                         <td>{post.username}</td>
//                                     </tr>

//                                 )
//                             })
//                         }
//                     </tbody>
//                 </table>
//                 <div className="d-flex justify-content-center">
//                     {PageNumber.map((page) => (
//                         <div className="px-3">
//                             <div
//                                 style={{ cursor: "pointer" }}
//                                 onClick={() => pageHandler(page)}
//                             >
//                                 <span className="text-center px-2" style={{ fontWeight: "bold", fontSize: "22px", border: "2px solid #5555", background: "#5555", height: "30px", width: "30px" }}>{page}</span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div >
//     );
// }

// export default PageNation;