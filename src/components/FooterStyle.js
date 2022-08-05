import styled from "styled-components";

export const FooterStyle = styled.footer`
  .site-details {
    max-width: 1000px;
    margin: 0 auto;
    padding: 40px 20px 20px 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    .footer-list {
      @media screen and (max-width: 860px) {
        display: none;
      }
      li {
        display: flex;
        align-items: center;
        margin: 5px 0;
        a {
          text-decoration: underline;
          &:hover {
            color: #f7145f;
          }
        }
        .list-img {
          width: 50px;
          img {
            height: 25px;
          }
        }
      }
    }
    .residence-card {
      text-align: right;
      font-size: 0.8rem;
      margin: 5px 0;
      @media screen and (max-width: 860px) {
        display: none;
      }
      img {
        width: 80%;
        border-radius: 5px;
        border: 2px solid black;
      }
    }
  }
  .project-capybara {
    border-top: 1px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: right;
    padding: 10px;
    padding-right: 80px;
    margin-top: 10px;
    span {
      font-weight: bold;
      margin:0 5px;
    }
  }
  &.dark {
    background: var(--dark-bg);
    color: white;
    a {
      color: white;
    }
    .project-capybara {
      border-top: 1px solid hsl(220deg 60% 50% / 0.7);
    }
  }
`;
