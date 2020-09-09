import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

function Supports() {
    const [supports, setSupports] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/supports")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setSupports(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const editSupport = (id) => {
        let myPath = '/support/edit/' + id + '';
        return myPath;
    }

    const delSupport = (id) => {
        let myPath = '/api/support/delete/' + id + '';
        return myPath
    }

    if (supports) {
        return (
            <div className="container text-center" >
                <div className="bg-dblue rounded">
                    <h1 className="mt-5 c-white p-3">Supports</h1>
                </div>
                <div className="bg-blue p-2 mt-2 rounded border">
                    <div className="bg-white rounded">
                        <table className="table mt-3 rounded">
                            <thead className="thead-dark rounded">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Surname</th>
                                    <th scope="col">Support Type</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Send Type</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Address</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {supports.map(support =>
                                    <tr id={support.id}>
                                        <th scope="row">{support.id}</th>
                                        <td>{support.name}</td>
                                        <td>{support.surname}</td>
                                        <td>{support.supportType}</td>
                                        <td>{support.amount}</td>
                                        <td>{support.sendType}</td>
                                        <td>{support.phone}</td>
                                        <td>{support.address}</td>
                                        <td>
                                            <Link to={editSupport(support.id)} className="mybtn-edit">Edit</Link>
                                        </td>
                                        <td>
                                            <a href={delSupport(support.id)} className="mybtn-danger">Delete</a>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    } else {
        return <Redirect to='/' />
    }
}

export default Supports;