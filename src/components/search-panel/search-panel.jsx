import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Component } from 'react';
import { connect } from 'react-redux';
import { getCityAC, setWeatherAC } from '../../redux/weatherReducer';
import axios from 'axios';
const apiConfig = process.env.REACT_APP_API_KEY;

class SearchPanel extends Component {
    getWeather = (e) => {
        e.preventDefault();

        const city = e.target.elements.city.value;
        this.props.setCity(city);

        axios
            .get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiConfig}&units=metric`)
            .then(response => {
                this.props.setWeather(response.data)
        })
    }

    render() {
        return (
            <div className="mb-3">
                <form onSubmit={this.getWeather}>
                <div className="input-group">
                    <input 
                            type="text"  
                            name="city"
                            className="form-control" 
                            placeholder="Search for a city..." 
                            />
                    <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                </div>
            </form>
            </div>
        )
    }
}

let mapStateToProp = (state) => {
    return {
        weather: state.weather,
        city: state.city
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
       setWeather: (weather) => {
           dispatch(setWeatherAC(weather))
       },
       setCity: (city) =>{
        dispatch(getCityAC(city))
       }
    }
}

const SearchPanelContainer = connect(mapStateToProp, mapDispatchToProps)(SearchPanel);

export default SearchPanelContainer;