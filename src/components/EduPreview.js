const EduPreview = ({ cvInfo }) => {
  return (
    <div>
      <h3 className="previewHeader">Education</h3>
      {cvInfo.eduInfo.map((info) => (
        <div key={info.id}>
          <div className="displayField">
            <p className="displayFieldTitle">{info.educationFrom} -</p>
            <p className="displayFieldTitle">{info.educationTo}</p>
            <p className="displayFieldTitle">{info.school}</p>
          </div>
          <div className="displayField">
            <p className="displayText">{info.schoolLocation}</p>
          </div>
          <div className="displayField">
            <p className="displayText">{info.degree}</p>
          </div>
          <div className="displayField">
            <p className="displayText">{info.honors}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EduPreview;
