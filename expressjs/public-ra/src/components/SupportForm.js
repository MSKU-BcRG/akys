import React from "react";
import amb from '../public/images/amb2.png';

function SupportForm() {
    return (
        <div className="col-lg-6 mt-3">
            <form action="/submitSupport" method="POST" className="text-center border border-light p-5 rounded bg-blue">
                <img src={amb} className="mb-4"></img>
                <p className="h1 mb-4">Give Support</p>
                <input type="text" name="name" placeholder="Name*" required="true" className="form-control mb-4"></input>
                <input type="text" name="surname" placeholder="Surname*" required="true" className="form-control mb-4"></input>
                <input type="text" name="address" placeholder="Address*" required="true" className="form-control mb-4"></input>
                <select name="supportType" className="browser-default custom-select mb-4" required="true">
                    <option className="d-none" selected>Support Type*</option>
                    <option value="Financial Support" >Financial Support</option>
                    <option value="Transportation" >Transportation</option>
                    <option value="Goods" >Goods</option>
                    <option value="Accommodation" >Accommodation</option>
                </select>
                <input type="number" name="amount" placeholder="Amount*" required="true" className="form-control mb-4"></input>
                <input type="number" name="phone" placeholder="Phone*" required="true" className="form-control mb-4"></input>
                <input type="text" name="sendType" placeholder="Send Type*" required="true" className="form-control mb-4"></input>
                <input type="text" className="form-control mb-4 vis-hid"></input>
                <button type="submit" className="btn bg-dblue btn-block mt-3 c-white">Send</button>
            </form>
        </div>
    )
}

export default SupportForm;