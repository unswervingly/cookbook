import React, { memo } from 'react'
// import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CookBooks from './cookbooks'
// import { getLoadDateAction } from './store/createAction'

import useGetState from './useGetState'

import useGoHistory from './useGoHistory'

const Cookbook = memo(function(props) {
    // const state = useSelector(state => {
    //     return {
    //         list: state.cookbookReducer.list
    //     }
    // }, shallowEqual)

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getLoadDateAction()) 
    // }, [dispatch])

    const state = useGetState();
    
    // const history = useHistory()

    // const handleDetail = (title) => {
    //     history.push('/detail', { title, from: '/home' })
    // }

    const { handleDetail } = useGoHistory();

    return (
        <div>
            <CookBooks list={state.list} onGoDetail={title => handleDetail(title)}/>
        </div>
    )
})



export default withRouter(Cookbook);