import React, { useState } from "react";
import PersPreview from "./PersPreview";
import ExpPreview from "./ExpPreview";
import EduPreview from "./EduPreview";
import PersInfo from "./PersInfo";
import EduInfo from "./EduInfo";
import ExpInfo from "./ExpInfo";

const Main = () => {
  const [persInfo, setPersInfo] = useState({
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    phone: "",
    address: "",
    about: ""
  });

  const [expInfo, setExpInfo] = useState({
    jobtitle: "",
    description: "",
    company: "",
    location: "",
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
    setPersInfo((prevInfo) => {
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
    <div className="main">
      <div className="container">
        <PersInfo onchange={handlePersChange} persInfo={persInfo} />
        <ExpInfo onchange={handleExpChange} expInfo={expInfo} />
        <EduInfo onchange={handleEduChange} eduInfo={eduInfo} />
      </div>
      <div className="container">
        <PersPreview {...{ ...persInfo }} />
        <ExpPreview {...{ ...expInfo }} />
        <EduPreview {...{ ...eduInfo }} />
      </div>
    </div>
  );
};

export default Main;
