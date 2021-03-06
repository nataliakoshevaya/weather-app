import './App.css';
import SearchPanel from './components/search-panel/search-panel';
import WeatherItemContainer from './components/weather/weather-container';
import {Component} from 'react'



class App extends  Component {
 render() {
  return (
    <div className="App">
       <div className="container">
          <SearchPanel />
          <WeatherItemContainer />
        </div>
    </div>
  );
 }
}


export default App;
