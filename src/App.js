import React, { useState } from "react";
import './App.css';
import PersPreview from "./components/PersPreview";
import ExpPreview from "./components/ExpPreview";
import EduPreview from "./components/EduPreview";

const App = (props) => {

  const [personalInfo, setPersonalInfo] = useState({});
  const [expInfo, setExpInfo] = useState({});
  const [eduInfo, setEduInfo] = useState({});

const handlePersChange = (e) => {
  const { name, value } = e.target;
  setPersonalInfo((prevInfo) => {
      let newInfo = { ...prevInfo, [name]: value};
      return newInfo;
  });
};

const handleExpChange = (e) => {
  const { name, value } = e.target;
  setExpInfo((prevInfo) => {
      let newInfo = { ...prevInfo, [name]: value};
      return newInfo;
  });
};

const handleEduChange = (e) => {
  const { name, value } = e.target;
  setEduInfo((prevInfo) => {
      let newInfo = { ...prevInfo, [name]: value};
      return newInfo;
  });
};
const { firstName, lastName, title, email, phone, address } = personalInfo;
const { jobtitle, description, company, jobLocation, from, to } = expInfo;
const { school, schoolLocation, degree, honors, educationFrom, educationTo } = eduInfo;
  
return (
      <div>
        <h1>Create CV with React!</h1>
        <div className="mainPage">
          <div className="container">
            <div className="inputBox">
                 <h2>Personal Info</h2>
                    <form className="gridContainer">
                        <input type="text"
                               placeholder="First Name"
                               name="firstName"
                               onChange={handlePersChange}
                               value={firstName}
                               required
                        />

                        <input type="text"
                               placeholder="Last Name"
                               name="lastName"
                               onChange={handlePersChange}
                               value={lastName}
                               required
                        />

                        <input type="text" 
                               name="title"
                               placeholder="Title"
                               onChange={handlePersChange}
                               value={title}
                               required
                        />
                            
                        <input type="email"
                               name="email"
                               placeholder="E-mail"
                               onChange={handlePersChange}
                               value={email}
                        />
                            
                        <input type="tel" 
                               name="phone"
                               placeholder="Phone Number"
                               onChange={handlePersChange}        
                               value={phone}
                               required
                        />
                            
                        <input type="text" 
                               name="address"
                               placeholder="Address"
                               className="address"
                               onChange={handlePersChange}
                               value={address}
                        />
                     </form>
            </div>
            <div className="inputBox">
                <h2>Experience</h2>
                    <form className="gridContainer">
                        <input type="text" 
                               name="jobtitle"
                               placeholder="Job Title"
                               onChange={handleExpChange}
                               value={jobtitle}
                               required
                        />

                        <input type="text" 
                               name="description"
                               placeholder="Description"
                               onChange={handleExpChange}
                               value={description}
                               required
                        />
                        
                        <input type="text"
                               name="company"
                               placeholder="Company"
                               onChange={handleExpChange}
                               value={company}
                               required
                        />
                        
                        <input type="text"
                               name="joblocation" 
                               placeholder="Location"
                               onChange={handleExpChange}
                               value={jobLocation}
                               required
                        />

                        <input type="text"
                               name="from" 
                               placeholder="From"
                               onChange={handleExpChange}
                               value={from}
                               required
                        />

                        <input type="text"
                               name="to" 
                               placeholder="To"
                               onChange={handleExpChange}
                               value={to}
                               required
                        />

                        <input type="submit"
                               name="delete"
                               value="Delete"
                        />

                        <input type="submit"
                               name="add"
                               value="Add"
                        />
                        
                    </form>
            </div>
            <div className="inputBox">
                <h2>Education</h2>
                <form className="gridContainer">
                    <input type="text" 
                           name="school"
                           placeholder="School Name"
                           onChange={handleEduChange}
                           value={school}
                           required
                    />
                    
                    <input type="text"
                           name="location"
                           placeholder="Location"
                           onChange={handleEduChange}
                           value={schoolLocation}
                           required
                    />
                    
                    <input type="text"
                           name="degree"
                           placeholder="Degree/Certification"
                           onChange={handleEduChange}
                           value={degree}
                           required
                    />
                    
                    <input type="text"
                           name="degree"
                           placeholder="Honors/Awards"
                           onChange={handleEduChange}
                           value={honors}
                    />

                    <input type="text"
                           name="educationFrom" 
                           placeholder="From"
                           onChange={handleEduChange}
                           value={educationFrom}
                           required
                    />

                    <input type="text"
                           name="educationTo" 
                           placeholder="To"
                           onChange={handleEduChange}
                           value={educationTo}
                           required
                    />

                    <input type="submit"
                           name="delete"
                           value="Delete"
                    />

                    <input type="submit"
                           name="add"
                           value="Add"
                    />
                </form>
            </div>
          </div>
          <div className="container">
            <PersPreview {...{ ...personalInfo }}/>
            <ExpPreview {...{ ...expInfo }}/>
            <EduPreview {...{ ...eduInfo }}/>
          </div>
        </div>
      </div>
    )
  };


export default App