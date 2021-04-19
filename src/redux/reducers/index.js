import {SELECT_WEEK_DAY } from "../constants"

const initialState = {weekDay: 'Segunda'} 

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_WEEK_DAY : 
            return {...state, weekDay: action.value}
        default:
            return state;
    }
}

export default rootReducer;