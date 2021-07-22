import React, { PureComponent } from 'react'
import { connect } from "react-redux";
import { Switch, NavBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';


import {
    MoreWrapper,
    NavbarWrapper
} from './style'
import {
    changeSwitchAction,
  } from '../store/createAction'

class More extends PureComponent {

    render() {
        // console.log(this.props.checked);
        return (
            <NavbarWrapper>
                <NavBar mode="dark">
                    更多
                </NavBar>
                <MoreWrapper>

                    <span>百度地图：</span>
                    <Switch
                        checked={this.props.checked}
                        onClick={this.props.handleSwitch}
                    />
                </MoreWrapper>
            </NavbarWrapper>
        )
    }
}

const mapStateToProps = state => {
    
    return {
        checked: state.HomeReducer.checked,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSwitch(checked) {
            dispatch(changeSwitchAction(checked))
            // 本地存储： 将checked存起来
            localStorage.setItem('checked', checked)
        },
    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(More);
