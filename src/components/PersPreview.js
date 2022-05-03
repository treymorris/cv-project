const PersPreview = (props) => {
  return (
    <div className="gridContainer">
      <h1>
        {props.firstName} {props.lastName}
      </h1>
      <div className="persInfoDisplay">{props.title}</div>
      <div className="persInfoDisplay">{props.email}</div>
      <div className="persInfoDisplay">{props.phone}</div>
      <div className="persInfoDisplay">{props.address}</div>
    </div>
  );
};

export default PersPreview;
