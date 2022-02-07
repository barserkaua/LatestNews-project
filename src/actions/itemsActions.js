import axios from "axios";
import {
    ITEMS_LIST_REQUEST,
    ITEMS_LIST_SUCCESS,
    ITEMS_LIST_FAIL
} from "../constants/itemsConstants";


export const itemsListAction = (sort) => async (dispatch) => {
    try {
        dispatch({type: ITEMS_LIST_REQUEST})

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const {data} = await axios.get(
            'https://api.hnpwa.com/v0/item/13831370.json',
            config
        )

        if (sort.sortByTitle) {
            dispatch({
                type: ITEMS_LIST_SUCCESS,
                payload: data.comments.sort((a, b) => a.title > b.title && 1 || -1)
            })
        } else if (sort.sortByOldestDate) {
            dispatch({
                type: ITEMS_LIST_SUCCESS,
                payload: data.comments.sort((a, b) => a.time > b.time && 1 || -1)
            })
        } else if (sort.sortByNewestDate) {
            dispatch({
                type: ITEMS_LIST_SUCCESS,
                payload: data.comments.sort((a, b) => a.time < b.time && 1 || -1)
            })
        } else {
            dispatch({
                type: ITEMS_LIST_SUCCESS,
                payload: data.comments
            })
        }


    } catch (error) {
        dispatch({
            type: ITEMS_LIST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}