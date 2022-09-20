import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Page from "./Page";
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { GrEdit } from 'react-icons/gr'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../Pagination/Style.css";

toast.configure()

function PageNation() {
    const [data, setData] = useState([]);
    const [perpage, setPerpage] = useState([]);

    const [mail, setMail] = useState('')


    /* get Data */

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setData(res.data);
                setPerpage(res.data.slice(0, 5));
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const pageHandler = (pageNumber) => {
        setPerpage(data.slice(pageNumber * 5 - 5, pageNumber * 5));
    };


    let PageNumber = [];

    for (let i = 1; i < Math.ceil(data.length / 5) + 1; i++) {
        PageNumber.push(i);
    }

    return (
        <div className="container-fluid">
            <div className="table-container mt-5">
                <table class="table table-bordered border-0">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody className="border-top-0">

                        {
                            perpage.map((post, ind) => {
                                return (
                                    <tr>
                                        <td>{post.name}</td>
                                        <td>{post.name}</td>
                                        <td>{post.email}</td>
                                        <td>{post.username}</td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>
                <div className="d-flex justify-content-center">
                    {
                        PageNumber.map((page) => (
                            <div className="px-3">
                                <div
                                    style={{ cursor: "pointer" }}
                                    onClick={() => pageHandler(page)}
                                >
                                    <span className="text-center px-2" style={{ fontWeight: "bold", fontSize: "22px", border: "2px solid #5555", background: "#5555", height: "30px", width: "30px" }}>{page}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    );
}

export default PageNation;