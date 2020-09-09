import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

function ConfirmedSupports() {
    const [confirmedSupports, setConfirmedSupports] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/confirmed_supports")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setConfirmedSupports(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const editConfirmedSupport = (id) => {
        let myPath = '/confirmed_support/edit/' + id + '';
        return myPath
    }

    if (confirmedSupports) {
        return (
            <div className="container text-center" >
                <div className="bg-dblue rounded">
                    <h1 className="mt-5 c-white p-3">Approved Supports</h1>
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
                                    <th scope="col">Approver Name</th>
                                    <th scope="col">Approver NGO</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Address</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {confirmedSupports.map(support =>
                                    <tr id={support.id}>
                                        <th scope="row">{support.id}</th>
                                        <td>{support.name}</td>
                                        <td>{support.surname}</td>
                                        <td>{support.supportType}</td>
                                        <td>{support.amount}</td>
                                        <td className="row text-center"><span>{support.confirmName}</span><span>{support.confirmSurname}</span></td>
                                        <td>{support.confirmSTK}</td>
                                        <td>{support.status}</td>
                                        <td>{support.phone}</td>
                                        <td>{support.address}</td>
                                        <td>
                                            <Link to={editConfirmedSupport(support.id)} className="mybtn-edit">Edit</Link>
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

export default ConfirmedSupports;