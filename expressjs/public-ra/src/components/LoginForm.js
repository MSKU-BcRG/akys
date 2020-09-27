import React from "react";
import { Link } from 'react-router-dom';

function LoginForm() {
    return (
        <div className="col-lg-6 mx-auto">
            <form action="/api/login" method="POST" className="text-center border border-light p-5 rounded bg-grey">
                <p className="h2 mb-4">Giriş Yap</p>
                <input type="username" name="username" placeholder="Kullanıcı Adı" required className="form-control mb-4"></input>
                <input type="password" name="password" placeholder="Parola" required className="form-control mb-4"></input>
                <div className="d-flex justify-content-around">
                    <div>
                        <Link to="/" className="nav-link">Parolamı unuttum</Link>
                    </div>
                </div>
                <button type="submit" className="btn btn-info btn-block mt-3">Giriş</button>
                <Link to="/signup" className="btn btn-orange btn-block my-4">Kayıt Ol</Link>
            </form>
        </div>
    )
}

export default LoginForm;
