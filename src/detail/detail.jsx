import React, { memo, useCallback } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { NavBar, Icon } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

import { animate } from '../hoc/animate'
import {
    DetailWrapper,
} from './style'

const Detail = memo(function () {

    const history = useHistory();
    const location = useLocation();


    const handleLeft = useCallback((title) => {
        // let { history } = this.props;
        // history.goBack();
        let { from, listTitle } = location.state
        history.push(from, { title: listTitle, from: '/detail' });
    }, [history, location])

    return (
        <DetailWrapper>
            <NavBar mode="dark"
                icon={<Icon type="left" />}
                onLeftClick={e => handleLeft()}
                style={{ backgroundColor: '#ee742f' }}
            >
                {location.state && location.state.title}
            </NavBar>
            <div>
                <div>
                    <img src="https://s1.cdn.jiaonizuocai.com/videoImg/201509/0722/55ed97982b6fc.JPG/OTAweDYwMA" alt="" />
                </div>
                <div className="cookbook_name">
                    <h1>{location.state && location.state.title}</h1>
                    <h3>666666浏览/9999999收藏</h3>
                    <button>收藏</button>
                </div>
            </div>
        </DetailWrapper>
    )
})




export default animate(Detail);