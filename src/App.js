import React, { useState } from "react";
import "./Styles.css";
import PersPreview from "./components/PersPreview";
import ExpPreview from "./components/ExpPreview";
import EduPreview from "./components/EduPreview";
import PersInfo from "./components/PersInfo";
import EduInfo from "./components/EduInfo";
import ExpInfo from "./components/ExpInfo";

const App = () => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    phone: "",
    address: "",
  });

  const [expInfo, setExpInfo] = useState({
    jobtitle: "",
    description: "",
    company: "",
    jobLocation: "",
    from: "",
    to: "",
  });

  const [eduInfo, setEduInfo] = useState({
    school: "",
    schoolLocation: "",
    degree: "",
    honors: "",
    educationFrom: "",
    educationTo: "",
  });

  const handlePersChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => {
      return { ...prevInfo, [name]: value };
    });
  };

  const handleExpChange = (e) => {
    const { name, value } = e.target;
    setExpInfo((prevInfo) => {
      return { ...prevInfo, [name]: value };
    });
  };

  const handleEduChange = (e) => {
    const { name, value } = e.target;
    setEduInfo((prevInfo) => {
      return { ...prevInfo, [name]: value };
    });
  };

  return (
    <div>
      <h1>Create CV with React!</h1>
      <div className="mainPage">
        <div className="container">
          <PersInfo onchange={handlePersChange} persInfo={personalInfo} />
          <ExpInfo onchange={handleExpChange} eduInfo={expInfo} />
          <EduInfo onchange={handleEduChange} eduInfo={eduInfo} />
        </div>
        <div className="container">
          <PersPreview {...{ ...personalInfo }} />
          <ExpPreview {...{ ...expInfo }} />
          <EduPreview {...{ ...eduInfo }} />
        </div>
      </div>
    </div>
  );
};

export default App;
