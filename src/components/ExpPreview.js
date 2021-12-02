const ExpPreview = (props) => {
    
        return(
            <div>
                <h2>Work Experience</h2>
                <h3>Job Title: {props.jobtitle}</h3>
                <div>Description: {props.description}</div>
                <div>Company Name: {props.company}</div>
                <div>Location: {props.jobLocation}</div>
                <div>Employed From: {props.from} To: {props.to}</div>
            </div>
        )
    }

export default ExpPreview;