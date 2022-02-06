import {
    ITEMS_LIST_REQUEST,
    ITEMS_LIST_SUCCESS,
    ITEMS_LIST_FAIL
} from "../constants/itemsConstants";


export const itemsListReducer = (state = { items: {}}, action) => {
    switch (action.type) {
        case ITEMS_LIST_REQUEST:
            return {loading:true, success: false}

        case ITEMS_LIST_SUCCESS:
            return {loading:false, success: true, items: action.payload}

        case ITEMS_LIST_FAIL:
            return {loading:false, error: action.payload}

        default:
            return state
    }
}