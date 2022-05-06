const EduPreview = ({ eduInfo }) => {
  return (
    <div>
      <h3 className="previewHeader">Education</h3>
      <div className="displayField">
        <p className="displayFieldTitle">{eduInfo.educationFrom} -</p>
        <p className="displayFieldTitle">{eduInfo.educationTo}</p>
        <p className="displayFieldTitle">{eduInfo.school}</p>
      </div>
      <div className="displayField">
        <p className="displayText">{eduInfo.schoolLocation}</p>
      </div>
      <div className="displayField">
        <p className="displayText">{eduInfo.degree}</p>
      </div>
      <div className="displayField">
        <p className="displayText">{eduInfo.honors}</p>
      </div>
    </div>
  );
};

export default EduPreview;
