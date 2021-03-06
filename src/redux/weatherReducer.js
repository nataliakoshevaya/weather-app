const SET_WEATHER = "SET-WEATHER";
const SET_CITY = "SET-CITY";
const SET_API_KEY = 'SET-API-KEY';

const InitialState = {
    weather: [],
    city: 'kharkiv',
    apiWeatherKey: ''
};


const weatherReducer = (state = InitialState, action) => {
    switch(action.type) {
        case "SET-WEATHER":
          return {
              ...state,
              weather: action.weather
          }
        case SET_CITY: 
         return {
             ...state,
            city: action.currentCity
        }  
        case SET_API_KEY: 
          return {
              ...state,
              apiWeatherKey: action.apiKey
          }
        default: return state
    }
};

export const setWeatherAC = (weather) => {
    return {
        type: SET_WEATHER,
        weather
    }
}

export const getCityAC = (currentCity) => {
    return {
        type: SET_CITY,
        currentCity
    }
}

export const setWeatherApiKeyAC = (apiKey) => {
    return {
        type: SET_API_KEY,
        apiKey
    }
}

export default weatherReducer;