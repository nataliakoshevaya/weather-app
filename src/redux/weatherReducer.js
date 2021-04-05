const SET_WEATHER = "SET-WEATHER";
const SET_CITY = "SET-CITY";
const SET_FETCHING_TOGGLE = 'SET_FETCHING_TOGGLE';

const InitialState = {
    weather: [],
    city: '',
    isFetching: false
};


const weatherReducer = (state = InitialState, action) => {
    switch(action.type) {
        case "SET-WEATHER":
          return {
              ...state,
              weather: action.weather,
              city:''
          }
        case SET_CITY: 
         return {
             ...state,
            city: action.currentCity
        }  
        case SET_FETCHING_TOGGLE:
            return {
                ...state,
                isFetching: action.toggle
        }  
        default: return state
    }
};

export const setWeather = (weather) => {
    return {
        type: SET_WEATHER,
        weather
    }
}

export const getCity = (currentCity) => {
    return {
        type: SET_CITY,
        currentCity
    }
}

export const isFetching = (toggle) => {
    return {
        type: SET_FETCHING_TOGGLE,
        toggle
    }
}

export default weatherReducer;