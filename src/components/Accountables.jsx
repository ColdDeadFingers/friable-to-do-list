import React from "react";
import Person from "../images/person.png"

export default function Accountables(){
    return(
        <div className="accountables-container">
            <p>accountable to</p>
            <div className="team-member-card">
            <img className="team-member-icon" src={Person} alt="person"/>
            <p className="team-member-name">Milan</p>
            </div>
            <hr className="line"/>
        </div>
    )
}