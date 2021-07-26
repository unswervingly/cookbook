import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { NavBar, Icon } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

import {animate} from '../hoc/animate'
import {
    DetailWrapper,
} from './style'
class Detail extends PureComponent {

    handleLeft(title) {
        let { history } = this.props;
        // history.goBack();
        // console.log(this.props.location.state.from);
        let {from, listTitle} = this.props.location.state
        history.push(from, {title: listTitle, from: '/detail'});
    }


    render() {

        const {state} = this.props.location;
        return (
            <DetailWrapper>
                <NavBar mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={e => this.handleLeft()}
                    style={{ backgroundColor: '#ee742f' }}
                >
                    {state && state.title}
                </NavBar>
                <div>
                    <div>
                        <img src="https://s1.cdn.jiaonizuocai.com/videoImg/201509/0722/55ed97982b6fc.JPG/OTAweDYwMA" alt="" />
                    </div>
                    <div className="cookbook_name">
                        <h1>{this.props.location.state && this.props.location.state.title}</h1>
                        <h3>666666浏览/9999999收藏</h3>
                        <button>收藏</button>
                    </div>
                </div>
            </DetailWrapper>
        )
    }
}

export default withRouter(animate(Detail));