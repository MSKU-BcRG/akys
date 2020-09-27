import React from 'react';
import { Link } from 'react-router-dom';
import CryptoJS from 'crypto-js';

class PersonalData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            operationId: props.match.params.id,
            data: ''
        }
    }

    componentDidMount() {
        const url = '/api/getdatahash/' + this.state.operationId + '';

        fetch(url)
            .then((response) => response.json())
            .then(async (data) => {
                const SECRET = 'MY SECRET KEYYY';
                let reb64 = await CryptoJS.enc.Hex.parse(data.datahash.hashValue);
                let bytes = await reb64.toString(CryptoJS.enc.Base64);
                let decrypt = CryptoJS.AES.decrypt(bytes, SECRET);
                let plain = decrypt.toString(CryptoJS.enc.Utf8);
                let result = JSON.parse(plain)
                this.setState({ data: result })
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mt-3 mx-auto">
                        <form method="POST" className="text-center border border-light p-5 rounded bg-blue">
                            <p className="h1 mb-4">Kişisel Veri Formu</p>
                            <div className="row">
                                <div className="col-lg-6 mt-3">
                                    <p className="m-0 p-0">ID</p>
                                    <input type="text" name="id" placeholder="" required="true" value={this.state.operationId} readonly="true" className="form-control mb-4"></input>
                                    <p className="m-0 p-0">İsim</p>
                                    <input type="text" name="name" placeholder="" required="true" value={this.state.data.name} readonly="true" className="form-control mb-4"></input>
                                    <p className="m-0 p-0">Soyisim</p>
                                    <input type="text" name="surname" placeholder="" required="true" value={this.state.data.surname} readonly="true" className="form-control mb-4"></input>
                                    <p className="m-0 p-0">Telefon</p>
                                    <input type="text" name="phone" placeholder="" required="true" value={this.state.data.phone} readonly="true" className="form-control mb-4"></input>
                                </div>
                                <div className="col-lg-6 mt-3">
                                    <p className="m-0 p-0">Adres</p>
                                    <input type="text" name="address" placeholder="" required="true" value={this.state.data.address} readonly="true" className="form-control mb-4"></input>
                                    <p className="m-0 p-0">Aciliyet</p>
                                    <input type="text" name="urgency" placeholder="" required="true" value={this.state.data.urgency} readonly="true" className="form-control mb-4"></input>
                                    <p className="m-0 p-0">Aciliyet için kısa açıklama</p>
                                    <input type="text" name="expUr" placeholder="" required="true" value={this.state.data.expUr} readonly="true" className="form-control mb-4"></input>
                                </div>
                            </div>
                            <Link to="/needs" className="btn btn-danger btn-block mt-3 w-50 mx-auto">Geri</Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    };
}

export default PersonalData;