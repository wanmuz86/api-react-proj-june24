import React, { useState } from 'react'
import Search from './Search'
import Weather from './Weather'

const Main = () => {

const [weather, setWeather] = useState(null)
const handleCitySearch = (cityName) => {
    console.log(cityName)

}

  return (
    <div className='container py-3'>
        <Search citySearch={handleCitySearch} />
        <Weather/>
    </div>
  )
}

export default Main