import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { NavBar, Icon } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';


import {
    DetailWrapper,
} from './style'
class Detail extends PureComponent {

    handleLeft() {
        let { history } = this.props;
        history.goBack();
    }


    render() {
        return (
            <DetailWrapper>
                <NavBar mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={e => this.handleLeft()}
                    style={{ backgroundColor: '#ee742f' }}
                >
                    {this.props.location.state.title}
                </NavBar>
                <div>
                    <div>
                        <img src="https://s1.cdn.jiaonizuocai.com/videoImg/201509/0722/55ed97982b6fc.JPG/OTAweDYwMA" alt="" />
                    </div>
                    <div className="cookbook_name">
                        <h1>{this.props.location.state.title}</h1>
                        <h3>666666浏览/9999999收藏</h3>
                        <button>收藏</button>
                    </div>
                </div>
            </DetailWrapper>
        )
    }
}

export default withRouter(Detail);