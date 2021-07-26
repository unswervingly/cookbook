import {
    CHANGE_SWITCH,
} from './constants'
import { Map } from 'immutable'

const defaultState = Map({
    checked: JSON.parse(localStorage.getItem('checked'))
})

function HomeReducer(state = defaultState, action) {
    switch (action.type) {
        case CHANGE_SWITCH:
            // return {...state, checked: action.checked}
            return state.set('checked', action.checked);
        default:
            return state;
    }
}

export default HomeReducer