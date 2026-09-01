import { useRef, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherResults from './components/WeatherResults/WeatherResults'
import WeatherResults5days from './components/WeatherResults5days/WeatherResults5days'
import { useQuery } from "@tanstack/react-query";

import { useWeather } from './hooks/weather';
import { useForecast } from './hooks/forecast';


function App() {
       const inputref = useRef()  
       const [city, setCity] = useState("");
    
       const {data: weather, 
              isloading: isWeatherLoading,
              isFetching: isWeatherFetching,
              isError: isWeatherError,
              error:weatherError,
               }= useWeather(city)

      const {data: weather5days, 
              isloading: isforecastLoading,
              isFetching: isforecastFetching,
              isError: isforecastError,
              error: forecastError,
               } = useForecast(city)
       
      
    const SearchCity = () => {

        const city  = inputref.current.value.trim();  
        if(city) {
          setCity(city);
        }
        
      
       
    }


  return (
    <div className='container'> 
        <h1>Previsão de tempo</h1>
        <input ref={inputref} type="text" placeholder='Digite o nome da cidade ou do pais'/>
        <button onClick={SearchCity}>Pesquisar</button> 

        {isWeatherLoading && (
          <p>A procurar informação meteorológia...</p>
        )}

        {isWeatherFetching && !isWeatherLoading && (
          <p>A atualizar informação...</p>
        )}

        {isWeatherError && (
                <p>
                    Não foi possível encontrar a cidade.
                    {weatherError?.response?.data?.message}
                </p>
        )}
        {isforecastError && (
                <p>
                    Não foi possível carregar a previsão.
                </p>
        )}


        {weather && < WeatherResults weather={weather} />}
        {weather5days && !isforecastLoading && ( < WeatherResults5days weather5days={weather5days} />)}
    </div>
  )
}

export default App
