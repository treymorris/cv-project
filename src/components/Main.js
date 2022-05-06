import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PersPreview from "./PersPreview";
import ExpPreview from "./ExpPreview";
import EduPreview from "./EduPreview";
import PersInfo from "./PersInfo";
import EduInfo from "./EduInfo";
import ExpInfo from "./ExpInfo";

const Main = () => {
  const [cvInfo, setCvInfo] = useState({
    persInfo: {
      firstName: "",
      lastName: "",
      title: "",
      email: "",
      phone: "",
      address: "",
      about: "",
    },
    expInfo: [
      {
        jobtitle: "",
        description: "",
        company: "",
        location: "",
        from: "",
        to: "",
        id: uuidv4(),
      },
    ],
    eduInfo: [
      {
        school: "",
        schoolLocation: "",
        degree: "",
        honors: "",
        educationFrom: "",
        educationTo: "",
        id: uuidv4(),
      },
    ],
  });

  const [persInfo, setPersInfo] = useState({
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    phone: "",
    address: "",
    about: "",
  });

  const [eduInfo, setEduInfo] = useState([
    {
      school: "",
      schoolLocation: "",
      degree: "",
      honors: "",
      educationFrom: "",
      educationTo: "",
      id: uuidv4(),
    },
  ]);

  const handlePersChange = (e) => {
    const { name, value } = e.target;
    setPersInfo((prevInfo) => {
      return { ...prevInfo, [name]: value };
    });
  };

  const handleExpChange = (e, id) => {
    const { name, value } = e.target;
    setCvInfo((prevState) => {
      const newExperience = prevState.expInfo.map((experienceItem) => {
        if (experienceItem.id === id) {
          return { ...experienceItem, [name]: value };
        }
        return experienceItem;
      });
      return { ...prevState, expInfo: [...newExperience] };
    });
  };

  const handleExpAdd = () => {
    setCvInfo((prevState) => ({
      ...prevState,
      expInfo: [
        ...prevState.expInfo,
        {
          id: uuidv4(),
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
        },
      ],
    }));
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
        <ExpInfo
          onchange={handleExpChange}
          cvInfo={cvInfo}
          onclickAdd={handleExpAdd}
        />
        <EduInfo onchange={handleEduChange} eduInfo={eduInfo} />
      </div>
      <div className="container">
        <PersPreview persInfo={persInfo} />
        <ExpPreview cvInfo={cvInfo} />
        <EduPreview eduInfo={eduInfo} />
      </div>
    </div>
  );
};

export default Main;
