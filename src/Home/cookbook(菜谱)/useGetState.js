import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getLoadDateAction } from './store/createAction'



const useGetState = () => {
    const { list } = useSelector(state => {
        return {
            list: state.get('cookbookReducer').get('list')
            // list: state.cookbookReducer.list
        }
    }, shallowEqual)


    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getLoadDateAction()) 
    }, [dispatch])

    return {
        list
    }
}

export default useGetState;