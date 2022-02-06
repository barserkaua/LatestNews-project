import {useDispatch, useSelector} from "react-redux";
import {Col} from "react-bootstrap";
import './SortMenu.css'

import {
    newsSortByTitleActions,
    newsSortByOldestDateActions,
    newsSortByNewestDateActions,
} from "../../actions/sortActions";

import {
    NEWS_SORT_BY_TITLE_RESET,
    NEWS_SORT_BY_DATE_OLD_RESET,
    NEWS_SORT_BY_DATE_NEW_RESET
} from "../../constants/sortConstants";

export default function SortMenu() {

    const dispatch = useDispatch();

    const newsSortByTitle = useSelector(state => state.newsSortByTitle);
    const {sortByTitle} = newsSortByTitle;

    const newsSortByOldestDate = useSelector(state => state.newsSortByOldestDate);
    const {sortByOldestDate} = newsSortByOldestDate;

    const newsSortByNewestDate = useSelector(state => state.newsSortByNewestDate);
    const {sortByNewestDate} = newsSortByNewestDate;

    function sortHandler(e) {
        if (e === 'title') {
            dispatch(newsSortByTitleActions());
            dispatch({type:NEWS_SORT_BY_DATE_OLD_RESET})
            dispatch({type:NEWS_SORT_BY_DATE_NEW_RESET})

        }
        if (e === 'date-oldest') {
            dispatch(newsSortByOldestDateActions());
            dispatch({type:NEWS_SORT_BY_TITLE_RESET})
            dispatch({type:NEWS_SORT_BY_DATE_NEW_RESET})

        }
        if (e === 'date-newest') {
            dispatch(newsSortByNewestDateActions());
            dispatch({type:NEWS_SORT_BY_TITLE_RESET})
            dispatch({type:NEWS_SORT_BY_DATE_OLD_RESET})
        }
    }

    return (
        <div className="sort-menu">
            <Col xs="auto" className='mt-auto d-flex justify-content-end'>
                <select size='sm' className="form-select" onChange={e => sortHandler(e.target.value)}>
                    <option selected hidden>Sort By</option>
                    <option value="title" selected={true ? sortByTitle : false}>Title</option>
                    <option value="date-oldest" selected={true ? sortByOldestDate : false}>Date added: oldest</option>
                    <option value="date-newest" selected={true ? sortByNewestDate : false}>Date added: newest</option>
                </select>
            </Col>
        </div>
    )
}