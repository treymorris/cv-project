import React from "react";

const PersInfo = (props) => {
    
        return (
            <div className="inputBox">
                 <h2>Personal Info</h2>
                    <form className="gridContainer">
                        <input type="text"
                               placeholder="First Name"
                               name="firstName"
                               onChange={props.onchange}
                               value={props.firstName}
                               required
                        />

                        <input type="text"
                               placeholder="Last Name"
                               name="lastName"
                               onChange={props.onchange}
                               value={props.lastName}
                               required
                        />

                        <input type="text" 
                               placeholder="Title"
                               name="title"
                               onChange={props.onchange}
                               value={props.title}
                               required
                        />
                            
                        <input type="email"
                               name="email"
                               placeholder="E-mail"
                               onChange={props.onchange}
                               value={props.email}
                               required
                        />
                            
                        <input type="tel" 
                               name="phone"
                               placeholder="Phone Number"
                               onChange={props.onchange}        
                               value={props.phone}
                               required
                        />
                            
                        <input type="text" 
                               name="address"
                               placeholder="Address"
                               className="address"
                               onChange={props.onchange}
                               value={props.address}
                        />
                     </form>
            </div>
        )
    };

export default PersInfo;