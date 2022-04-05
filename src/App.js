import React from "react";
import Header from "./components/Header";
import Accountables from "./components/Accountables";
import Tasks from "./components/Tasks";
import NewTask from "./components/NewTask";

export default function App (){


    return (
        <div className="container">
            <Header />
            <Accountables />
            <Tasks />
            <NewTask />
        </div>
    );

}