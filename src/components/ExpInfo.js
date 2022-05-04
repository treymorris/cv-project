import React from "react";

const ExpInfo = ({ expInfo, onchange }) => {
  
  return (
    <div className="inputBox">
      <h2 className="infoHeader">Experience</h2>
      <form className="gridContainer">
        <input
          type="text"
          name="jobtitle"
          placeholder="Job Title"
          onChange={onchange}
          value={expInfo.jobtitle}
          required
        />


        <input
          type="text"
          name="company"
          placeholder="Company"
          onChange={onchange}
          value={expInfo.company}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={onchange}
          value={expInfo.location}
          required
        />

        <input
          type="text"
          name="from"
          placeholder="From"
          onChange={onchange}
          value={expInfo.from}
          required
        />

        <input
          type="text"
          name="to"
          placeholder="To"
          onChange={onchange}
          value={expInfo.to}
          required
        />

        <div className="main">
          <button className="addBtn">Add</button>
          <button className="delBtn" >Delete</button>
        </div>
      </form>
    </div>
  );
};

export default ExpInfo;
