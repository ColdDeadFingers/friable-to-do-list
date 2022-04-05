import React from "react";


export default function Tasks(){
    return(
        <div className="tasks-container"> 
        <div className="task-item">
            <input type= "checkbox" className="checkbox"/>
            <p className="task-text">Visit Tissai's Fortress by 12 noon and teleport back</p>
        </div>
        <hr className="line"/>

        <div className="task-item">
            <input type= "checkbox" className="checkbox"/>
            <p className="task-text">Get Gold on Summoner's Rift</p>
        </div>
        <hr className="line"/>

        <div className="task-item">
            <input type= "checkbox" className="checkbox"/>
            <p className="task-text">Warm up on wildrift</p>
        </div>
        <hr className="line"/>

        <div className="task-item">
            <input type= "checkbox" className="checkbox"/>
            <p className="task-text">Get much better at React</p>
        </div>
        <hr className="line"/>
        </div>
    )
}