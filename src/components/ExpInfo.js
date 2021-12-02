import React from "react";

const ExpInfo = (props) => {
    
        return (
            <div className="inputBox">
                <h2>Experience</h2>
                    <form className="gridContainer">
                        <input type="text" 
                               name="jobtitle"
                               placeholder="Job Title"
                               onChange={props.onchange}
                               value={props.jobtitle}
                               required
                        />

                        <input type="text" 
                               name="description"
                               placeholder="Description"
                               onChange={props.onchange}
                               value={props.description}
                               required
                        />
                        
                        <input type="text"
                               name="company"
                               placeholder="Company"
                               onChange={props.onchange}
                               value={props.company}
                               required
                        />
                        
                        <input type="text"
                               name="joblocation" 
                               placeholder="Location"
                               onChange={props.onchange}
                               value={props.jobLocation}
                               required
                        />

                        <input type="text"
                               name="from" 
                               placeholder="From"
                               onChange={props.onchange}
                               value={props.from}
                               required
                        />

                        <input type="text"
                               name="to" 
                               placeholder="To"
                               onChange={props.onchange}
                               value={props.to}
                               required
                        />

                        <input type="submit"
                               name="delete"
                               value="Delete"
                        />

                        <input type="submit"
                               name="add"
                               value="Add"
                        />
                        
                    </form>
            </div>
        )
    };

export default ExpInfo;