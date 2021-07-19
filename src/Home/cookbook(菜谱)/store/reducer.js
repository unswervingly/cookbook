import {
    LOAD_DATE,
} from './constant'


const defaultState = {
    list: [],
}


const cookbookReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOAD_DATE:
            return {...state, list: action.list};
    
        default:
            return state;
    }
}

export default cookbookReducer;