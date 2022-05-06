const PersPreview = ({ persInfo }) => {
  return (
    <div className="gridContainer">
      <h1 className="previewTitle">
        {persInfo.firstName} {persInfo.lastName}
      </h1>
      <div className="persInfoDisplayTitle">{persInfo.title}</div>
      <div className="sidebar-container">
        <div className="sidebar">
          <img
            src="https://st2.depositphotos.com/9998432/48284/v/1600/depositphotos_482842120-stock-illustration-default-avatar-photo-placeholder-grey.jpg"
            alt=""
          ></img>
          <div className="persInfoDisplay">{persInfo.email}</div>
          <div className="persInfoDisplay">{persInfo.address}</div>
          <div className="persInfoDisplay">{persInfo.phone}</div>
        </div>
      </div>
      <h3 className="previewHeader">About</h3>
      <p className="displayField">{persInfo.about}</p>
    </div>
  );
};

export default PersPreview;
