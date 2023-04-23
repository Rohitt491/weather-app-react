import React from 'react'
import {Useweathercontext} from '../context/Context'

const Humid = () => {
    let {state: {city, current}} = Useweathercontext();
    // console.log(city, current)

 const uvlevel = (uvlevel)=>{
     if (uvlevel <= 3) return 'Low';   
     if (uvlevel <= 5) return 'Medium';   
     if (uvlevel <= 7) return 'High';   
     if (uvlevel > 7) return 'Very High';   

 }
  return (
   <>
   {current?  <div className='humidityWrap'>
            <div className="humidityData">
                <div className="title">UV index</div>
                <div className="value">{Math.round(current.uvi)} {uvlevel(Math.round(current.uvi))}</div>
            </div>

            <div className="humidityData">
                <div className="title">Humidity</div>
                <div className="value">{current.humidity} %</div>
            </div>

            <div className="humidityData">
                <div className="title">Wind Speed</div>
                <div className="value">{Math.round(current.wind_speed)} Km/h</div>
            </div>

            <div className="humidityData">
                <div className="title">{city.city}-{city.admin_name}'s  Population</div>
                <div className="value">{parseFloat(city.population).toLocaleString('en')}</div>
            </div>
    </div> : ''}
   </>
  )
}

export default Humid