import React, { memo, useCallback } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Switch, NavBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';


import {
    MoreWrapper,
    NavbarWrapper
} from './style'
import {
    changeSwitchAction,
} from '../store/createAction'


const More = memo(function (props) {

    const { checked } = useSelector(state => {
        return {
            // checked: state.HomeReducer.checked,
            checked: state.getIn(['HomeReducer', 'checked']),
            
        }
    })


    const dispatch = useDispatch();

    const handleSwitch = useCallback((checked) => {
        dispatch(changeSwitchAction(checked))
        // 本地存储： 将checked存起来
        localStorage.setItem('checked', checked)
    }, [dispatch])

    return (
        <NavbarWrapper>
            <NavBar mode="dark">
                更多
            </NavBar>
            <MoreWrapper>

                <span>百度地图：</span>
                <Switch
                    checked={checked}
                    onClick={handleSwitch}
                />
            </MoreWrapper>
        </NavbarWrapper>
    )
})









export default More;
