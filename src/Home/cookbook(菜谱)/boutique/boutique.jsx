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
              <li key={item.id} onClick={e => props.onGoDetail(item.name)}>
                <div>
                  <img
                    src={item.img}
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-nowrap">{item.name}</p>
                  <p className="text-nowrap">
                    <span>{item.all_click}浏览</span>
                    <span>{item.favorites}收藏</span>
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
