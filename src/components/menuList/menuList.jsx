import React from "react";
import PropTypes from 'prop-types'

import { MenuWrapper } from "./style";

const MenuList = (props) => {
    const { cate, curCate } = props;
    
    return (
        <MenuWrapper>
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
                    {cate &&
                        cate[curCate].map((item) => {
                            return <li key={item}>{item}</li>;
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
