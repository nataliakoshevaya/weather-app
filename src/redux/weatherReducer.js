const SET_WEATHER = "SET-WEATHER";
const SET_CITY = "SET-CITY"
const InitialState = {
    weather: [],
    city: ""
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

export default weatherReducer;