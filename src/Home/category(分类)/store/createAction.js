import {
    CHANGE_SELECTED,
    CHANGE_CATE_TYPE,
    CHANGE_CATE_ASIDE,
} from './constants'


export const changeSelectedTabAction = (selected) => {
    return {
        type: CHANGE_SELECTED,
        selected: selected
    }
}


export const changeCateTypeAction = (cateType) => {
    return {
        type: CHANGE_CATE_TYPE,
        cateType: cateType
    }
}



export const changeCateAsideAction = (cateAside) => {
    return {
        type: CHANGE_CATE_ASIDE,
        cateAside: cateAside
    }
}