import './style.css'
import React from "react";



function WeatherResults5days({ weather5days }) {

    let dailyForecast = {}

    for (let forecast of weather5days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()

        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast
        }

    }

    const FiveDays = Object.values(dailyForecast).slice(1,6)
    console.log(FiveDays)

    console.log(dailyForecast)

    function convertDate(date) {
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt', { weekday: 'long', day: '2-digit' })
        return newDate
    }



    return (
        <div className='container5days'>
            <h3>Precisão Próximos 5 dias</h3>
            <div className='weather-list'>
                {FiveDays.map(forecast => (
                    <div key={forecast.dt} className='weather-item'>
                        <p className='forecast-day'>{convertDate(forecast)}</p>
                        <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="" />
                        <p className='forecast-description'>{forecast.weather[0].description}</p>
                        <p>{Math.round(forecast.main.temp_min)}min / {Math.round(forecast.main.temp_max)}máx </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default WeatherResults5days