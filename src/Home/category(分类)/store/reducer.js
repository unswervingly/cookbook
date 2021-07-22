import {
    CHANGE_SELECTED,
    CHANGE_CATE_TYPE,
    CHANGE_CATE_ASIDE,
} from './constants'

const defaultState = {
    routeInfo: {
        selected: 'cookbooks',
        cateType: 'category',
        cateAside: '',
    }
}

function cateReducer(state = defaultState, action) {
    // console.log({...state.routeInfo, selectedTab: action.selectedTab});
    switch (action.type) {
        case CHANGE_SELECTED:
            return {routeInfo: {...state.routeInfo, selected: action.selected}}
        case CHANGE_CATE_TYPE:
            return {routeInfo: {...state.routeInfo, cateType: action.cateType}}
        case CHANGE_CATE_ASIDE:
            return {routeInfo: {...state.routeInfo, cateAside: action.cateAside}}
        default:
            return state;
    }
}

export default cateReducer;