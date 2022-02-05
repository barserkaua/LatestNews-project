import {
    NEWS_SORT_BY_DATE_NEW_REQUEST,
    NEWS_SORT_BY_DATE_NEW_SUCCESS,
    NEWS_SORT_BY_DATE_NEW_FAIL,

    NEWS_SORT_BY_DATE_OLD_REQUEST,
    NEWS_SORT_BY_DATE_OLD_SUCCESS,
    NEWS_SORT_BY_DATE_OLD_FAIL,

    NEWS_SORT_BY_TITLE_REQUEST,
    NEWS_SORT_BY_TITLE_SUCCESS,
    NEWS_SORT_BY_TITLE_FAIL,
} from "../constants/sortConstants";


export const newsSortByTitleActions = () => async (dispatch) => {
    try {
        dispatch({type:NEWS_SORT_BY_TITLE_REQUEST})

        dispatch({type: NEWS_SORT_BY_TITLE_SUCCESS})

    } catch (error){
        dispatch({
            type: NEWS_SORT_BY_TITLE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}


export const newsSortByOldestDateActions = () => async (dispatch) => {
    try {
        dispatch({type: NEWS_SORT_BY_DATE_OLD_REQUEST})

        dispatch({type: NEWS_SORT_BY_DATE_OLD_SUCCESS})

    } catch (error){
        dispatch({
            type: NEWS_SORT_BY_DATE_OLD_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}


export const newsSortByNewestDateActions = () => async (dispatch) => {
    try {
        dispatch({type: NEWS_SORT_BY_DATE_NEW_REQUEST})

        dispatch({type: NEWS_SORT_BY_DATE_NEW_SUCCESS})

    } catch (error){
        dispatch({
            type: NEWS_SORT_BY_DATE_NEW_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}
