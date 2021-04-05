import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Component } from 'react';
import { connect } from 'react-redux';
import { getCity, setWeather, isFetching} from '../../redux/weatherReducer';
import {getSearchError} from '../../redux/errorReducer'
import axios from 'axios';

class SearchPanel extends Component {
    getCityForState = (e) => {
        if(e.target.value === '') { console.log(this.props) }
        
        let city = e.target.value
        this.props.getCity(city)
    }

    getWeather = (e) => {
        e.preventDefault();
            this.props.isFetching(false)
            axios
                .get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.props.city}&appid=6e215ba5ef08bdf570de5cd7304cd8cf&units=metric`)
                .then(response => {
                        this.props.isFetching(true);
                        this.props.setWeather(response.data);
                })
                .catch((error) => {
                    console.log('Error', error.message);
                    this.props.getSearchError(true)
                    setTimeout(() => this.props.getSearchError(false), 2000)
                })
    };
 
    
    render() {
        return (
            <div className="mb-3">
                <form onSubmit={this.getWeather}>
                <div className="input-group">
                    <input 
                            type="text"  
                            name="city"
                            onChange={this.getCityForState}
                            value = {this.props.city}
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
        weather: state.weather.weather,
        city: state.weather.city,
        searchError: state.error.searchError
    }
}



const SearchPanelContainer = connect(mapStateToProp, {getCity, setWeather, isFetching, getSearchError})(SearchPanel);

export default SearchPanelContainer;