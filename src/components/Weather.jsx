import React from 'react'

const Weather = () => {
  return (
    <div className='card text-center p-3 bg-light'>
        <h2>City name</h2>
        <img src="https://openweathermap.org/img/wn/04d@2x.png" alt=""  
        width={200} 
        className='mx-auto'/>
        <p>Weather , Subdescription</p>
        <p>Temperature</p>
        <p>Humidity / Pressure</p>
        <p>Sunset / Sunrise</p>
    </div>
  )
}

export default Weather