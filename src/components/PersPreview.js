const PersPreview = (props) => {
  return (
    <div className="gridContainer">
      <h1 className="previewTitle">
        {props.firstName} {props.lastName}
      </h1>
      <div className="persInfoDisplayTitle">{props.title}</div>
      <div className="persInfoDisplay">{props.email}</div>
      <div className="persInfoDisplay">{props.address}</div>
      <div className="persInfoDisplay">{props.phone}</div>
    </div>
  );
};

export default PersPreview;
