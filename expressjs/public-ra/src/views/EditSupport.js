import React from 'react';
import axios from 'axios';

class EditSupport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            support: '',
            user: ''
        }
    }

    delSupport(id) {
        const apiKey = '04cbdab3-90e1-4bed-8d6e-ccfce0fa894c'

        axios.post('https://devservice-dot-dynamic-sun-260208.appspot.com/int/da124c9f1a874fe2/cancelSupport', {
            args: [id],
            account: "0xDd87F4bb1CB761eD3aEA8A1C1500cD71A23500ff"
        }, {
            headers: {
                ApiKey: apiKey,
            },
        }).then((response) => {
            const transaction = response.data;
            console.log(transaction);
        });
    }

    async getUserData() {
        const url = '/api/getUser';
        fetch(url)
            .then((response) => response.json())
            .then((data) => this.setState({ user: data.user }))
    }

    componentDidMount() {

        const apiKey = '04cbdab3-90e1-4bed-8d6e-ccfce0fa894c'

        axios.get('https://devservice-dot-dynamic-sun-260208.appspot.com/int/da124c9f1a874fe2/showSupport', {
            params: { args: [this.state.id] },
            headers: {
                ApiKey: apiKey,
            },
        }).then(async (response) => {
            const result = response.data.data;
            this.setState({ support: result })
            await this.getUserData()
        }).catch(err => {
            console.error(err)
        });
    }

    handleSubmit(id) {
        return event => {
            event.preventDefault()

            const apiKey = '04cbdab3-90e1-4bed-8d6e-ccfce0fa894c'

            axios.post('https://devservice-dot-dynamic-sun-260208.appspot.com/int/da124c9f1a874fe2/approveSupport', {
                args: [id],
                account: "0xDd87F4bb1CB761eD3aEA8A1C1500cD71A23500ff"
            }, {
                headers: {
                    ApiKey: apiKey,
                },
            }).then((response) => {
                const transaction = response.data;
                console.log(transaction);
            }).catch(err => {
                console.error(err)
            });
        }
    }

    render() {
        let support = this.state.support;
        let user = this.state.user;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mt-3 mx-auto">
                        <form onSubmit={this.handleSubmit(support[0])} method="POST" className="text-center border border-light p-5 rounded bg-blue">
                            <p className="h1 mb-4">Destek Formu</p>
                            <div className="row">
                                <div className="col-lg-6 mt-3">
                                    <p className="m-0 p-0">ID</p>
                                    <input type="text" name="id" placeholder="" required="true" value={support[0]} readonly="true" className="form-control mb-4"></input>
                                    <p className="m-0 p-0">Kişisel Veri Hash Değeri</p>
                                    <input type="text" name="datahash" placeholder="Surname*" required="true" value={support[1]} readonly="true" className="form-control mb-4"></input>
                                    <p className="m-0 p-0">Destek Tipi</p>
                                    <input type="text" name="supportType" placeholder="Support Type*" required="true" value={support[2]} readonly="true" className="form-control mb-4"></input>
                                    <p className="m-0 p-0">Miktar</p>
                                    <input type="number" name="amount" placeholder="Amount*" required="true" value={support[3]} readonly="true" className="form-control mb-4"></input>
                                    <p className="m-0 p-0">Gönderim Şekli</p>
                                    <input type="text" name="sendType" placeholder="Send Type*" required="true" value={support[4]} readonly="true" className=" form-control mb-4"></input>
                                </div>
                                <div className="col-lg-6 mt-3">
                                    <p className="m-0 p-0">Onaylayan İsim Soyisim</p>
                                    <input type="text" name="NameSurname" placeholder="" required="true" value={user.firstname + " " + user.lastname} readonly="true" className="form-control mb-4"></input>
                                    <input type="text" name="confirmName" placeholder="" required="true" value={user.firstname} readonly="true" className="form-control mb-4 d-none"></input>
                                    <input type="text" name="confirmSurname" placeholder="" required="true" value={user.lastname} readonly="true" className="form-control mb-4 d-none"></input>
                                    <p className="m-0 p-0">Onaylayan STK</p>
                                    <input type="text" name="confirmSTK" placeholder="" required="true" value={user.stk} readonly="true" className="form-control mb-4"></input>
                                    <p className="m-0 p-0">Durum*</p>
                                    <select name="status" required="true" className="browser-default custom-select mb-4">
                                        <option selected className="d-none"></option>
                                        <option value="Onaylandı">Onaylandı</option>
                                        <option value="Beklemede">Beklemede</option>
                                        <option value="Kullanıldı">Kullanıldı</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-success btn-block mt-3 w-50 mx-auto">Onayla</button>
                        </form>
                        <a onClick={() => { this.delSupport(support[0]) }} className="btn btn-danger btn-block mt-3 w-50 mx-auto">Sil</a>
                    </div>
                </div>
            </div>
        )
    };
}

export default EditSupport;