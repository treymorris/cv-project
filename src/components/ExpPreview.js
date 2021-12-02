const ExpPreview = (props) => {
    
        return(
            <div>
                <h2>Work Experience</h2>
                <div className="displayField">Job Title: {props.jobtitle}</div>
                <div className="displayField">Description: {props.description}</div>
                <div className="displayField">Company Name: {props.company}</div>
                <div className="displayField">Location: {props.jobLocation}</div>
                <div className="displayField">Employed From: {props.from} To: {props.to}</div>
            </div>
        )
    }

export default ExpPreview;