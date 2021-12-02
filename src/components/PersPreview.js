const PersPreview = (props) => {

    return (
            <div className="inputBox">
                <h1>{props.firstName} {props.lastName}</h1>
                <div>Title: {props.title}</div>
                <div>E-Mail: {props.email}</div>
                <div>Phone: {props.phone}</div>
                <div>Address: {props.address}</div>
            </div>
        )
    };

export default PersPreview;
