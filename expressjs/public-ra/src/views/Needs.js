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

    const delNeed = (id) => {
        let myPath = '/need/delete/' + id + '';
        return myPath
    }

    useEffect(() => {
        showNeeds()
    }, []);

    function showNeeds() {

        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsInVtYWlsIjoia21tenVydGtjbkBnbWFpbC5jb20iLCJ1cm9sZSI6InVzZXIiLCJ1dXNlcm5hbWUiOiJiY3JnIiwidWxvZ2luVGltZSI6MTU5OTYwNDU3NjY2MSwiaWF0IjoxNTk5NjA0NTc2fQ.RP1iQR0MXoBqTdOWDmUuM2e8wNX3yWV4_enHBgZlssE';

        const getNeeds = async (needAmount) => {
            const needs = [];
            for (let i = 0; i < needAmount; i++) {
                await axios.get('https://devservice-dot-dynamic-sun-260208.appspot.com/v0/integration/17e29d391341/showNeedByIndex', {
                    params: { args: [i] },
                    headers: {
                        authorization: token,
                    },
                }).then((need) => {
                    needs[i] = need.data.data
                }).catch((err) => {
                    throw (err);
                })
            }
            return needs;
        }
        axios.get('https://devservice-dot-dynamic-sun-260208.appspot.com/v0/integration/17e29d391341/showTotalNeedCount', {
            params: { args: [] },
            headers: {
                authorization: token,
            },
        }).then(async (response) => {
            const needAmount = response.data.data;
            const needs = await getNeeds(needAmount);
            setNeeds(needs);
            console.log(needs);
        }).catch((err) => {
            console.error(err);
        });
    }

    if (needs) {
        return (
            <div className="container text-center" >
                <div className="bg-dblue rounded">
                    <h1 className="mt-5 c-white p-3">Needs</h1>
                </div>
                <div className="bg-blue p-2 mt-2 rounded border">
                    <div className="bg-white rounded">
                        <table className="table mt-3 rounded">
                            <thead className="thead-dark rounded">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Personal Data Hash</th>
                                    <th scope="col">Need Type</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {needs.map(need =>
                                    <tr id={need[0]}>
                                        <th scope="row">{need[0]}</th>
                                        <td>{need[1]}</td>
                                        <td>{need[2]}</td>
                                        <td>{need[3]}</td>
                                        <td>
                                            <Link to={editNeed(need[0])} className="mybtn-edit">Edit</Link>
                                        </td>
                                        <td>
                                            <a href={delNeed(need[0])} className="mybtn-danger">Delete</a>
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

export default Needs;