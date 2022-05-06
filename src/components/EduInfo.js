import React from "react";

const EduInfo = ({ eduInfo, onchange }) => {
  return (
    <div className="inputBox">
      <h2 className="infoHeader">Education</h2>
      <form className="gridContainer">
        <input
          type="text"
          name="school"
          placeholder="School Name"
          onChange={onchange}
          value={eduInfo.school || ""}
          required
        />

        <input
          type="text"
          name="schoolLocation"
          placeholder="Location"
          onChange={onchange}
          value={eduInfo.schoolLocation || ""}
          required
        />

        <input
          type="text"
          name="degree"
          placeholder="Degree/Certification"
          onChange={onchange}
          value={eduInfo.degree || ""}
          required
        />

        <input
          type="text"
          name="honors"
          placeholder="Honors/Awards"
          onChange={onchange}
          value={eduInfo.honors || ""}
        />

        <input
          type="text"
          name="educationFrom"
          placeholder="From"
          onChange={onchange}
          value={eduInfo.educationFrom || ""}
          required
        />

        <input
          type="text"
          name="educationTo"
          placeholder="To"
          onChange={onchange}
          value={eduInfo.educationTo || ""}
          required
        />

        <div className="main">
          <button className="addBtn">Add</button>
          <button className="delBtn">Delete</button>
        </div>
      </form>
    </div>
  );
};

export default EduInfo;
