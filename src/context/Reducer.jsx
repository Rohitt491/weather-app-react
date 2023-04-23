

export const weatherreducer = (state, action) => {
    switch(action.type){
        case "SETCITY":
        return{
                 ...state, city:action.payload
        };
        case "SET-CURRENT":
            return{
                ...state, current:action.payload
            };
        case "SET_DAILY":
            return{
                ...state, daily:action.payload
            }  ;
            default:
               return{
                  ...state
               }   
    }
}