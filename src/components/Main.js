import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useReactToPrint } from "react-to-print";
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

  const handlePersChange = (e) => {
    const { name, value } = e.target;
    setCvInfo((prevState) => ({
      ...prevState, persInfo: {
        ...prevState.persInfo, [name]: value
      }
    }))
  }

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

  const handleExpDelete = (id) => {
    console.log('delete', id)
    setCvInfo((prevState) => {
      const newExperience = prevState.expInfo.filter(
        (experienceItem) => experienceItem.id !== id
      );
      return { ...prevState, expInfo: [...newExperience] };
    });
  };

  const handleEduChange = (e, id) => {
    const { name, value } = e.target;
    setCvInfo((prevState) => {
      const newEducation = prevState.eduInfo.map((educationItem) => {
        if (educationItem.id === id) {
          return { ...educationItem, [name]: value };
        }
        return educationItem;
      });
      return { ...prevState, eduInfo: [...newEducation] };
    });
  };

  const handleEduAdd = () => {
    setCvInfo((prevState) => ({
      ...prevState,
      eduInfo: [
        ...prevState.eduInfo,
        {
          id: uuidv4(),
          school: "",
          schoolLocation: "",
          degree: "",
          honors: "",
          educationFrom: "",
          educationTo: "",
        },
      ],
    }));
  };

  const handleEduDelete = (id) => {
    
    setCvInfo((prevState) => {
      const newExperience = prevState.eduInfo.filter(
        (experienceItem) => experienceItem.id !== id
      );
      return { ...prevState, eduInfo: [...newExperience] };
    });
  };

  const componentRef = useRef();

  const handlePrint = useReactToPrint({ content: () => componentRef.current})

  return (
    <div className="main">
      <div className="container">
        <PersInfo onchange={handlePersChange} cvInfo={cvInfo} />
        <ExpInfo
          onchange={handleExpChange}
          cvInfo={cvInfo}
          onclickAdd={handleExpAdd}
          onclickDelete={handleExpDelete}
        />
        <EduInfo
          onchange={handleEduChange}
          cvInfo={cvInfo}
          onclickAdd={handleEduAdd}
          onclickDelete={handleEduDelete}
        />
        <div className="main resetBtnGroup">
          <button className="warning" >Reset</button>
          <button className="success" onClick={handlePrint} >Print/Pdf</button>
        </div>
      </div>
      <div className="container" ref={componentRef}>
        <PersPreview cvInfo={cvInfo} />
        <ExpPreview cvInfo={cvInfo} />
        <EduPreview cvInfo={cvInfo} />
      </div>
    </div>
  );
};

export default Main;
