const EduPreview = (props) => {
  return (
    <div>
      <h2>Education</h2>
      <div className="displayField">School Name: {props.school}</div>
      <div className="displayField">Location: {props.schoolLocation}</div>
      <div className="displayField">Degree/Certifications: {props.degree}</div>
      <div className="displayField">Honors/Awards: {props.honors}</div>
      <div className="displayField">From: {props.educationFrom}</div>
      <div className="displayField">To: {props.educationTo}</div>
    </div>
  );
};

export default EduPreview;
