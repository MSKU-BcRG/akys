import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

function ConfirmedSupports() {
    const [confirmedSupports, setConfirmedSupports] = useState([]);

    const showPersonalData = (id) => {
        let myPath = '/data/' + id + '';
        return myPath;
    }

    const editConfirmedSupport = (id) => {
        let myPath = '/confirmed_need/edit/' + id + '';
        return myPath;
    }

    useEffect(() => {
        showConfirmedSupports()
    }, []);

    function showConfirmedSupports() {

        const apiKey = '04cbdab3-90e1-4bed-8d6e-ccfce0fa894c'

        axios.get('https://devservice-dot-dynamic-sun-260208.appspot.com/int/da124c9f1a874fe2/showAllApprovedSupports', {
            params: { args: [] },
            headers: {
                ApiKey: apiKey,
            },
        }).then(async (response) => {
            let supports;
            if (response.data.data[0] !== "") {
                supports = response.data.data;
                setConfirmedSupports(supports);
            }
        }).catch(err => {
            console.error(err)
        });
    }

    if (confirmedSupports) {
        return (
            <div className="container text-center" >
                <div className="bg-dblue rounded">
                    <h1 className="mt-5 c-white p-3">Onaylanan Destekler</h1>
                </div>
                <div className="bg-blue p-2 mt-2 rounded border">
                    <div className="bg-white rounded">
                        <div className="table-responsive">
                            <table className="table table-bordered mt-3 rounded">
                                <thead className="thead-dark rounded">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Kişisel Veri Hash Değeri</th>
                                        <th scope="col">Destek Tipi</th>
                                        <th scope="col">Miktar</th>
                                        <th scope="col">Gönderim Şekli</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {confirmedSupports.map(support =>
                                        <tr key={support[0]}>
                                            <th scope="row">{support[0]}</th>
                                            <td><Link className="linktext" to={showPersonalData(support[0])}>{support[1].substr(0, 25) + "..."}</Link></td>
                                            <td>{support[2]}</td>
                                            <td>{support[3]}</td>
                                            <td>{support[4]}</td>
                                            <td>
                                                <Link to={editConfirmedSupport(support[0])} className="mybtn-edit">Düzenle</Link>
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

export default ConfirmedSupports;