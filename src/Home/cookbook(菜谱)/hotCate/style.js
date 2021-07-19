import styled from 'styled-components';


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