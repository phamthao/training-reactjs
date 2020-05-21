export const SET_LIST = 'SET_LIST';
export const SET_DETAIL = 'SET_DETAIL';

export const setList = (value) => {
    return {
        type: SET_LIST,
        payload: value
    }
}

export const setDetail = (value) => {
    return {
        type: SET_DETAIL,
        payload: value
    }
}