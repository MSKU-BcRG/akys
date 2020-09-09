import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

class EditNeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            need: '',
            user: ''
        }
    }

    componentDidMount() {
        const url = 'http://localhost:8080/api/need/edit/1';
        fetch(url)
            .then((response) => response.json())
            .then((data) => this.setState({ user: data.user }));

        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsInVtYWlsIjoia21tenVydGtjbkBnbWFpbC5jb20iLCJ1cm9sZSI6InVzZXIiLCJ1dXNlcm5hbWUiOiJiY3JnIiwidWxvZ2luVGltZSI6MTU5OTYwNDU3NjY2MSwiaWF0IjoxNTk5NjA0NTc2fQ.RP1iQR0MXoBqTdOWDmUuM2e8wNX3yWV4_enHBgZlssE';

        axios.get('https://devservice-dot-dynamic-sun-260208.appspot.com/v0/integration/17e29d391341/showNeedByID', {
            params: { args: [this.state.id] },
            headers: {
                authorization: token,
            },
        }).then((response) => {
            const result = response.data.data;
            this.setState({ need: result })
        }).catch((err) => {
            console.log(err)
        });
    }

    handleSubmit(id) {
        return event => {
            event.preventDefault()
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsInVtYWlsIjoia21tenVydGtjbkBnbWFpbC5jb20iLCJ1cm9sZSI6InVzZXIiLCJ1dXNlcm5hbWUiOiJiY3JnIiwidWxvZ2luVGltZSI6MTU5OTYwNDU3NjY2MSwiaWF0IjoxNTk5NjA0NTc2fQ.RP1iQR0MXoBqTdOWDmUuM2e8wNX3yWV4_enHBgZlssE';

            axios.post('https://devservice-dot-dynamic-sun-260208.appspot.com/v0/integration/17e29d391341/approveNeed', {
                args: [id],
                account: "0x75e5195dea470A061fACdeC804aC74e2666C1c00"
            }, {
                headers: {
                    authorization: token,
                },
            }).then((response) => {
                const transaction = response.data.data;
                console.log(transaction);
            }).catch((err) => {
                console.error(err);
            });
        }
    }

    render() {
        let need = this.state.need;
        let user = this.state.user;

        const getPath = () => {
            let myPath = '/api/need/delete/' + need.id + '';
            return myPath
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mt-3 mx-auto">
                        <form action="/confirmNeed" onSubmit={this.handleSubmit(need[0])} method="POST" className="text-center border border-light p-5 rounded bg-blue">
                            <p className="h1 mb-4">Need Form</p>
                            <div className="row">
                                <div className="col-lg-6 mt-3">
                                    <p className="m-0 p-0">ID</p>
                                    <input type="text" name="id" placeholder="Name*" required="true" value={need[0]} readonly="true" className="form-control mb-4"></input>
                                    <p className="m-0 p-0">Personal Data Hash</p>
                                    <input type="text" name="surname" placeholder="Surname*" required="true" value={need[1]} readonly="true" className="form-control mb-4"></input>
                                    <p className="m-0 p-0">Need Type</p>
                                    <input type="text" name="needType" placeholder="Need Type*" required="true" value={need[2]} readonly="true" className="form-control mb-4"></input>
                                    <p className="m-0 p-0">Amount</p>
                                    <input type="number" name="amount" placeholder="Amount*" required="true" value={need[3]} readonly="true" className="form-control mb-4"></input>
                                </div>
                                <div className="col-lg-6 mt-3">
                                    <p className="m-0 p-0">Approver Name Surname</p>
                                    <input type="text" name="NameSurname" placeholder="" required="true" value={user.firstname + " " + user.lastname} readonly="true" className="form-control mb-4"></input>
                                    <input type="text" name="confirmName" placeholder="" required="true" value={user.firstname} readonly="true" className="form-control mb-4 d-none"></input>
                                    <input type="text" name="confirmSurname" placeholder="" required="true" value={user.lastname} readonly="true" className="form-control mb-4 d-none"></input>
                                    <p className="m-0 p-0">Approver NGO</p>
                                    <input type="text" name="confirmSTK" placeholder="" required="true" value={user.stk} readonly="true" className="form-control mb-4"></input>
                                    <p className="m-0 p-0">Urgency Status*</p>
                                    <select name="urgency" required="true" className="browser-default custom-select mb-4">
                                        <option selected className="d-none"></option>
                                        <option value="High">High</option>
                                        <option value="Normal">Normal</option>
                                        <option value="Low">Low</option>
                                    </select>
                                    <p className="m-0 p-0">Status*</p>
                                    <select name="status" required="true" className="browser-default custom-select mb-4">
                                        <option selected className="d-none"></option>
                                        <option value="Approved">Approved</option>
                                        <option value="Transportation Stage">Transportation Stage</option>
                                        <option value="In Use">In Use</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-success btn-block mt-3 w-50 mx-auto">Approve</button>
                            <a href={getPath(need.id)} className="btn btn-danger btn-block mt-3 w-50 mx-auto">Delete</a>
                        </form>
                    </div>
                </div>
            </div>
        )
    };
}

export default EditNeed;