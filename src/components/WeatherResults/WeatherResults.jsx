import './style.css'
import React from 'react'


function WeatherResults({ weather }) {
    return (
        <div className='weather-container'>
            <h2>{weather.name}</h2>
            <div className='weather-info'>
                <p className='time'>
                    {new Date(
                        (Date.now() + weather.timezone * 1000)
                    ).toLocaleTimeString('pt-PT', {
                        hour: '2-digit',
                        minute: '2-digit',
                        timeZone: 'UTC'
                    })}
                </p>

                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} />
                <p className='temperature'>{Math.round(weather.main.temp)}°C</p>
            </div>
            <p className='description'>{weather.weather[0].description}</p>
            <div className='details'>
                <p>Sensação térmica: {Math.round(weather.main.feels_like)}°C</p>
                <p>Umidade: {weather.main.humidity}%</p>
                <p>Pressão: {weather.main.pressure} </p>
            </div>

        </div>
    )
}

export default WeatherResults