const EduPreview  = (props) => {
    
    return(
            <div>
                <h2>Education</h2>
                <div>School Name: {props.school}</div>
                <div>Location: {props.schoolLocation}</div>
                <div>Degree/Certifications: {props.degree}</div>
                <div>Honors/Awards: {props.honors}</div>
                <div>From: {props.educationFrom}</div>
                <div>To: {props.educationTo}</div>
            </div>
        )
    };

export default EduPreview;