import React from "react";
import hand from '../public/images/hand2.png';
import axios from 'axios';
import { useState } from 'react';

function NeedForm() {

    const [count, setCount] = useState(0);

    function submitNeed(event) {
        event.preventDefault()
        let needType = event.target.elements.needType.value
        let amount = parseInt(event.target.elements.amount.value)

        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsInVtYWlsIjoia21tenVydGtjbkBnbWFpbC5jb20iLCJ1cm9sZSI6InVzZXIiLCJ1dXNlcm5hbWUiOiJiY3JnIiwidWxvZ2luVGltZSI6MTU5OTYwNDU3NjY2MSwiaWF0IjoxNTk5NjA0NTc2fQ.RP1iQR0MXoBqTdOWDmUuM2e8wNX3yWV4_enHBgZlssE';

        axios.post('https://devservice-dot-dynamic-sun-260208.appspot.com/v0/integration/17e29d391341/createNeed', {
            args: ["4", "0x19dqsqmql1ppo", needType, amount],
            account: "0x021Cdffa0B26D6964650dB9479d20F5A8AD7B6aF"
        }, {
            headers: {
                authorization: token,
            },
        }).then((response) => {
            const transaction = response.data.data;
            console.log(transaction);
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <div className="col-lg-6 mt-3">
            <form action="/submitNeed" onSubmit={submitNeed} method="POST" className="text-center border border-light p-5 rounded bg-blue">
                <img src={hand} className="mb-4"></img>
                <p className="h1 mb-4">Appeal for Aid</p>
                <input type="text" name="name" placeholder="Name*" required="true" className="form-control mb-4"></input>
                <input type="text" name="surname" placeholder="Surname*" required="true" className="form-control mb-4"></input>
                <select name="needType" className="browser-default custom-select mb-4" required="true">
                    <option className="d-none" selected>Need Type*</option>
                    <option value="Financial Support" >Financial Support</option>
                    <option value="Transportation" >Transportation</option>
                    <option value="Goods" >Goods</option>
                    <option value="Accommodation" >Accommodation</option>
                </select>
                <input type="number" name="amount" placeholder="Amount*" required="true" className="form-control mb-4"></input>
                <select name="urgency" className="browser-default custom-select mb-4">
                    <option className="d-none" selected>Urgency*</option>
                    <option value="High" >High</option>
                    <option value="Normal" >Normal</option>
                    <option value="Low" >Low</option>
                </select>
                <input type="text" name="expUr" placeholder="Brief Explanation for Urgency*" required="true" className="form-control mb-4"></input>
                <input type="number" name="phone" placeholder="Phone*" required="true" className="form-control mb-4"></input>
                <input type="text" name="address" placeholder="Address*" required="true" className="form-control mb-4"></input>
                <button type="submit" className="btn bg-dblue btn-block mt-3 c-white" >Send</button>
            </form>
        </div>
    )
}

export default NeedForm;