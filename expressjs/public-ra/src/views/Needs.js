import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

function Needs() {
    const [needs, setNeeds] = useState([]);

    const editNeed = (id) => {
        let myPath = '/need/edit/' + id + '';
        return myPath;
    }

    const showPersonalData = (id) => {
        let myPath = '/data/' + id + '';
        return myPath;
    }

    useEffect(() => {
        showNeeds()
    }, []);

    function showNeeds() {

        const apiKey = '04cbdab3-90e1-4bed-8d6e-ccfce0fa894c'

        axios.get('https://devservice-dot-dynamic-sun-260208.appspot.com/int/da124c9f1a874fe2/showNeeds', {
            params: { args: [] },
            headers: {
                ApiKey: apiKey,
            },
        }).then((response) => {
            const result = response.data.data;
            console.log(result);
            setNeeds(result);
        }).catch(err => {
            console.error(err)
        });
    }

    if (needs) {
        return (
            <div className="container text-center" >
                <div className="bg-dblue rounded">
                    <h1 className="mt-5 c-white p-3">İhtiyaçlar</h1>
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
                                    {needs.map(need => {
                                        if (need[0] !== "") {
                                            return <tr key={need[0]}>
                                                <th scope="row">{need[0]}</th>
                                                <td><Link className="linktext" to={showPersonalData(need[0])}>{need[1].substr(0, 25) + "..."}</Link></td>
                                                <td>{need[2]}</td>
                                                <td>{need[3]}</td>
                                                <td>
                                                    <Link to={editNeed(need[0])} className="mybtn-edit">Düzenle</Link>
                                                </td>
                                            </tr>
                                        }
                                    }
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

export default Needs;