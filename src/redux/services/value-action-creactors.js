import {setIsLoading} from "../action-creators";
import {SET_VALUES} from "./value-action-types";

const setValues = (payload) => ({type: SET_VALUES, payload})

const fetchData = (url) => async (dispatch) => {
    try {
        dispatch(setIsLoading(true));
        const response = await fetch(url);
        const data = await response.json();
        dispatch(setValues(data));
    } catch (e) {
        console.error(e);
    } finally {
        dispatch(setIsLoading(false));
    }
}

export {
    setValues,
    fetchData
}