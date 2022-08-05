import styled from "styled-components";

export const ItJobsStyle = styled.section`
  background: #fff;
  padding-bottom: 30px;
  @media screen and (max-width: 860px) {
    padding-bottom: 0;
  }
  .it-jobs-title {
    padding: 20px;
    color: var(--h1-light);
  }
  .it-jobs {
    width: 100;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media screen and (max-width: 860px) {
      grid-template-columns: 1fr;
    }
    .it-jobs-item {
      max-width:350px;
      margin:0 auto;
      @media screen and (max-width: 860px) {
        max-width: 450px;
        margin:15px auto;
      }
      padding: 15px;
      box-shadow: 0.5px 1px 1px hsl(220deg 60% 50% / 0.7);
      .it-jobs-info {
        display: grid;
        grid-template-columns: 40% 60%;
        .it-jobs-name {
          h1 {
            font-size: 3rem;
            line-height: 2.3rem;
            color: var(--pink);
          }
        }
        .it-jobs-details {
          img {
            height: 15px;
          }
        }
      }
      .it-jobs-description,
      .it-jobs-tech {
        border-top: 1px solid lightgray;
        margin-top: 10px;
        padding-top: 10px;
      }
      .it-jobs-description {
        white-space: pre-line;
        p::before {
          content: "・";
          color: var(--pink);
        }
      }
      .it-jobs-tech {
        ul {
          display: flex;
          align-items: center;
          gap: 10px;
          li {
            img {
              height: 25px;
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
    }
    .it-jobs-item {
      background: var(--dark-bg);
      color: white;
      box-shadow: 0.5px 1px 1px hsl(220deg 60% 50% / 0.7);
      .it-jobs-description,
      .it-jobs-tech {
        border-top: 1px solid darkgray;
      }
    }
  }
`;
