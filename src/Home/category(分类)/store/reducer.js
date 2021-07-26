import {
    CHANGE_SELECTED,
    CHANGE_CATE_TYPE,
    CHANGE_CATE_ASIDE,
} from './constants'
import { Map } from 'immutable'


const defaultState = Map({
    routeInfo: {
        selected: 'cookbooks',
        cateType: 'category',
        cateAside: '',
    }
})

function cateReducer(state = defaultState, action) {
    // console.log({...state.routeInfo, selectedTab: action.selectedTab});
    switch (action.type) {
        case CHANGE_SELECTED:
            // return {routeInfo: {...state.routeInfo, selected: action.selected}}
            return state.setIn(['routeInfo','selected'], action.selected)
        case CHANGE_CATE_TYPE:
            return state.setIn(['routeInfo','cateType'], action.cateType)
        case CHANGE_CATE_ASIDE:
            return state.setIn(['routeInfo','cateAside'], action.cateAside)
        default:
            return state;
    }
}

export default cateReducer;