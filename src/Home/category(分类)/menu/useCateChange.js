import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { get } from '../../../services/cookbook'
import { changeCateAsideAction } from '../store/createAction';

const useCateChange = () => {
    const [cate, setCate] = useState(null);

    const {cateType, cateAside} = useSelector(state => {
        return {
            // cateType: state.cateReducer.routeInfo.cateType,
            cateType: state.getIn(['cateReducer', 'routeInfo', 'cateType']),
            // cateAside: state.cateReducer.routeInfo.cateAside,
            cateAside: state.getIn(['cateReducer', 'routeInfo', 'cateAside']),
        }
    })
    
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            let res = await get({
                url: '/api/category'
            })
            // this.setState({
            //     cate: res.data.data
            // })

            setCate(res.data.data)

            if (!cateAside) {
                dispatch(changeCateAsideAction(cateType === 'category' ? '热门' : '肉类'))
            }
        })()
    }, [cateType, cateAside, dispatch])

    const handleCate = useCallback((item) => {
        dispatch(changeCateAsideAction(item))
    }, [dispatch])

    return {
        cate,
        cateType,
        cateAside,
        handleCate,
    }
}

export default useCateChange;