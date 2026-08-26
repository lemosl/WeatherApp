import { useRef, useState } from 'react'
import './App.css'
import { use } from 'react'
import axios from 'axios'
import WeatherResults from './components/WeatherResults/WeatherResults'
import WeatherResults5days from './components/WeatherResults5days/WeatherResults5days'


function App() {
       const inputref = useRef()
       const [weather, setWeather] = useState()
        const [weather5days, setWeather5days] = useState()
      
    async  function SearchCity(){

        const city  = inputref.current.value; 
        
        const key = "b3f8f69e9e60b437b2b03fa2a0db5f4d"
        
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt&units=metric`

        const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt&units=metric`;
         
        const APidata = await axios.get(url)
        const ApiUrl5days  = await axios.get(url5days)
       
        setWeather(APidata.data)
        setWeather5days(ApiUrl5days.data)
        
        
    }


  return (
    <div className='container'> 
        <h1 >Previsão de tempo</h1>
        <input ref={inputref} type="text" placeholder='Digite o nome da cidade ou do pais'/>
        <button onClick={SearchCity}>Pesquisar</button>
         {weather && < WeatherResults weather={weather} />}
         {weather && < WeatherResults5days weather5days={weather5days} />}
    </div>
  )
}

export default App
