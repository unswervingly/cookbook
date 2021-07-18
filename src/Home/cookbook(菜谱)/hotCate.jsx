import React, { PureComponent } from "react";
import { Grid } from "antd-mobile";
import 'antd-mobile/dist/antd-mobile.css';

import hotCateList from '../../common/cookbook-hotcat.json'

import { HotCateWrapper } from "./style";

export default class HotCate extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            columnNum: 4,
        }
    }

    componentDidMount() {
        let width = window.innerWidth;
        if(width < 375) {
            this.setState ({
                columnNum: 3
            })
        }
    }

  render() {
    return (
      <HotCateWrapper>
        <h2>热门推荐</h2>
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
        />
      </HotCateWrapper>
    );
  }
}
