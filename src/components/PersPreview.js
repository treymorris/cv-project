import React, { Component } from "react";

export class PersPreview extends Component {
    render() {
        return(
            <div className="inputBox">
                <h1>{this.props.firstName}</h1>
                <h2>{this.props.title}</h2>

            </div>
        )
    }
}