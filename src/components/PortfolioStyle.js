import styled from "styled-components";

export const PortfolioStyle = styled.section`
  background: #fff;
  padding: 60px 0;
  @media screen and (max-width: 860px) {
    padding: 15px 0;
  }
  h1 {
    padding: 20px;
    line-height: 0.9em;
    color: var(--h1-light);
    span {
      font-size: 0.7em;
      color: lightblue;
    }
  }
  .portfolio {
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 860px) {
      grid-template-columns: 1fr;
    }
    gap: 20px;
    padding: 20px 35px 20px 20px;
    @media screen and (max-width: 860px) {
      grid-template-columns: 1fr;
      padding: 5px;
    }
    .portfolio-video {
      position: relative;
      video,
      img {
        width: 100%;
        border-radius: 20px;
      }
      &:hover {
        .portfolio-card {
          transform: scale(1);
        }
      }
      .portfolio-card {
        position: absolute;
        top: 0;
        left: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        height: 100%;
        width: 70px;
        color: white;
        font-weight: 900;
        transform: scale(1, 0);
        transition: transform ease-in-out 0.2s;
        z-index: 2;
        div {
          a {
            img {
              &:hover {
                filter: invert(21%) sepia(58%) saturate(7025%)
                  hue-rotate(330deg) brightness(97%) contrast(99%);
              }
            }
          }
        }
      }
    }
  }
  &.dark {
    background: var(--dark-bg);
    h1 {
      color: lightskyblue;
      span {
        color: yellow;
      }
    }
  }
`;
