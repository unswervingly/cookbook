import React, { memo } from 'react'

import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import MenuList from '../../../components/menuList/menuList'


import useCateChange from './useCateChange'
import useGoList from './useGoList'


const Menu = memo(function (props) {

    // const [cate, setCate] = useState(null);

    // const state = useSelector(state => {
    //     return {
    //         cateType: state.cateReducer.routeInfo.cateType,
    //         cateAside: state.cateReducer.routeInfo.cateAside,
    //     }
    // })

    const { cate, cateType, cateAside, handleCate, } = useCateChange();

    const { handleGoList } = useGoList();

    // const history = useHistory();

    // const dispatch = useDispatch()

    // useEffect(() => {
    //     (async () => {
    //         let res = await get({
    //             url: '/api/category'
    //         })
    //         // this.setState({
    //         //     cate: res.data.data
    //         // })

    //         setCate(res.data.data)

    //         if (!state.cateAside) {
    //             dispatch(changeCateAsideAction(state.cateType === 'category' ? '热门' : '肉类'))
    //         }
    //     })()
    // }, [state.cateType, state.cateAside, dispatch])

    // const handleCate = useCallback((item) => {
    //     dispatch(changeCateAsideAction(item))
    // }, [dispatch])

    // const handleGoList = useCallback((title) => {
    //     history.push('/list', { title })
    // }, [history])


    return (
        <MenuList
            onAsideClick={(item) => handleCate(item)}
            curCate={cateAside}
            cate={cate && cate[cateType]}
            onGoList={title => handleGoList(title)}
        >
        </MenuList>
        // null
    )
})

// 类组件判断类型
// static propTypes = {
//     type: PropTypes.string
// }


Menu.propTypes = {
    type: PropTypes.string
}

export default withRouter(Menu);

