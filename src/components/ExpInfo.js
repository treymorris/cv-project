import React from "react";

const ExpInfo = ({ cvInfo, onchange, onclickAdd, onclickDelete }) => {
  return (
    <div className="inputBox">
      <h2 className="infoHeader">Experience</h2>
      {cvInfo.expInfo.map((info) => (
        <div key={info.id}>
          <div className="gridContainer">
            <input
              type="text"
              name="jobtitle"
              placeholder="Job Title"
              onChange={(e) => onchange(e, info.id)}
              value={info.jobtitle || ""}
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              onChange={(e) => onchange(e, info.id)}
              value={info.company || ""}
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              onChange={(e) => onchange(e, info.id)}
              value={info.location || ""}
              required
            />
            <input
              type="text"
              name="from"
              placeholder="From"
              onChange={(e) => onchange(e, info.id)}
              value={info.from || ""}
              required
            />
            <input
              type="text"
              name="to"
              placeholder="To"
              onChange={(e) => onchange(e, info.id)}
              value={info.to || ""}
              required
            />
            <div className="main">
              <button className="addBtn" onClick={onclickAdd}>
                Add
              </button>
              <button className="delBtn" onClick={()=> onclickDelete(info.id)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpInfo;
