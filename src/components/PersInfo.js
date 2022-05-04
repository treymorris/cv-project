import React from "react";

const PersInfo = ({ persInfo, onchange }) => {
  return (
    <div className="inputBox">
      <h2 className="infoHeader">Personal Info</h2>
      <form className="gridContainer">
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={onchange}
          value={persInfo.firstName}
          required
        />

        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={onchange}
          value={persInfo.lastName}
          required
        />

        <input
          type="text"
          placeholder="Title"
          name="title"
          onChange={onchange}
          value={persInfo.title}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={onchange}
          value={persInfo.email}
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          className="address"
          onChange={onchange}
          value={persInfo.address}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          onChange={onchange}
          value={persInfo.phone}
          required
        />

        <textarea
          name="about"
          placeholder="About Me"
          onChange={onchange}
          value={persInfo.description}
          required
        />

      </form>
    </div>
  );
};

export default PersInfo;
