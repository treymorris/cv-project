// import React, { useState } from "react";

// const PersInfo = (props) => {
    
//      const [personalInfo, setPersonalInfo] = useState({
//          firstName: '',
//          lastName: ''
//      });

//      const handleChange = (e) => {
//          const { name, value } = e.target;
//          setPersonalInfo((prevInfo) => {
//             let newInfo = { ...prevInfo, [name]: value};
//             return newInfo;
//         });
//       };
     

//     const { firstName, lastName, title, email, phone, address } = personalInfo;

//     return (
//             <div className="inputBox">
//                  <h2>Personal Info</h2>
//                     <form className="gridContainer">
//                         <input type="text"
//                                placeholder="First Name"
//                                name="firstName"
//                                onChange={handleChange}
//                                value={firstName}
//                                required
//                         />

//                         <input type="text"
//                                placeholder="Last Name"
//                                name="lastName"
//                                onChange={handleChange}
//                                value={lastName}
//                                required
//                         />

//                         <input type="text" 
//                                name="title"
//                                placeholder="Title"
//                                onChange={handleChange}
//                                value={title}
//                                required
//                         />
                            
//                         <input type="email"
//                                name="email"
//                                placeholder="E-mail"
//                                onChange={handleChange}
//                                value={email}
//                         />
                            
//                         <input type="tel" 
//                                name="phone"
//                                placeholder="Phone Number"
//                                onChange={handleChange}        
//                                value={phone}
//                                required
//                         />
                            
//                         <input type="text" 
//                                name="address"
//                                placeholder="Address"
//                                className="address"
//                                onChange={handleChange}
//                                value={address}
//                         />
//                      </form>
//             </div>
//         )
//     }

//     export default PersInfo;