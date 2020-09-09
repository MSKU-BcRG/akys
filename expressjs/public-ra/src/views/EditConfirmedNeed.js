import React from 'react';

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
        const url = '/api/confirmed_need/edit/' + this.state.id + '';
        fetch(url)
            .then((response) => response.json())
            .then((data) => this.setState({ need: data.need, user: data.user }));
    }

    render() {
        let need = this.state.need;
        let user = this.state.user;

        const getPath = () => {
            let myPath = '/api/confirmed_need/delete/' + need.id + '';
            return myPath
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mt-3 mx-auto">
                        <form action="/editConfirmNeed" method="POST" className="text-center border border-light p-5 rounded bg-blue">
                            <p className="h1 mb-4">Confirmed Need Form</p>
                            <div className="row">
                                <div className="col-lg-6 mt-3">
                                    <p className="m-0 p-0">Name</p>
                                    <input type="text" name="name" placeholder="Name*" required="true" value={need.name} readonly="true" className="form-control mb-4"></input>
                                    <input type="text" name="id" placeholder="" required="true" value={need.id} readonly="true" className="d-none form-control mb-4"></input>
                                    <p className="m-0 p-0">Surname</p>
                                    <input type="text" name="surname" placeholder="Surname*" required="true" value={need.surname} readonly="true" className="form-control mb-4"></input>
                                    <p className="m-0 p-0">Need Type</p>
                                    <input type="text" name="needType" placeholder="Need Type*" required="true" value={need.needType} readonly="true" className="form-control mb-4"></input>
                                    <p className="m-0 p-0">Amount</p>
                                    <input type="number" name="amount" placeholder="Amount*" required="true" value={need.amount} readonly="true" className="form-control mb-4"></input>
                                    <p className="m-0 p-0">Phone</p>
                                    <input type="number" name="phone" placeholder="Phone*" required="true" value={need.phone} readonly="true" className="form-control mb-4"></input>
                                </div>
                                <div className="col-lg-6 mt-3">
                                    <p className="m-0 p-0">Address</p>
                                    <input type="text" name="address" placeholder="Address*" required="true" value={need.address} readonly="true" className="form-control mb-4"></input>
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
                            <button type="submit" className="btn btn-success btn-block mt-3 w-50 mx-auto">Change</button>
                            <a href={getPath(need.id)} className="btn btn-danger btn-block mt-3 w-50 mx-auto">Delete</a>
                        </form>
                    </div>
                </div>
            </div>
        )
    };
}

export default EditNeed;