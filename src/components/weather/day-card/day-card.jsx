const DayCard = (props) => {
    return (
        <div className="col mb-4">
           <div className="card h-100">
           <div className="currentDay">{props.day}</div>
            <div className="currentTemp">{props.temp} &#8451;</div>
            <div className="currentDescription">{props.description}</div>
            <i className={props.icon}></i>
           </div>
        </div>
    );
};

export default DayCard;