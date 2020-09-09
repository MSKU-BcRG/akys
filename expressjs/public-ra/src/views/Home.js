import React from "react";
import NeedForm from "../components/NeedForm";
import SupportForm from "../components/SupportForm";

function Home() {
    return (
        <div>
            <div className="container">
                <div className="row mx-auto">
                    <NeedForm />
                    <SupportForm />
                </div>
            </div>
        </div>
    )
}

export default Home;