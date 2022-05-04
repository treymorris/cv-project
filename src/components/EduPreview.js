const EduPreview = (props) => {
  return (
    <div>
      <h3 className="previewHeader">Education</h3>
      <div className="displayField">
        <p className="displayFieldTitle">{props.educationFrom} -</p>
        <p className="displayFieldTitle">{props.educationTo}</p>
        <p className="displayFieldTitle">{props.school}</p>
      </div>
      <div className="displayField">
        <p className="displayText">{props.schoolLocation}</p>
      </div>
      <div className="displayField">
        <p className="displayText">{props.degree}</p>
      </div>
      <div className="displayField">
        <p className="displayText">{props.honors}</p>
      </div>
    </div>
  );
};

export default EduPreview;
