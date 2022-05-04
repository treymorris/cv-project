const PersPreview = (props) => {
  return (
    <div className="gridContainer">
      <h1 className="previewTitle">
        {props.firstName} {props.lastName}
      </h1>
      <div className="persInfoDisplayTitle">{props.title}</div>

      <div className="sidebar-container">
        <div className="sidebar">
          <img
            src="https://st2.depositphotos.com/9998432/48284/v/1600/depositphotos_482842120-stock-illustration-default-avatar-photo-placeholder-grey.jpg"
            alt=""
          ></img>
          <div className="persInfoDisplay">{props.email}</div>
          <div className="persInfoDisplay">{props.address}</div>
          <div className="persInfoDisplay">{props.phone}</div>
        </div>
      </div>
      <h3 className="previewHeader">About</h3>
      <p className="displayField">{props.about}</p>
    </div>
  );
};

export default PersPreview;
