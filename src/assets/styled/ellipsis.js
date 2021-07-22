import styled from 'styled-components';

const ellipsis = (Wrapped) => {
    const Enhanced = styled(Wrapped)`
        white-space: nowrap; /*强制文本在一行内显示，不换行*/
        overflow: hidden; /*超出部分隐藏*/
        text-overflow: ellipsis;/*文本溢出时显示省略标记  兼容IE*/
    `
    return Enhanced;
}

export default ellipsis;