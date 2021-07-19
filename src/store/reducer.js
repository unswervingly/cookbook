import { combineReducers } from 'redux'

import { cookbookReducer } from '../Home/cookbook(菜谱)/store/index'

const reducer = combineReducers({
    cookbookReducer
})

export default  reducer;