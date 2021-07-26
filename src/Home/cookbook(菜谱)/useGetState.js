import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getLoadDateAction } from './store/createAction'



const useGetState = () => {
    const state = useSelector(state => {
        return {
            list: state.cookbookReducer.list
        }
    }, shallowEqual)


    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getLoadDateAction()) 
    }, [dispatch])

    return {
        state
    }
}

export default useGetState;