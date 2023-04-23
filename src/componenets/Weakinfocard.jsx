import React, { useEffect, useState } from 'react'
import {Useweathercontext} from '../context/Context';
import Singlecard from '../componenets/Singlecard.jsx'

const Weakinfocard = () => {
    const {state:{daily}, dispatch} = Useweathercontext();
    const [Selectedcard , Setselectedcard] = useState(0);
    const updatecurrent =() =>{
            return (
                dispatch({
                    type:'SET-CURRENT',
                    payload:daily[Selectedcard]
                })
            )
    }
    useEffect(() =>{
        updatecurrent()
    },[daily,Selectedcard])
    // console.log(updatecurrent());
    // console.log(Useweathercontext());
  return (
    <div className='cardWrap'>
        <ul className='cardList'>
            
                {daily && daily.length > 0 ? daily.map((e, index) =>{
              if(index < 7){
                  return  < Singlecard key={index} item={e} className={index === Selectedcard ? 'active' : ''} onClick={() =>{Setselectedcard(index);
                updatecurrent()}}/>          
            }
          }) : ''

                }
         
        </ul>
    </div>
  )
}

export default Weakinfocard