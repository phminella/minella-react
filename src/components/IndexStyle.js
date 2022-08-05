import styled, { keyframes } from "styled-components";

const animateText = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

export const IndexStyle = styled.section`
  nav {
    position: absolute;
    top: 0;
    width: 100vw;
    padding: 10px 20px;
    display: grid;
    grid-template-columns: 60% 40%;
    align-items: center;
    background: lightcyan;
    ul {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 0.9rem;
      &:last-child {
        justify-content: right;
        margin-right: 15px;
      }
      li {
        a {
          &:hover {
            img {
              filter: invert(40%) sepia(94%) saturate(6890%) hue-rotate(329deg)
                brightness(95%) contrast(104%);
            }
          }
        }
        button {
          display: flex;
          align-items: center;
          background: none;
          border: none;
          font-weight: 600;
          line-height: 1em;
          img {
            width: 20px;
            height: 20px;
            margin-left: 5px;
          }
          &:hover {
            color: var(--pink);
          }
        }
        &.dark-mode {
          button:hover img {
            filter: invert(40%) sepia(94%) saturate(6890%) hue-rotate(329deg)
              brightness(95%) contrast(104%);
          }
        }
      }
    }
  }
  .main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 1150px) {
      grid-template-columns: 6fr 4fr;
    }
    align-items: center;
    justify-content: center;
    padding-top: 100px;
    min-height: 75vh;
    @media screen and (max-width: 860px) {
      grid-template-columns: 1fr;
      padding: 20px 0;
      padding-top: 70px;
    }
    .title {
      position: relative;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      h2 {
        background-image: linear-gradient(
          -45deg,
          #ee7752,
          #e73c7e,
          #23a6d5,
          #23d5ab
        );
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        background-size: 200% 100%;
        animation: ${animateText} 3s ease infinite;
      }
      //
      // Title English
      //
      .title-english {
        h1 {
          font-size: 7rem;
          line-height: 5.5rem;
          font-weight: 900;
          text-align: center;
          color: var(--h1-light);
          &.title-sub {
            font-size: 7.5rem;
            line-height: 6rem;
          }
        }
      }
      //
      // Title Japanese
      //
      .title-japanese h2 {
        font-size: 3.8rem;
        writing-mode: vertical-rl;
        text-orientation: upright;
        margin-left: -18px;
      }
      // frontend developer
      .title-frontend {
        font-size: 3.2rem;
        line-height: 3.2rem;
        width: 100%;
        text-align: center;
      }
      ul {
        li {
          display: inline-block;
          margin: 0 1.25rem;
          &:first-child {
            margin-left: 0;
          }
          &:last-child {
            margin-right: 0;
          }
          img {
            width: 2.2rem;
          }
        }
      }
    }
    @media screen and (max-width: 550px) {
      .title {
        .title-english h1 {
          font-size: 4.2rem;
          line-height: 3.2rem;
          &.title-sub {
            font-size: 4.5rem;
            line-height: 3.3rem;
          }
        }
        .title-japanese h2 {
          font-size: 2.2rem;
          margin-left: -11px;
        }
        .title-frontend {
          font-size: 1.9rem;
          line-height: 1.9rem;
        }
        ul li {
          margin: 0 6.5px;
          &:first-child {
            margin-left: 0;
          }
          &:last-child {
            margin-right: 0;
          }
          img {
            width: 1.8rem;
          }
        }
      }
    }
  }
  .right-frame {
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
      li {
        span {
          color: var(--pink);
          font-weight: 600;
        }
        img {
          height: 20px;
          margin-right: 10px;
        }
        p {
          @media screen and (max-width: 400px) {
            font-size: 0.9rem;
          }
          img {
            height: 10px;
            margin: 0 5px;
          }
        }
      }
    }
  }
  &.dark {
    background: var(--dark-bg);
    color: white;
    a,
    button {
      color: white;
      &:hover {
        color: var(--pink);
        .nav-github {
          filter: invert(40%) sepia(94%) saturate(6890%) hue-rotate(329deg)
            brightness(95%) contrast(104%);
        }
      }
    }
    nav {
      background: #010d1a;
      .nav-github {
        filter: invert(100%) sepia(17%) saturate(7417%) hue-rotate(183deg)
          brightness(114%) contrast(100%);
      }
      .dark-mode-sun:hover {
        color: transparent;
        text-shadow: 0 0 0 var(--pink);
      }
    }
    .main {
      .title-wrapper .title-english {
        h1,
        h2 {
          color: white;
        }
      }
      ul {
        background: none;
      }
    }
  }
  .header-footer {
    min-height: 25vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    max-width: 1000px;
    padding: 0 0 30px 30px;
    @media screen and (max-width: 860px) {
      grid-template-columns: 1fr;
      margin-top: 30px;
      padding: 0;
      gap: 0;
    }
    .education-item {
      display: grid;
      justify-content: center;
      align-items: center;
      grid-template-columns: 30% 70%;
      max-width: 500px;
      min-height: 120px;
      border-radius: 10px;
      box-shadow: 0.5px 1px 1px hsl(220deg 60% 50% / 0.7);
      padding: 10px;
      @media screen and (max-width: 860px) {
        max-width: 100%;
        grid-template-columns: 40% 60%;
      }
      img {
        width: 8rem;
        &.icon-ala {
          filter: invert(42%) sepia(62%) saturate(1799%) hue-rotate(178deg)
            brightness(101%) contrast(101%);
        }
      }
    }
  }
`;
