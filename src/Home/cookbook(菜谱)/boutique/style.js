import styled from 'styled-components';


export const BoutiqueWrapper = styled.div`
    h2 {
      height: .5rem;
      line-height: .5rem;
      padding-left: .1rem;
      color: #666;
      font-weight: normal;


    }

    ul {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      padding-left: .1rem;
      li {
        width: 50%;
        padding-right: .1rem;
        img {
          width: 100%;
        }

        div:last-child {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          height: .6rem;
          background-color: #fff;
          margin-bottom: .1rem;

          p:first-child {
            font-size: .18rem;
          }

          p:last-child {
            color: #666; 
          }
        }
      }
    }
`