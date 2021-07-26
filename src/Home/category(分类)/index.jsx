import React, { memo, useCallback } from 'react'
import { useDispatch, useSelector } from "react-redux";

import {
    CategoryWrapper,
    UlWrapper,
} from './style'
import Search from '../../components/search/search.jsx'

import Menu from './menu/menu';
import { changeCateAsideAction, changeCateTypeAction } from './store/createAction';


const Category = memo(function (props) {

    const state = useSelector(state => {
        return {
            cateType: state.cateReducer.routeInfo.cateType,
        }
    })

    const dispatch = useDispatch()

    const handleClick = useCallback((cateType) => {
        // this.props.changeCateType(cateType);
        dispatch(changeCateTypeAction(cateType))
        // this.props.changeCateAside(cateType === 'category' ? '热门' : '肉类')
        dispatch(changeCateAsideAction(cateType === 'category' ? '热门' : '肉类'))
        
    }, [dispatch])


    return (
        <CategoryWrapper>
            <nav>
                <UlWrapper color="pink" radius={0.15}>
                    <li className={state.cateType === 'category' ? "active" : ''} onClick={e => handleClick('category')}>分类</li>
                    <li className={state.cateType === 'material' ? "active" : ''} onClick={e => handleClick('material')}>食材</li>
                    <li className={state.cateType === 'category' ? "slide" : 'slide right'}></li>
                </UlWrapper>
            </nav>

            <Search outer="#fff" inner="#efefef" harborer={false}
                radius={0.06} />

            <Menu />
        </CategoryWrapper>
    )
})

export default Category;