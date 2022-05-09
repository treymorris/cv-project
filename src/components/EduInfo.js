import React from "react";

const EduInfo = ({ cvInfo, onchange, onclickAdd, onclickDelete }) => {
  return (
    <div className="inputBox">
      <h2 className="infoHeader">Education</h2>
      {cvInfo.eduInfo.map((info) => (
        <div key={info.id}>
          <div className="gridContainer">
            <input
              type="text"
              name="school"
              placeholder="School Name"
              onChange={(e) => onchange(e, info.id)}
              value={info.school || ""}
              required
            />
            <input
              type="text"
              name="schoolLocation"
              placeholder="Location"
              onChange={(e) => onchange(e, info.id)}
              value={info.schoolLocation || ""}
              required
            />
            <input
              type="text"
              name="degree"
              placeholder="Degree/Certification"
              onChange={(e) => onchange(e, info.id)}
              value={info.degree || ""}
              required
            />
            <input
              type="text"
              name="honors"
              placeholder="Honors/Awards"
              onChange={(e) => onchange(e, info.id)}
              value={info.honors || ""}
            />
            <input
              type="text"
              name="educationFrom"
              placeholder="From"
              onChange={(e) => onchange(e, info.id)}
              value={info.educationFrom || ""}
              required
            />
            <input
              type="text"
              name="educationTo"
              placeholder="To"
              onChange={(e) => onchange(e, info.id)}
              value={info.educationTo || ""}
              required
            />
            <div className="main">
              <button className="addBtn" onClick={onclickAdd}>
                Add
              </button>
              <button className="delBtn" onClick={() => onclickDelete(info.id)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EduInfo;
