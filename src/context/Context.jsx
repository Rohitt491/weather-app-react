import React ,{useReducer , useContext, createContext} from 'react';

import { weatherreducer } from './Reducer';


export const weathercontext = React.createContext();

export const Weathercontextprovider = ({children}) => {

    const [state, dispatch ] = useReducer(weatherreducer, {
        city:
       { "city" : "Delhi", 
        "lat": "28.6600", 
        "lng": "77.2300", 
        "country": "India", 
        "iso2": "IN", 
        "admin_name": "Delhi", 
        "capital": "admin", 
        "population": "29617000", 
        "population_proper": "16753235"},
        current:'',
        daily:''
    });
 return(

<weathercontext.Provider value={{state, dispatch}}> 
      {children}
</weathercontext.Provider>
 )
}

export const Useweathercontext = () =>{

    return( useContext(weathercontext))
}
