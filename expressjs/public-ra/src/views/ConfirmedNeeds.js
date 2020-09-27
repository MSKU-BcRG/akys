import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

function ConfirmedNeeds() {
    const [confirmedNeeds, setConfirmedNeeds] = useState([]);

    const showPersonalData = (id) => {
        let myPath = '/data/' + id + '';
        return myPath;
    }

    const editConfirmedNeed = (id) => {
        let myPath = '/confirmed_need/edit/' + id + '';
        return myPath;
    }

    useEffect(() => {
        showConfirmedNeeds()
    }, []);

    function showConfirmedNeeds() {

        const apiKey = '04cbdab3-90e1-4bed-8d6e-ccfce0fa894c'

        axios.get('https://devservice-dot-dynamic-sun-260208.appspot.com/int/da124c9f1a874fe2/showAllApprovedNeeds', {
            params: { args: [] },
            headers: {
                ApiKey: apiKey,
            },
        }).then(async (response) => {
            let needs;
            if (response.data.data[0] !== "") {
                needs = response.data.data;
                setConfirmedNeeds(needs);
            }
        }).catch(err => {
            console.error(err)
        });
    }

    if (confirmedNeeds) {
        return (
            <div className="container text-center" >
                <div className="bg-dblue rounded">
                    <h1 className="mt-5 c-white p-3">Onaylanan İhtiyaçlar</h1>
                </div>
                <div className="bg-blue p-2 mt-2 rounded border">
                    <div className="bg-white rounded">
                        <div className="table-responsive">
                            <table className="table table-bordered mt-3 rounded">
                                <thead className="thead-dark rounded">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Kişisel Veri Hash Değeri</th>
                                        <th scope="col">İhtiyaç Tipi</th>
                                        <th scope="col">Miktar</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {confirmedNeeds.map(need =>
                                        <tr key={need[0]}>
                                            <th scope="row">{need[0]}</th>
                                            <td><Link className="linktext" to={showPersonalData(need[0])}>{need[1].substr(0, 25) + "..."}</Link></td>
                                            <td>{need[2]}</td>
                                            <td>{need[3]}</td>
                                            <td>
                                                <Link to="/" className="mybtn-edit">Düzenle</Link>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return <Redirect to='/' />
    }
}

export default ConfirmedNeeds;