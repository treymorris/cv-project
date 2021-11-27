import React, { Component } from "react";
import { PersInfo } from "./components/PersInfo";
import './App.css';
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { PersPreview } from "./components/PersPreview";
import {ExpPreview} from "./components/ExpPreview";
import {EduPreview} from "./components/EduPreview";

class App extends Component {
  

  render() {

    return (
      <div>
        <h1>Create CV with React!</h1>
        <div className="mainPage">
          <div className="container">
            <PersInfo/>
            <Experience/>
            <Education/>
          </div>
          <div className="container">
            <PersPreview/>
            <ExpPreview/>
            <EduPreview/>
          </div>
        </div>
      </div>
    )
  }
}


export default App