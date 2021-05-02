import {SET_CURRENT_LIMIT} from "../action-types";

const setCurrentLimit = (payload) => ({type: SET_CURRENT_LIMIT, payload});

const qsHelper = (params) => {
    const keys = Object.keys(params);

    let result = '';

    if(!keys?.length) return;

    keys.forEach((el, i) => {
        result += `${el}=${params[el]}`
        if (i === keys.length - 1) result += '&'
    })
    return result;
}

export {
    setCurrentLimit,
    qsHelper
}