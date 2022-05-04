const ExpPreview = (props) => {
  return (
    <div>
      <h3 className="previewHeader">Experience</h3>
      <div className="displayField">
        <p className="displayFieldTitle">{props.from} -</p>
        <p className="displayFieldTitle">{props.to}</p>
        <p className="displayFieldTitle">{props.jobtitle}</p>
      </div>
      <div className="displayField">
        <p className="displayText">{props.company}</p>
        <p className="displayText">, {props.location}</p>
      </div>
    </div>
  );
};

export default ExpPreview;
