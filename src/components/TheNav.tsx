import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBgColor, setDarkMode } from "../store/themeSlice";
import './TheNav.scss';
import { useTranslation } from "react-i18next";
import { Link } from 'react-scroll';
const TheNav = () => {
  const dispatch = useDispatch();
  let darkMode = useSelector((state: any) => state.theme.darkMode);
  let bgColor = useSelector((state: any) => state.theme.bgColor);
  //
  // Toggle Menu
  //
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenuHandler = () => {
    setShowMenu(!showMenu);
    if (!showMenu) {
      var style = document.createElement("style");
      style.innerHTML = `body::-webkit-scrollbar {display: none;}`;
      document.head.appendChild(style);
    } else {
      document.head.removeChild(document.head.lastChild!);
    }
  }
  //
  // Set Language
  //
  const { t, i18n } = useTranslation();
  const setLanguageHandler = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  }
  // Set Dark Mode
  const setDarkModeHandler = (dark: Boolean) => {
    dispatch(setDarkMode(dark));
    localStorage.setItem("darkMode", JSON.stringify(dark));
  }
  // Set Theme Color
  const setBgColorHandler = (color: string) => {
    dispatch(setBgColor(color));
    localStorage.setItem("bgColor", color);
  }
  return (
    <section>
      <div className={`menu ${showMenu ? "" : "hidden"} ${darkMode ? "dark" : ""}`}>
        <ul>
          <li>
            <Link onClick={toggleMenuHandler} href="about" className="ul-link" activeClass="active" to="about" spy={true} smooth={true} duration={500}>{t('about')}</Link>
          </li>
          <li>
            <Link onClick={toggleMenuHandler} href="work" className="ul-link" activeClass="active" to="work" spy={true} smooth={true} duration={500}>{t('work')}</Link>
          </li>
          <li>
            <Link onClick={toggleMenuHandler} href="education" className="ul-link" activeClass="active" to="education" spy={true} smooth={true} duration={500}>{t('education')}</Link>
          </li>
          <li>
            <Link onClick={toggleMenuHandler} href="contact" className="ul-link" activeClass="active" to="contact" spy={true} smooth={true} duration={500}>{t('contact')}</Link>
          </li>
          <li id="language">
            <button className={`ul-link ${i18n.language === 'en' ? "activeLang" : ""}`} onClick={() => setLanguageHandler("en")}>
              English
            </button>
            /
            <button className={`ul-link ${i18n.language === 'ja' ? "activeLang" : ""}`} onClick={() => setLanguageHandler("ja")}>
              日本語
            </button>
          </li>
          <footer>
            <p>
              <img width="20" src="/img/icon-photoshop.png" alt="" />
              <a href="minella-resume-design.zip">
                mock-up file (.psd)
                <img
                  height="20"
                  className={`icon-download ${darkMode ? "" : "hidden"}`}
                  src="/img/icon-download.png"
                  alt="" />
                <img
                  height="20"
                  className={`icon-download ${darkMode ? "hidden" : ""}`}
                  src="/img/icon-download-dark.png"
                  alt=""
                /></a>
            </p>
            <p>
              <img height="20" src="/img/icon-react.svg" alt="" />
              <a href="https://github.com/phminella/minella-react/tree/master" target="_blank"
              >react project
                <img
                height="20"
                className={`icon-download ${darkMode ? "" : "hidden"}`}
                src="/img/icon-github.png"
                alt="" />
              <img
                height="20"
                className={`icon-download ${darkMode ? "hidden" : ""}`}
                src="/img/icon-github.svg"
                alt="" />
              </a>
            </p>
            <p>
              <img height="20" src="/img/work/flags/uk.svg" alt="" />
              <a href="minella-resume-english.pdf" download
              >resume.pdf (english)
                <img
                  height="20"
                  className={`icon-download ${darkMode ? "" : "hidden"}`}
                  src="/img/icon-download.png"
                  alt="" />
                <img
                  height="20"
                  className={`icon-download ${darkMode ? "hidden" : ""}`}
                  src="/img/icon-download-dark.png"
                  alt=""
                /></a>
            </p>
            <p>
              <img height="20" src="/img/work/flags/japan.svg" alt="" />
              <a href="ミネラパウロ履歴書.xlsx" download
              >履歴書.xlsx (japanese)
                <img
                  height="20"
                  className={`icon-download ${darkMode ? "" : "hidden"}`}
                  src="/img/icon-download.png"
                  alt="" />
                <img
                  height="20"
                  className={`icon-download ${darkMode ? "hidden" : ""}`}
                  src="/img/icon-download-dark.png"
                  alt=""
                /></a>
            </p>
            <p>
              <img height="20" src="/img/work/flags/japan.svg" alt="" />
              <a href="職務経歴書.pdf" download
              >職務経歴書.pdf (japanese)
                <img
                  height="20"
                  className={`icon-download ${darkMode ? "" : "hidden"}`}
                  src="/img/icon-download.png"
                  alt="" />
                <img
                  height="20"
                  className={`icon-download ${darkMode ? "hidden" : ""}`}
                  src="/img/icon-download-dark.png"
                  alt=""
                /></a>
            </p>
          </footer>
        </ul>
      </div >
      <header className={`header ${darkMode ? "dark" : ""}`}>
        <div className="header__left">
          <button className={bgColor === '65, 184, 131' ? "activeColor" : ""} onClick={() => setBgColorHandler('65, 184, 131')}></button>
          <button className={bgColor === '128, 128, 128' ? "activeColor" : ""} onClick={() => setBgColorHandler('128, 128, 128')}></button>
          <button className={bgColor === '96, 171, 201' ? "activeColor" : ""} onClick={() => setBgColorHandler('96, 171, 201')}></button >
          <div>
            <input
              type="checkbox"
              className="checkbox"
              id="darkMode"
              checked={darkMode}
              onChange={() => setDarkModeHandler(!darkMode)} />
            <label htmlFor="darkMode" className="label">
              <img src="/img/icon-moon.png" alt="" />
              <img src="/img/icon-sun.png" alt="" />
              <i className="fas fa-sun"></i>
              <div className="ball" />
            </label>
          </div>
        </div >
        <ul className="header__sections">
          <li id="link-about">
            <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>{t('about')}</Link>
          </li>
          <li id="link-work">
            <Link activeClass="active" to="work" spy={true} smooth={true} duration={500}>{t('work')}</Link>
          </li>
          <li id="link-education">
            <Link activeClass="active" to="education" spy={true} smooth={true} duration={500}>{t('education')}</Link>
          </li>
          <li id="link-contact">
            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>{t('contact')}</Link>
          </li>
          <li></li>
        </ul>
      </header >
      <div
        id="nav-icon3"
        className={showMenu ? "open" : "" || darkMode ? "dark" : ""}
        onClick={toggleMenuHandler}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div >
    </section>
  )
};

export default TheNav;