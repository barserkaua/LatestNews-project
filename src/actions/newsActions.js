import axios from "axios";
import {
    LATEST_NEWS_LIST_REQUEST,
    LATEST_NEWS_LIST_SUCCESS,
    LATEST_NEWS_LIST_FAIL,
} from "../constants/newsConstants";

export const latestNewsListAction = (currentPage) => async (dispatch) => {
    try {
        dispatch({type: LATEST_NEWS_LIST_REQUEST})

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const {data} = await axios.get(
            `https://api.hnpwa.com/v0/news/${currentPage}.json`,
            config
        )

        dispatch({
            type: LATEST_NEWS_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: LATEST_NEWS_LIST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}