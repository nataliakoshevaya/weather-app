import { connect } from "react-redux";
import { setWeatherAC } from "../../redux/weatherReducer";
import Weather from "./weather";

let mapStateToProp = (state) => {
    return {
        weather: state.weather
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setWeather: (weather) => {
            dispatch(setWeatherAC(weather))
        }
    }
}

const WeatherContainer = connect(mapStateToProp, mapDispatchToProps)(Weather);

export default WeatherContainer;

