import { SET_LIST, SET_DETAIL } from '../actions'

const initialState = {
    employees: [],
    employee: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIST:
            return {
                ...state,
                employees: action.payload.employees
            };
        case SET_DETAIL:
            let employee = state.employees.find(employee => employee.id === action.payload.employee_id);

            if (!employee) {
                employee = {};
            } else if (employee.employee_age < 23) {
                employee.employee_avatar = 'https://i.pinimg.com/736x/52/10/29/5210296c2f73746940c5a983839899ae.jpg';
            } else if (employee.employee_age < 41) {
                employee.employee_avatar = 'https://i.a4vn.com/2017/10/14/gai-xinh-de-thuong-nhat-the-gioi-gap-phat-dung-hinh-874b08.jpg';
            } else {
                employee.employee_avatar = 'https://vtv1.mediacdn.vn/k:2015/1-201503276641020150327065925-1427513559594/chan-dung-nguoi-gia-va-tre-em-viet-tuyet-dep-cua-nhiep-anh-gia-phap.jpg';
            }

            return {
                ...state,
                employee
            };
        default:
            return state
    }
}

export default reducer;
