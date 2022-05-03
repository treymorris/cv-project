import React from "react";

const EduInfo = (props) => {
  return (
    <div className="inputBox">
      <h2>Education</h2>
      <form className="gridContainer">
        <input
          type="text"
          name="school"
          placeholder="School Name"
          onChange={props.onchange}
          value={props.school}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={props.onchange}
          value={props.schoolLocation}
          required
        />

        <input
          type="text"
          name="degree"
          placeholder="Degree/Certification"
          onChange={props.onchange}
          value={props.degree}
          required
        />

        <input
          type="text"
          name="degree"
          placeholder="Honors/Awards"
          onChange={props.onchange}
          value={props.honors}
        />

        <input
          type="text"
          name="educationFrom"
          placeholder="From"
          onChange={props.onchange}
          value={props.educationFrom}
          required
        />

        <input
          type="text"
          name="educationTo"
          placeholder="To"
          onChange={props.onchange}
          value={props.educationTo}
          required
        />

        <input type="submit" name="delete" value="Delete" />

        <input type="submit" name="add" value="Add" />
      </form>
    </div>
  );
};

export default EduInfo;
