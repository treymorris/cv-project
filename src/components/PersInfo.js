import React from "react";

const PersInfo = ({ cvInfo, onchange }) => {
  return (
    <div className="inputBox">
      <h2 className="infoHeader">Personal Info</h2>
      <form className="gridContainer">
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={onchange}
          value={cvInfo.persInfo.firstName}
          required
        />

        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={onchange}
          value={cvInfo.persInfo.lastName}
          required
        />

        <input
          type="text"
          placeholder="Title"
          name="title"
          onChange={onchange}
          value={cvInfo.persInfo.title}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={onchange}
          value={cvInfo.persInfo.email}
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          className="address"
          onChange={onchange}
          value={cvInfo.persInfo.address}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          onChange={onchange}
          value={cvInfo.persInfo.phone}
          required
        />

        <textarea
          name="about"
          placeholder="About Me"
          onChange={onchange}
          value={cvInfo.persInfo.description}
          required
        />
      </form>
    </div>
  );
};

export default PersInfo;
