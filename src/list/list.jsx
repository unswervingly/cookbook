import React, { memo, useCallback, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { NavBar, Icon } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

import {
    LiWrapper,
    EllipsisWrapper,
    ListWrapper,
} from './style'
import { getLoadDateAction } from '../Home/cookbook(菜谱)/store/createAction';
import { animate } from '../hoc/animate'


const List = memo(function (props) {

    const { list } = useSelector(state => {
        return {
            // list: state.cookbookReducer.list,
            list: state.getIn(['cookbookReducer', 'list']),
        }
    })

    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        // 解决刷新页面， Redux数据丢失问题
        if (list.length > 0) {
            dispatch(getLoadDateAction())
        }
    }, [dispatch, list])

    const handleLeft = useCallback(() => {
        // let { history } = this.props;
        // history.goBack();
        history.push('/home', { from: '/list' });
    }, [history])

    const handleDetail = useCallback((title) => {
        history.push('/detail', { listTitle: location.state.title, from: '/list', title })
    }, [history, location])


    return (
        <ListWrapper>
            <NavBar mode="dark"
                icon={<Icon type="left" />}
                onLeftClick={e => handleLeft()}
                style={{ backgroundColor: '#ee742f' }}
            >
                {location.state && location.state.title}
            </NavBar>
            <ul>
                {
                    list.map((item, index) => {
                        return (
                            <LiWrapper width="0 0 1px 0" key={index}
                                onClick={e => handleDetail(item.name)}>
                                <div>
                                    <img src={item.img} width='115' height='75' alt="" />
                                </div>
                                <div>
                                    <h1>{item.name}</h1>
                                    <EllipsisWrapper>{item.burdens}</EllipsisWrapper>
                                    <h3>{item.all_click}浏览 {item.favorites}收藏</h3>
                                </div>
                            </LiWrapper>
                        )
                    })
                }

            </ul>
        </ListWrapper>
    )
})

export default animate(List);
