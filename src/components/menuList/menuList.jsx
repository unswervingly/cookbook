import React from "react";
import PropTypes from 'prop-types'

import { MenuWrapper } from "./style";

const MenuList = (props) => {
    const { cate, curCate } = props;
    
    return (
        <MenuWrapper  width="1px 0 0 0">
            <aside>
                <ul>
                    {cate &&
                        Object.keys(cate).map((item) => {
                            // console.log(item);
                            return (
                                <li
                                    key={item}
                                    className={curCate === item ? 'active' : ''}
                                    onClick={e => props.onAsideClick(item)}
                                >
                                    <span>{item}</span>
                                </li>
                            );
                        })}
                </ul>
            </aside>
            <section>
                <ul>
                    {cate && curCate &&
                        cate[curCate].map((item) => {
                            return <li key={item} onClick={e => props.onGoList(item)}>{item}</li>;
                        })}
                </ul>
            </section>
        </MenuWrapper>
    );
};

MenuList.propTypes = {
    cate: PropTypes.object,
    curCate: PropTypes.string
}

export default MenuList;
