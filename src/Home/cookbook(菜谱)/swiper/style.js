import styled from 'styled-components';

export const SwiperWrapper = styled.div`
  position: relative;

  height: 0;
  font-size: 0;
  padding-bottom: 66.666667%;
  /* 前端开发免不了有图片、视频等一些模块需要大力度渲染，当网速较慢时这些模块的渲染时间相对较长，
  导致页面其他元素位置可能发生细微抖动，这对产品的用户体验是有所影响的。
  这时用个小技巧便可以解决问题。 */
  
  .slider.am-carousel {
   position: static !important;
}
`