import React, { memo, useCallback, useEffect, useState } from 'react'
import { useHistory, withRouter } from 'react-router-dom'
import { Grid } from "antd-mobile";
import 'antd-mobile/dist/antd-mobile.css';

import hotCateList from '../../../common/cookbook-hotcat.json'

import {
  HotCateWrapper,
  H2Wrapper
} from "./style";


const HotCate = memo(function(props) {

  const [columnNum, setColumnNum] = useState(4);

  const history = useHistory();

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 375) {
      // this.setState({
      //   columnNum: 3
      // })
      setColumnNum(3)
    }
  }, [])

  const handleRouter = useCallback((item) => {
      // let { history } = this.props;
      history.push('/list', { title: item.title, from: '/home' })
    },[history])

  return (
    <HotCateWrapper>
      <H2Wrapper width="0 0 1px 0">热门推荐</H2Wrapper>

      <Grid
        data={hotCateList}
        columnNum={columnNum}
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
        onClick={index => handleRouter(index)}
      />
    </HotCateWrapper>
  );
})

export default withRouter(HotCate);