const CurrentWeatherDay = (props) => {
    return (
        <div className="wrapper card mb-4">
            <div className="weather__location">
                <div className="weather__location--city">{props.city}</div>
                <div className="weather__location--country">{props.country}</div>
            </div>
            <div className="weather__temperature">{props.temperature} &#8451;</div>
            <div className="weather__icon">
                <i className={props.icon}></i>
            </div>
            <div className="weather__description">
                {props.description}
            </div>
            <div className='weather__daytime'>
                <div className="weather__daytime--day">{props.day}</div>
                <div className="weather__daytime--time">{props.hours} : {props.minutes}</div>
            </div>
            <div className="weather__windy">Wind: {props.windSpeed} m/s</div>
            <div className="weather__press">Pressure: {props.pressure} hPa</div>
            <div className="weather__humidity">Humidity: {props.humidity}%</div>
            <div className="weather__cloudness">Clodness: {props.clodness}%</div>
        </div>
    );
};


export default CurrentWeatherDay;

