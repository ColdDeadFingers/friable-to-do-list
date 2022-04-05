import React from "react";


export default function Tasks(){
    return(
        <div className="tasks-container"> 
        <div className="task-item">
            <input type= "checkbox" className="checkbox"/>
            <p className="task-text">Visit Tissai's Fortress by 12 noon and teleport back</p>
        </div>
        <hr className="line"/>
        </div>
    )
}