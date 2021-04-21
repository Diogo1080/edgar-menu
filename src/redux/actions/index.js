import { SELECT_WEEK_DAY,SELECT_DRINK_TYPE,SELECT_SIDE_DISH } from "../constants";

export const selectWeekDay = (item) => {
    return {
        type: SELECT_WEEK_DAY,
        value: item
    }
}

export const selectDrinkType = (item) => {
    return {
        type: SELECT_DRINK_TYPE,
        value: item
    }
}

export const selectSideDish = (item) => {
    return {
        type: SELECT_SIDE_DISH,
        value: item
    }
}