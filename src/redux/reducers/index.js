import {SELECT_WEEK_DAY } from "../constants"
import {SELECT_DRINK_TYPE} from "../constants"

const initialState = {weekDay: 'Segunda', drinkType: "Agua Natural"} 

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_WEEK_DAY : 
            return {...state, weekDay: action.value}
        case SELECT_DRINK_TYPE :
            return {...state, drinkType: action.value}
        default:
            return state;
    }
}

export default rootReducer;