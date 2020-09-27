import React from 'react';
import axios from 'axios';

class EditNeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            need: '',
            user: ''
        }
    }

    async getUserData() {
        const url = '/api/getUser';
        fetch(url)
            .then((response) => response.json())
            .then((data) => this.setState({ user: data.user }))
    }

    componentDidMount() {
        const apiKey = '04cbdab3-90e1-4bed-8d6e-ccfce0fa894c'

        axios.get('https://devservice-dot-dynamic-sun-260208.appspot.com/int/da124c9f1a874fe2/showNeed', {
            params: { args: [this.state.id] },
            headers: {
                ApiKey: apiKey,
            },
        }).then(async (response) => {
            const result = response.data.data;
            this.setState({ need: result })
            await this.getUserData()
        }).catch(err => {
            console.error(err)
        });
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
                            <p className="h1 mb-4">Onaylanmış İhtiyaç Formu</p>
                            <div className="row">
                                <div className="col-lg-6 mt-3">
                                    <p className="m-0 p-0">İsim</p>
                                    <input type="text" name="name" placeholder="Name*" required="true" value={need.name} readonly="true" className="form-control mb-4"></input>
                                    <input type="text" name="id" placeholder="" required="true" value={need.id} readonly="true" className="d-none form-control mb-4"></input>
                                    <p className="m-0 p-0">Soyisim</p>
                                    <input type="text" name="surname" placeholder="Surname*" required="true" value={need.surname} readonly="true" className="form-control mb-4"></input>
                                    <p className="m-0 p-0">İhtiyaç Tipi</p>
                                    <input type="text" name="needType" placeholder="Need Type*" required="true" value={need.needType} readonly="true" className="form-control mb-4"></input>
                                    <p className="m-0 p-0">Miktar</p>
                                    <input type="number" name="amount" placeholder="Amount*" required="true" value={need.amount} readonly="true" className="form-control mb-4"></input>
                                    <p className="m-0 p-0">Telefon</p>
                                    <input type="number" name="phone" placeholder="Phone*" required="true" value={need.phone} readonly="true" className="form-control mb-4"></input>
                                </div>
                                <div className="col-lg-6 mt-3">
                                    <p className="m-0 p-0">Adres</p>
                                    <input type="text" name="address" placeholder="Address*" required="true" value={need.address} readonly="true" className="form-control mb-4"></input>
                                    <p className="m-0 p-0">Onaylayan İsim Soyisim</p>
                                    <input type="text" name="NameSurname" placeholder="" required="true" value={user.firstname + " " + user.lastname} readonly="true" className="form-control mb-4"></input>
                                    <input type="text" name="confirmName" placeholder="" required="true" value={user.firstname} readonly="true" className="form-control mb-4 d-none"></input>
                                    <input type="text" name="confirmSurname" placeholder="" required="true" value={user.lastname} readonly="true" className="form-control mb-4 d-none"></input>
                                    <p className="m-0 p-0">Onaylayan STK</p>
                                    <input type="text" name="confirmSTK" placeholder="" required="true" value={user.stk} readonly="true" className="form-control mb-4"></input>
                                    <p className="m-0 p-0">Aciliyet Durumu*</p>
                                    <select name="urgency" required="true" className="browser-default custom-select mb-4">
                                        <option selected className="d-none"></option>
                                        <option value="Yüksek">Yüksek</option>
                                        <option value="Normal">Normal</option>
                                        <option value="Düşük">Düşük</option>
                                    </select>
                                    <p className="m-0 p-0">Durum*</p>
                                    <select name="status" required="true" className="browser-default custom-select mb-4">
                                        <option selected className="d-none"></option>
                                        <option value="Onaylandı">Onaylandı</option>
                                        <option value="Ulaşım Aşamasında">Ulaşım Aşamasında</option>
                                        <option value="Kullanımda">Kullanımda</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-success btn-block mt-3 w-50 mx-auto">Değiştir</button>
                            <a href={getPath(need.id)} className="btn btn-danger btn-block mt-3 w-50 mx-auto">Sil</a>
                        </form>
                    </div>
                </div>
            </div>
        )
    };
}

export default EditNeed;