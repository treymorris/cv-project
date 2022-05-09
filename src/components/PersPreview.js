const PersPreview = ({ cvInfo }) => {
  return (
    <div className="gridContainer">
      <h1 className="previewTitle">
        {cvInfo.persInfo.firstName} {cvInfo.persInfo.lastName}
      </h1>
      <div className="persInfoDisplayTitle">{cvInfo.persInfo.title}</div>
      <div className="sidebar-container">
        <div className="sidebar">
          <img
            src="https://st2.depositphotos.com/9998432/48284/v/1600/depositphotos_482842120-stock-illustration-default-avatar-photo-placeholder-grey.jpg"
            alt=""
          ></img>
          <div className="persInfoDisplay">{cvInfo.persInfo.email}</div>
          <div className="persInfoDisplay">{cvInfo.persInfo.address}</div>
          <div className="persInfoDisplay">{cvInfo.persInfo.phone}</div>
        </div>
      </div>
      <h3 className="previewHeader">About</h3>
      <p className="displayField">{cvInfo.persInfo.about}</p>
    </div>
  );
};

export default PersPreview;
