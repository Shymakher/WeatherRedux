import {combineReducers} from 'redux';
import WeatherReducer from './redux_weather';

const rootReducer = combineReducers({
    weather: WeatherReducer
});

export default rootReducer;
