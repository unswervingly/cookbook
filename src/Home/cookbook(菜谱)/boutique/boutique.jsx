import React from "react";
import PropTypes from "prop-types";

import { BoutiqueWrapper } from "./style";

const Boutique = (props) => {
  return (
    <BoutiqueWrapper>
      <h2>精品好菜</h2>
      <ul>
        { 
        props.list.length > 0 &&
          props.list.map((item, index) => {
            return (
              <li key={item.id}>
                <div>
                  <img
                    src={item.img}
                    alt=""
                  />
                </div>
                <div>
                  <p>{item.name}</p>
                  <p>
                    <span>{item.all_click}</span>浏览
                    <span>{item.favorites}</span>收藏
                  </p>
                </div>
              </li>
            );
          })}
      </ul>
    </BoutiqueWrapper>
  );
};

// 函数式组件绑定类型检查
Boutique.propTypes = {
  list: PropTypes.array,
};

export default Boutique;
