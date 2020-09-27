import React from "react";

function RegisterForm() {
    return (
        <div className="col-lg-6 mx-auto">
            <form action="/api/signup" method="POST" className="text-center border border-light p-5 rounded bg-grey">
                <p className="h2.mb-4">Kayıt Ol</p>
                <input type="text" name="username" placeholder="Kullanıcı Adı*" required className="form-control mb-4"></input>
                <input type="text" name="firstname" placeholder="İsim*" required className="form-control mb-4"></input>
                <input type="text" name="lastname" placeholder="Soyisim*" required className="form-control mb-4"></input>
                <input type="password" name="password" placeholder="Parola*" required className="form-control mb-4"></input>
                <input type="text" name="stk" placeholder="STK İsmi*" required className="form-control mb-4"></input>
                <input type="number" name="phone" placeholder="Telefon*" required className="form-control mb-4"></input>
                <input type="email" name="email" placeholder="E-mail*" required className="form-control mb-4"></input>
                <button type="submit" className="btn btn-info btn-block mt-3">Kayıt Ol</button>
            </form>
        </div>
    )
}

export default RegisterForm;