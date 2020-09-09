import React from 'react';

class EditSupport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            support: '',
            user: ''
        }
    }

    componentDidMount() {
        const url = 'http://localhost:8080/api/support/edit/' + this.state.id + '';
        fetch(url)
            .then((response) => response.json())
            .then((data) => this.setState({ support: data.support, user: data.user }));
    }

    render() {
        let support = this.state.support;
        let user = this.state.user;

        const getPath = () => {
            let myPath = '/api/support/delete/' + support.id + '';
            return myPath
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mt-3 mx-auto">
                        <form action="/confirmSupport" method="POST" className="text-center border border-light p-5 rounded bg-blue">
                            <p className="h1 mb-4">Support Form</p>
                            <div className="row">
                                <div className="col-lg-6 mt-3">
                                    <p className="m-0 p-0">Name</p>
                                    <input type="text" name="name" placeholder="Name*" required="true" value={support.name} readonly="true" className="form-control mb-4"></input>
                                    <input type="text" name="id" placeholder="" required="true" value={support.id} readonly="true" className="d-none form-control mb-4"></input>
                                    <p className="m-0 p-0">Surname</p>
                                    <input type="text" name="surname" placeholder="Surname*" required="true" value={support.surname} readonly="true" className="form-control mb-4"></input>
                                    <p className="m-0 p-0">Support Type</p>
                                    <input type="text" name="supportType" placeholder="Support Type*" required="true" value={support.supportType} readonly="true" className="form-control mb-4"></input>
                                    <p className="m-0 p-0">Amount</p>
                                    <input type="number" name="amount" placeholder="Amount*" required="true" value={support.amount} readonly="true" className="form-control mb-4"></input>
                                    <p className="m-0 p-0">Send Type</p>
                                    <input type="text" name="sendType" placeholder="Send Type*" required="true" value={support.sendType} readonly="true" className=" form-control mb-4"></input>
                                </div>
                                <div className="col-lg-6 mt-3">
                                    <p className="m-0 p-0">Phone</p>
                                    <input type="number" name="phone" placeholder="Phone*" required="true" value={support.phone} readonly="true" className="form-control mb-4"></input>
                                    <p className="m-0 p-0">Address</p>
                                    <input type="text" name="address" placeholder="Address*" required="true" value={support.address} readonly="true" className="form-control mb-4"></input>
                                    <p className="m-0 p-0">Approver Name Surname</p>
                                    <input type="text" name="NameSurname" placeholder="" required="true" value={user.firstname + " " + user.lastname} readonly="true" className="form-control mb-4"></input>
                                    <input type="text" name="confirmName" placeholder="" required="true" value={user.firstname} readonly="true" className="form-control mb-4 d-none"></input>
                                    <input type="text" name="confirmSurname" placeholder="" required="true" value={user.lastname} readonly="true" className="form-control mb-4 d-none"></input>
                                    <p className="m-0 p-0">Approver NGO</p>
                                    <input type="text" name="confirmSTK" placeholder="" required="true" value={user.stk} readonly="true" className="form-control mb-4"></input>
                                    <p className="m-0 p-0">Status*</p>
                                    <select name="status" required="true" className="browser-default custom-select mb-4">
                                        <option selected className="d-none"></option>
                                        <option value="Approved">Approved</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Used">Used</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-success btn-block mt-3 w-50 mx-auto">Approve</button>
                            <a href={getPath(support.id)} className="btn btn-danger btn-block mt-3 w-50 mx-auto">Delete</a>
                        </form>
                    </div>
                </div>
            </div>
        )
    };
}

export default EditSupport;