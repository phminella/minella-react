import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../store/themeSlice";
import { IndexStyle } from "./IndexStyle";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
const Index = () => {
  const dispatch = useDispatch();
  // Localization
  const { i18n, t } = useTranslation();
  const setLanguageHandler = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };
  //
  // dark mode handler
  let darkMode = useSelector((state: any) => state.theme.darkMode);
  const setDarkModeHandler = (dark: Boolean) => {
    dispatch(setDarkMode(dark));
    localStorage.setItem("darkMode", JSON.stringify(dark));
  };
  //
  // Get Scroll
  //
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //
  return (
    <IndexStyle className={darkMode ? "dark" : ""}>
      <nav id="home">
        <ul>
          <li>
            <Link
              activeClass="active"
              to="portfolio-section"
              spy={true}
              smooth={true}
              duration={500}
            >
              {t("portfolio")}
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="it-jobs-section"
              spy={true}
              smooth={true}
              duration={500}
            >
              {t("itJobs")}
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/phminella/minella-react/tree/master"
              target="_blank"
              rel="noreferrer"
            >
              <img className="nav-github" src="img/icon-github.svg" alt="git" />
            </a>
          </li>
        </ul>
        <ul>
          {i18n.language === "ja" && (
            <li>
              <button onClick={() => setLanguageHandler("en")}>
                English <img alt="us" src="img/icon-us.svg" />
              </button>
            </li>
          )}
          {i18n.language === "en" && (
            <li>
              <button onClick={() => setLanguageHandler("ja")}>
                日本語
                <img alt="japan" src="img/icon-japan.svg" />
              </button>
            </li>
          )}
          <li className="dark-mode">
            {!darkMode ? (
              <button
                style={{ fontSize: "1.3rem" }}
                onClick={() => setDarkModeHandler(!darkMode)}
              >
                <img src="img/icon-moon.svg" alt="moon" />
              </button>
            ) : (
              <button
                className="dark-mode-sun"
                style={{ fontSize: "1.3rem" }}
                onClick={() => setDarkModeHandler(!darkMode)}
              >
                &#128261;
              </button>
            )}
          </li>
        </ul>
      </nav>
      <div className="main">
        <div className="title">
          <div className="title-english">
            <h1>MINELLA</h1>
            <h1 className="title-sub">RESUME</h1>
          </div>
          <div
            className="title-japanese"
            style={{ marginTop: `-${scrollPosition * 2}px` }}
          >
          <h2>履歴書</h2>
          </div>
          {/* 
          Icon List 
          */}
          <div>
            <ul>
              <li>
                <img src="/img/icon-react.svg" alt="react" />
              </li>
              <li>
                <img src="/img/icon-vue.svg" alt="cypress" />
              </li>
              <li>
                <img src="/img/icon-next-black.svg" alt="next" />
              </li>
              <li>
                <img src="/img/icon-keystonejs.svg" alt="keystone" />
              </li>
              <li>
                <img src="/img/icon-apollo.svg" alt="apollo" />
              </li>
              <li>
                <img src="/img/icon-graphql-pink.svg" alt="graphql" />
              </li>
              <li>
                <img src="/img/icon-jest.svg" alt="jest" />
              </li>
              <li>
                <img src="/img/icon-cypress.svg" alt="cypress" />
              </li>
            </ul>
            <h2
              className="title-frontend"
              style={{ marginLeft: `-${scrollPosition * 2}px` }}
            >
              frontend developer &#128168;
            </h2>
          </div>
        </div>
        <div className="right-frame">
          <ul>
            <li>
              <p>
                &#128644; <span>{t("nearestStation")}</span> {t("takadanobaba")}
              </p>
            </li>
            <li>
              <p>
                &#11088; <span>{t("visaStatus")}</span> {t("status")}
              </p>
            </li>
            <li>
              <p>
                &#128197; <span>{t("until")}</span> 12/10/2026
              </p>
            </li>
            <li>
              <p>
                &#128123; <span>{t("languages")}</span>
                <img alt="us" src="img/icon-us.svg" />
                {t("fluent")}
                <img alt="japan" src="img/icon-japan.svg" />
                {t("business")}
                <img alt="brazil" src="img/icon-brazil.svg" />
                {t("native")}
              </p>
            </li>
            <li>
              <div>
                <img src="/img/icon-pdf.svg" alt="" />
                <a href="minella-resume-english.pdf" download>
                  Resume
                </a>
              </div>
            </li>
            <li>
              <div>
                <img src="/img/icon-excel.svg" alt="" />
                <a href="ミネラパウロ履歴書.xlsx" download>
                  履歴書
                </a>
              </div>
            </li>
            <li>
              <div>
                <img src="/img/icon-pdf.svg" alt="" />
                <a href="/職務経歴書.pdf" download>
                  職務経歴書
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-footer">
        <div className="education-item">
          <div className="education-item-logo">
            <img src="img/icon-unisul.svg" alt="unisul" />
          </div>
          <div className="education-item-details">
            <ul>
              <h2>UNISUL</h2>
              <li>&#129417; Bachelor in Information Technology</li>
              <li>&#128197; 07/2004 - 02/2009</li>
            </ul>
          </div>
        </div>
        <div className="education-item">
          <div className="education-item-logo">
            <img className="icon-ala" src="img/icon-ala.svg" alt="unisul" />
          </div>
          <div className="education-item-details">
            <ul>
              <h2>Academy of Language Arts</h2>
              <li>&#129417; Japanese Language School</li>
              <li>&#128197; 01/2018 - 12/2019</li>
            </ul>
          </div>
        </div>
      </div>
    </IndexStyle>
  );
};

export default Index;
