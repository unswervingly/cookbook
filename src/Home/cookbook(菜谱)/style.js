import styled from 'styled-components';

export const CookBooksWrapper = styled.div`
    header {
        height: .44rem;
        line-height: .44rem;
        text-align: center;
        font-size: .16rem;
        color: #fff;
        background-color: #ee742f;
    }
`


export const SwiperWrapper = styled.div`
  position: relative;

  height: 0;
  font-size: 0;
  padding-bottom: 66.666667%;

  .slider.am-carousel {
   position: static !important;
  }
`

export const HotCateWrapper = styled.div`
    h2 {
      height: .5rem;
      line-height: .5rem;
      padding-left: .1rem;
      color: #666;
      font-weight: normal;
      background-color: #fff;
      border-bottom: 1px solid #ccc;
    }

    .am-grid {
        padding-top: .2rem;
        background-color: #fff;

        .am-grid-item-content {
          padding: 0 !important;
          display: flex;
          justify-content: center;
          align-items: center;

        .grid-item {

          img {
            width: .6rem;
            height: 0.6rem;
            margin-bottom: .04rem;
            border-radius: .06rem;

            &[src='blank'] {
              display: none;
            }

          }

        }

      }
    }
    
    
`