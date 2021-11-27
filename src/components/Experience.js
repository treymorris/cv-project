import React, { Component } from "react";

export class Experience extends Component {
    render() {
        return (
            <div className="inputBox">
                <h2>Experience</h2>
                    <form className="gridContainer">
                        <input type="text" 
                               name="jobtitle"
                               placeholder="Job Title"
                               //onChange={handleChange}
                               //value={jobtitle}
                               required
                        />

                        <input type="text" 
                               name="description"
                               placeholder="Description"
                               //onChange={handleChange}
                               //value={description}
                               required
                        />
                        
                        <input type="text"
                               name="company"
                               placeholder="Company"
                               //onchange{handleChange}
                               //value={company}
                               required
                        />
                        
                        <input type="text"
                               name="joblocation" 
                               placeholder="Location"
                               //onChange={handleChange}
                               //value={jobLocation}
                               required
                        />

                        <input type="text"
                               name="from" 
                               placeholder="From"
                               //onChange={handleChange}
                               //value={from}
                               required
                        />

                        <input type="text"
                               name="to" 
                               placeholder="To"
                               //onChange={handleChange}
                               //value={to}
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
    }
}