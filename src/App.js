import './App.css';
import SearchPanel from './components/search-panel/search-panel';
import {Component} from 'react';
import WeatherContainer from './components/weather/weather-container';

class App extends  Component {
 render() {
  return (
    <div className="App">
       <div className="container">
          <SearchPanel />
          <WeatherContainer />
        </div>
    </div>
  );
 }
}


export default App;
