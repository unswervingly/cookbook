import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { NavBar, Icon } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

import {
    LiWrapper,
    EllipsisWrapper,
    ListWrapper,  
} from './style'
import { getLoadDateAction } from '../Home/cookbook(菜谱)/store/createAction';
import {animate} from '../hoc/animate'

class List extends PureComponent {

    componentDidMount() {
        // 解决刷新页面， Redux数据丢失问题
        if(this.props.list.length > 0) {
            this.props.loadDate()
        }
    }

    handleLeft() {
        let { history } = this.props;
        // history.goBack();
        history.push('/home', {from: '/list'});
    }

    handleDetail(title) {
        this.props.history.push('/detail', { listTitle: this.props.location.state.title, from: '/list', title })
    }
    
    render() {
        // console.log(this.props.location);
        return (
            <ListWrapper>
                <NavBar mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={e => this.handleLeft()}
                    style={{ backgroundColor: '#ee742f' }}
                >
                    {this.props.location.state && this.props.location.state.title}
                </NavBar>
                <ul>
                    {
                        this.props.list.map((item, index) => {
                            return (
                                <LiWrapper width="0 0 1px 0" key={index} 
                                            onClick={e => this.handleDetail(item.name)}>
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
    }
}

const mapStateToProps = state => {

    return {
        list: state.cookbookReducer.list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadDate() {
            dispatch(getLoadDateAction())
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(animate(List)));
