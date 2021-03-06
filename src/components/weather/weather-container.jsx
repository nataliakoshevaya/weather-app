import { connect } from "react-redux";
import { setWeatherAC } from "../../redux/weatherReducer";
import Weather from "./weather";

let mapStateToProp = (state) => {
    return {
        weather: state.weather,
        city: state.city, 
        apiWeatherKey: state.apiWeatherKey
    }
};

const WeatherContainer = connect(mapStateToProp)(Weather);

export default WeatherContainer;

