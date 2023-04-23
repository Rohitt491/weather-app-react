import React, { useEffect } from 'react'
import cities from '../data/in.json'
import {Useweathercontext} from '../context/Context'
import axios from 'axios'

const Choosestate = () => {
  // console.log("weathercontext",Useweathercontext())

  const {state:{city},dispatch} = Useweathercontext();

  const handleselectchange =(e) =>{
    const updatecity = cities.filter((em) =>{
      return (em.city === e.target.value)
    })[0]
    dispatch({
      type:'SETCITY',
      payload:updatecity
    })
    // console.log(updatecity)
  }
  // API call
  const APIKEY = '34480b98aa332da53123a0ac63a4ea9d';
  let lat = city.lat && city ? city.lat : '';
  let long = city.lng && city ? city.lng : '';
  let exclude = 'hourly:minutely'
  const URL =  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${exclude}&units=metric&lang=tr&appid=${APIKEY}`

 const fetch = () =>{
  axios(URL)
  .then(data =>{
     let daily = data.data.daily;
      dispatch({
      type:'SET_DAILY',
      payload: daily
     })
     })
 }

 useEffect(() => {
  fetch();
 },[city])



  return (
    <div className='stateWrap'>
        <select className='stateMenu' defaultValue={city} onChange={handleselectchange}>
            {
                 cities && cities.length > 0 && cities.map((e) =>{
                    return[
                       <option key={'${city.population}${city.lat}'} value={e.city}>
                          {e.city} - {e.admin_name}
                        </option>
                    ]
                })
            }
        </select>
    </div>
  )
}

export default Choosestate