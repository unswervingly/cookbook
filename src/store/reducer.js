import { combineReducers } from 'redux-immutable'

import { cookbookReducer } from '../Home/cookbook(菜谱)/store/index'
import { HomeReducer } from '../Home/store/index'
import { cateReducer } from '../Home/category(分类)/store/index'

const reducer = combineReducers({
    cookbookReducer,
    HomeReducer,
    cateReducer,
})

export default  reducer;