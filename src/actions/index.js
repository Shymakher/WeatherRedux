import axios from 'axios';

const API_KEY = '7b7a82089dc2cab6ea819c4ddaddc3d0';
const metrics = '&units=metric';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?${metrics}&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
};