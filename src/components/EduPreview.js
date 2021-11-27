import React, { Component } from "react";

export class EduPreview extends Component {
    render() {
        return(
            <div className="inputBox">
                <h1>{this.firstName}</h1>
                <h2>{this.title}</h2>

            </div>
        )
    }
}