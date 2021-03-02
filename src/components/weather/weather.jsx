import axios from "axios";
import React, { Component } from "react";
import CurrentWeatherDay from "./current-weather-day/current-weather-day";
import DayCard from "./day-card/day-card";
import style from './weather.module.css'


class Weather extends Component {
    componentDidMount() {
        axios
            .get('https://api.openweathermap.org/data/2.5/forecast?q=Kharkiv&appid=6e215ba5ef08bdf570de5cd7304cd8cf&units=metric')
            .then(response => {
                this.props.setWeather(response.data)
        })
    };

    render() {
        if (!this.props.weather.list) {
            return <span>Loading...</span>;
        }

        let currentWeather = this.props.weather.list[0];
        let iconCode = currentWeather.weather[0].id
        let iconUrl = `owf owf-${iconCode} owf-5x`;
        let dayData = currentWeather.dt_txt.split(' ');
        let d = new Date(dayData);

        function getZero(num) {
            if (num <= 10) {
                return `0${num}`
            } else {
                return num
            }
        }
        let minutes = getZero(d.getMinutes());
        let hours = getZero(d.getHours());

        function getWeekDay(day) {
            let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

            return days[day.getDay()]
        }

        let day = getWeekDay(d);
        
        let dailyData = this.props.weather.list.filter(reading => reading.dt_txt.includes("18:00:00")).slice(1);
        
        let filterData = dailyData.map(day => {
            let dayData = day.dt_txt.split(' ');
            let d = new Date(dayData);
            let data = getWeekDay(d);
            let iconCode = day.weather[0].id;
            let iconUrl = `owf owf-${iconCode} owf-5x`;
            return <DayCard 
                            day={data}
                            temp={Math.round(day.main.temp)}
                            description={day.weather[0].description}
                            icon={iconUrl}/>
        })

        return (
            <div className={style.wrapper}>
                <CurrentWeatherDay
                    key={this.props.weather.id}
                    city={this.props.weather.city.name}
                    country={this.props.weather.city.country}
                    temperature={Math.round(currentWeather.main.temp)}
                    icon={iconUrl}
                    description={currentWeather.weather[0].description}
                    day={day}
                    hours={hours}
                    minutes={minutes}
                    windSpeed={currentWeather.wind.speed}
                    pressure={currentWeather.main.pressure}
                    humidity={currentWeather.main.humidity}
                    clodness={currentWeather.clouds.all}
                />
                
                <div className="row">
                 {filterData}
              </div> 
          </div>
        );
    }
}

export default Weather;