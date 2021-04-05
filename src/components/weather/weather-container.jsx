import { connect } from "react-redux";
import Weather from "./weather";
import {getSearchError} from '../../redux/errorReducer'


let mapStateToProp = (state) => ({
    weather: state.weather.weather,
    city: state.weather.city,
    isFetching: state.weather.isFetching,
    searchError: state.error.searchError
})

const WeatherContainer = connect(mapStateToProp, {getSearchError})(Weather);

export default WeatherContainer;

