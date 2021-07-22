import {
    CHANGE_SWITCH,
} from './constants'


const defaultState = {
    checked: JSON.parse(localStorage.getItem('checked'))
}

function HomeReducer(state = defaultState, action) {
    switch (action.type) {
        case CHANGE_SWITCH:
            return {...state, checked: action.checked}
        default:
            return state;
    }
}

export default HomeReducer