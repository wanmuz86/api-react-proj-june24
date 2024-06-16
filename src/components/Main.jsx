import React, { useState } from 'react'
import Search from './Search'
import Weather from './Weather'

const Main = () => {

    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(false)

    {/* Lifting up state (4) Retrieve the city name from the method*/ }
    const handleCitySearch = async (cityName) => {

        setLoading(true)
        console.log(cityName)
        try {
            // Whenever there is word await on the function, async word needs to be added into function declaration
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9fd7a449d055dba26a982a3220f32aa2`);
            const weatherData = await response.json();
    
            setLoading(false)
            if (weatherData.cod == 200){
            setWeather(weatherData)
            }
        }
        catch (e) {
            // handleError
            console.log("error " +e)

        }

    }
    return (
        <div className='container py-3'>
            {/*  Lifting up state (1) Add props citySearch to handle search Button pressed from child */}
            <Search citySearch={handleCitySearch} />

            {
                weather !== null && <Weather weatherProp={weather} />

            }
            {
                loading && <p>Loading....</p>
            }
        </div>
    )
}

export default Main