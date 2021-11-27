import React, { Component } from "react";

export class Education extends Component {
    render() {
        return (
            <div className="inputBox">
                <h2>Education</h2>
                <form className="gridContainer">
                    <input type="text" 
                           name="school"
                           placeholder="School Name"
                           //onChange={handleChange}
                           //value={school}
                           required
                    />
                    
                    <input type="text"
                           name="location"
                           placeholder="Location"
                           //onChange={handleChange}
                           //value={schoolLocation}
                           required
                    />
                    
                    <input type="text"
                           name="degree"
                           placeholder="Degree/Certification"
                           //onChange={handleChange}
                           //value={degree}
                           required
                    />
                    
                    <input type="text"
                           name="degree"
                           placeholder="Honors/Awards"
                           //onChange={handleChange}
                           //value={honors}
                    />

                    <input type="text"
                           name="educationFrom" 
                           placeholder="From"
                           //onChange={handleChange}
                           //value={educationFrom}
                           required
                    />

                    <input type="text"
                           name="educationTo" 
                           placeholder="To"
                           //onChange={handleChange}
                           //value={educationTo}
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