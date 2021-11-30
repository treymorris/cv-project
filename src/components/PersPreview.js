//import React, { useState } from "react";

const PersPreview = (props) => {

    return (
            <div className="inputBox">
                <h1>{props.firstName} {props.lastName}</h1>
                <div>{props.title}</div>
                <div>{props.email}</div>
                <div>{props.phone}</div>
                <div>{props.address}</div>
            </div>
        )
    };

export default PersPreview;
