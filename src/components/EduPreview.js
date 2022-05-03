const EduPreview = (props) => {
  return (
    <div>
      <h2 className="previewHeader">Education</h2>
      <div className="displayField">
        School Name: <p className="displayText">{props.school}</p>
      </div>
      <div className="displayField">
        Location: <p className="displayText">{props.schoolLocation}</p>
      </div>
      <div className="displayField">
        Degree/Certifications: <p className="displayText">{props.degree}</p>
      </div>
      <div className="displayField">
        Honors/Awards: <p className="displayText">{props.honors}</p>
      </div>
      <div className="displayField">
        From: <p className="displayText">{props.educationFrom}</p>
      </div>
      <div className="displayField">
        To: <p className="displayText">{props.educationTo}</p>
      </div>
    </div>
  );
};

export default EduPreview;
