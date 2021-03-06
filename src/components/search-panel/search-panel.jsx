import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Component } from 'react';
import { connect } from 'react-redux';
import { getCityAC, setWeatherAC, setWeatherApiKeyAC } from '../../redux/weatherReducer';
import axios from 'axios';

class SearchPanel extends Component {
    getWeather = (e) => {
        e.preventDefault();
        const text = e.target.elements.city.value;

        if(!this.props.apiWeatherKey) {
            this.props.setKey(text)
        }
        
        this.props.setCity(text);
        
        axios
            .get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.props.city}&appid=${this.props.apiWeatherKey}&units=metric`)
            .then(response => {
                this.props.setWeather(response.data)
        })
       
        e.target.elements.city.value = ''

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
        city: state.city,
        apiWeatherKey: state.apiWeatherKey
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
       setWeather: (weather) => {
           dispatch(setWeatherAC(weather))
       },
       setCity: (city) =>{
        dispatch(getCityAC(city))
       },
       setKey: (key) => {
           dispatch(setWeatherApiKeyAC(key))
       }
    }
}

const SearchPanelContainer = connect(mapStateToProp, mapDispatchToProps)(SearchPanel);

export default SearchPanelContainer;