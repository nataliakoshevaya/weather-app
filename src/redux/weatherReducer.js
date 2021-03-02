const SET_WEATHER = "SET-WEATHER";

const InitialState = {
    weather: {}
};


const weatherReducer = (state = InitialState, action) => {
    switch(action.type) {
        case "SET-WEATHER":
          return {
              ...state,
              weather: action.weather
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


export default weatherReducer;