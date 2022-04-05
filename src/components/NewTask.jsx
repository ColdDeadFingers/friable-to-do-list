import React from "react";



export default function NewTask(){
    const [showTask, setShowTask] = React.useState(false);

    const handleClick = () => {
        setShowTask(!showTask);
        
    }




    return(
        <div className="new-task-container">
            {showTask && <textarea className="new-task-box"></textarea>}
            <button className="new-task-btn" onClick={handleClick}>+</button>


        </div>
    )
}