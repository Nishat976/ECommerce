export type CounterState ={
    data:number
}


const initialstate: CounterState ={
    data: 50
}

export function incrementLegacy(amount = 1){
    return{
        type:'increment',
        payload: amount
    }
   
}
export function decrementLegacy(amount = 1){
    return{
        type:'decrement',
        payload: amount
    }
   
}

export default function counterReducer( state = initialstate, action: {type:string,payload:number} ) {
    switch (action.type) {
        case 'increment':
            
            return {
                ...state, 
                data : state.data + action.payload
            }
        case 'decrement':
            
            return {
                ...state, 
                data : state.data - action.payload 
            }
    
        default:
            return state;
    }
  
}