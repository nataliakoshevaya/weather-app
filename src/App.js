import './App.css';
import SearchPanel from './components/serach-panel/search-panel';
import WeatherItemContainer from './components/weather/weather-container';

function App() {
  return (
    <div className="App">
       <div className="container">
          <SearchPanel />
          <WeatherItemContainer />
 
        </div>
    </div>
  );
}

export default App;
