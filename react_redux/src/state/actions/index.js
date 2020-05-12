export const SET_LIST = 'SET_LIST';
export const SET_DETAIL = 'SET_DETAIL';

export const setList = (value) => {
    return {
        type: SET_LIST,
        employees: value
    }
}

export const setDetail = (value) => {
    return {
        type: SET_DETAIL,
        employee_id: value
    }
}