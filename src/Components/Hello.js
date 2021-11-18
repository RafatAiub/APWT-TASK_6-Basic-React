import React, { Component } from "react";
import ShowMessage from "./ShowMessage";
import Student from "./Student";


const Hello = () => {
    return(
        <div>
                <ShowMessage />
                <Student name="Rafat" id="17-34652-2" cgpa="3.69"/>
                <Student name="Rohan" id="19-34562-2" cgpa="3.75"/>
                <Student name="Azrin" id="27-34652-2" cgpa="3.96"/>
               
        </div>
    )
}

export default Hello;