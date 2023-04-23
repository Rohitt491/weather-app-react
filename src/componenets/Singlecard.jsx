import React from 'react'
import dayjs from 'dayjs';

const Singlecard = ({item,className, onClick}) => {

   const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
   ]

   const weekdayindex = dayjs.unix(item.dt).day();

  return (
    <>
     <li key={item.moonrise} className={className} onClick={onClick}>
     <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} className='day-icon' alt="img" />
     <span className='day-name'>
            {weekdays[weekdayindex].slice(0,3)} 
     </span>
     <span className='day-temp'>
        {Math.round(item.temp.max)} <sup>0</sup>C
     </span>
     </li>
    </>
  )
}

export default Singlecard