import {
    LOAD_DATE,
} from './constant'

import {
    get,
} from '../../../services/cookbook'


export const changeLoadDateAction = list => {
    return {
        type: LOAD_DATE,
        list: list
    }
}

export const getLoadDateAction = () => {
    return async (dispatch) => {
        let res =  await get({
            url: '/api/list'
        })

        dispatch(changeLoadDateAction(res.data.data))
    }
}