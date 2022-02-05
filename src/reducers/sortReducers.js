import {
    NEWS_SORT_BY_DATE_NEW_REQUEST,
    NEWS_SORT_BY_DATE_NEW_SUCCESS,
    NEWS_SORT_BY_DATE_NEW_FAIL,
    NEWS_SORT_BY_DATE_NEW_RESET,

    NEWS_SORT_BY_DATE_OLD_REQUEST,
    NEWS_SORT_BY_DATE_OLD_SUCCESS,
    NEWS_SORT_BY_DATE_OLD_FAIL,
    NEWS_SORT_BY_DATE_OLD_RESET,

    NEWS_SORT_BY_TITLE_REQUEST,
    NEWS_SORT_BY_TITLE_SUCCESS,
    NEWS_SORT_BY_TITLE_FAIL,
    NEWS_SORT_BY_TITLE_RESET
} from "../constants/sortConstants";


export const newsSortByTitleReducer = (state={sortByTitle:false}, action) => {
    switch (action.type) {
        case NEWS_SORT_BY_TITLE_REQUEST:
            return {loading:true}

        case NEWS_SORT_BY_TITLE_SUCCESS:
            return {loading:false, sortByTitle:true}

        case NEWS_SORT_BY_TITLE_FAIL:
            return {loading:false, error: action.payload}

        case NEWS_SORT_BY_TITLE_RESET:
            return {sortByTitle: false}

        default:
            return state
    }
}


export const newsSortByOldestDateReducer = (state={sortByOldestDate:false}, action) => {
    switch (action.type) {
        case NEWS_SORT_BY_DATE_OLD_REQUEST:
            return {loading:true}

        case NEWS_SORT_BY_DATE_OLD_SUCCESS:
            return {loading:false, sortByOldestDate:true}

        case NEWS_SORT_BY_DATE_OLD_FAIL:
            return {loading:false, error: action.payload}

        case NEWS_SORT_BY_DATE_OLD_RESET:
            return {sortByOldestDate: false}

        default:
            return state
    }
}


export const newsSortByNewestDateReducer = (state={sortByNewestDate:false}, action) => {
    switch (action.type) {
        case NEWS_SORT_BY_DATE_NEW_REQUEST:
            return {loading:true}

        case NEWS_SORT_BY_DATE_NEW_SUCCESS:
            return {loading:false, sortByNewestDate:true}

        case NEWS_SORT_BY_DATE_NEW_FAIL:
            return {loading:false, error: action.payload}

        case NEWS_SORT_BY_DATE_NEW_RESET:
            return {sortByNewestDate: false}

        default:
            return state
    }
}