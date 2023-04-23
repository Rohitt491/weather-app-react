import React from 'react';
import dayjs from 'dayjs';
import {Useweathercontext} from '../context/Context';

const Leftside = () => {
    const{state:{city,current}} = Useweathercontext();

    const weekdays = [
     "Sunday",
     "Monday",
     "Tuesday",
     "Wednesday",
     "Thrusday",
     "Friday",
     "Saturday",]
    if (!current) return 'Loading...';
    const weekendindex = dayjs.unix(current.dt).day();
  return (
    <div className='leftWrap'>
        <div className="dateWrap">
           <h2> {weekdays[weekendindex]}</h2>
        <span className="dateDay">
            {dayjs.unix(current.dt).format('DD/MM/YYYY')}
        </span>
        <span className="loactionName">{city.city} - {city.admin_name} - {city.country}</span>

        </div>
        <div className="weatherContainer">
        <img src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} className='weather-icon' alt="img" />
            <h1 className="weatherTemp">{Math.round(current.temp.max)} <sup>0</sup>C</h1>
            <h3 className="weatherDesc">{current.weather[0].main}</h3>
        </div>
        </div>

  )
}

export default Leftside