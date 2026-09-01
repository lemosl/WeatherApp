 
 import axios from "axios";



const key = import.meta.env.VITE_WEATHER_API_KEY;

export const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt&units=metric`
    const response = await(axios.get(url))
    return(response.data)
} 


export const getForecast = async (city) => {
     const url_5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt&units=metric`;
     const response = await(axios.get(url_5days))
     return(response.data)

}
