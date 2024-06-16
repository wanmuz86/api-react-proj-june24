import React from 'react'

const Weather = ({weatherProp}) => {

    const transformDt = (dt) => {
        let date = new Date(dt * 1000)
        return date.toLocaleString()
    }

  return (
    <div className='card text-center p-3 bg-light'>
        <h2>{weatherProp?.name}</h2>
        <img src={`https://openweathermap.org/img/wn/${weatherProp?.weather[0].icon}@2x.png`} alt=""  
        width={200} 
        className='mx-auto'/>
        <p>{weatherProp?.weather[0].main} , {weatherProp?.weather[0].description}</p>
        <p>{(weatherProp?.main.temp - 273.15).toFixed(2)} &deg;C</p>
        <p>{weatherProp?.main.humidity}% / {weatherProp?.main.humidity} hPa</p>
        <p>Sunrise: {transformDt(weatherProp?.sys.sunrise)}</p>
        <p>Sunset: {transformDt(weatherProp?.sys.sunset)}</p>
    </div>
  )
}

export default Weather