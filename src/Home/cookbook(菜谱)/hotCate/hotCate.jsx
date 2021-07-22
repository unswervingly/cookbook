import React, { PureComponent } from "react";
import { withRouter } from 'react-router-dom'
import { Grid } from "antd-mobile";
import 'antd-mobile/dist/antd-mobile.css';

import hotCateList from '../../../common/cookbook-hotcat.json'

import {
  HotCateWrapper,
  H2Wrapper
} from "./style";

class HotCate extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      columnNum: 4,
    }
  }

  componentDidMount() {
    let width = window.innerWidth;
    if (width < 375) {
      this.setState({
        columnNum: 3
      })
    }
  }

  handleRouter(item) {
    let { history } = this.props;
    // console.log(item.title);
    history.push('/list', {title: item.title})
  }


  render() {
    // console.log(hotCateList);
    return (
      <HotCateWrapper>
        <H2Wrapper width="0 0 1px 0">热门推荐</H2Wrapper>
        
        <Grid
          data={hotCateList}
          columnNum={this.state.columnNum}
          hasLine={false}
          renderItem={(dataItem) => (
            <div className="grid-item">
              <img
                src={dataItem.img}
                alt=""
              />
              <div>
                <span>{dataItem.title}</span>
              </div>
            </div>
          )}
          onClick={index => this.handleRouter(index)}
        />
      </HotCateWrapper>
    );
  }
}


export default withRouter(HotCate);