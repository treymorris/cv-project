const ExpPreview = ({ cvInfo }) => {
  return (
    <div>
      <h3 className="previewHeader">Experience</h3>
      {cvInfo.expInfo.map((info) => (
        <div key={info.id}>
          <div className="displayField">
            <p className="displayFieldTitle">{info.from} -</p>
            <p className="displayFieldTitle">{info.to}</p>
            <p className="displayFieldTitle">{info.jobtitle}</p>
          </div>
          <div className="displayField">
            <p className="displayText">{info.company}</p>
            <p className="displayText">, {info.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpPreview;
