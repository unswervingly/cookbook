import {
    LOAD_DATE,
} from './constant'
import { Map } from 'immutable'

const defaultState = Map({
    list: [],
})


const cookbookReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOAD_DATE:
            return state.set('list', action.list);
    
        default:
            return state;
    }
}

export default cookbookReducer;