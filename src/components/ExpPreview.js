const ExpPreview = (props) => {
  
  return (
    <div>
      <h2 className="previewHeader">Experience</h2>
      <div className="displayField">
        Job Title: <p className="displayText">{props.jobtitle}</p>
      </div>
      <div className="displayField">
        Description: <p className="displayText">{props.description}</p>
      </div>
      <div className="displayField">
        Company: <p className="displayText">{props.company}</p>
      </div>
      <div className="displayField">
        Location: <p className="displayText">{props.location}</p>
      </div>
      <div className="displayField">
        Employed From: <p className="displayText">{props.from}</p> To:{" "}
        <p className="displayText">{props.to}</p>
      </div>
    </div>
  );
};

export default ExpPreview;
