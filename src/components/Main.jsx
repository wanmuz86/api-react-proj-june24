import React, { useState } from 'react'
import Search from './Search'
import Weather from './Weather'

const Main = () => {

const [weather, setWeather] = useState(null)

  {/* Lifting up state (4) Retrieve the city name from the method*/}
const handleCitySearch = async (cityName) => {
    console.log(cityName)

    // Whenever there is word await on the function, async word needs to be added into function declaration
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9fd7a449d055dba26a982a3220f32aa2`);
    const weatherData = await response.json();
    console.log(weatherData);
    setWeather(weatherData)

}

  return (
    <div className='container py-3'>
        {/*  Lifting up state (1) Add props citySearch to handle search Button pressed from child */}
        <Search citySearch={handleCitySearch} />
        <Weather/>
    </div>
  )
}

export default Main