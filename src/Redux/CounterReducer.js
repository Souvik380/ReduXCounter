const initialState={
    count:0,
    max:Number.POSITIVE_INFINITY,
    min:1,
    flag:false,
    alert:false
}

const CounterReducer=(state=initialState,action)=>{
    switch(action.type){
        case "increase":
            let val=state.count+state.min
            let updatedCount=val<state.max?val:state.max
            let flag2=(val>=state.max)?true:false
            return {...state,count:updatedCount,flag:flag2}
        case "decrease":
            return {...state,count:state.count-state.min,flag:false}
        case "reset":
            return {...state,count:0,min:1,max:Number.POSITIVE_INFINITY,flag:false}
        case "SET_MIN":
            return {...state,min:action.payload}
        case "SET_MAX":
            return {...state,max:action.payload}
        default:
            return state
    }
}

export default CounterReducer