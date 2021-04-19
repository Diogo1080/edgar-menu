import { SELECT_WEEK_DAY } from "../constants";
import { SELECT_DRINK_TYPE } from "../constants";

export const selectWeekDay = (item) =>  {
    return {
        type: SELECT_WEEK_DAY, 
        value: item
    }
}

export const selectDrinkType = (item) =>  {
    return {
        type: SELECT_DRINK_TYPE, 
        value: item
    }
}