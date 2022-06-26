import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import './Index.scss';
const Index = () => {
  let bgColor = useSelector((state: any) => state.theme.bgColor);
  let darkMode = useSelector((state: any) => state.theme.darkMode);
  // Localization
  const { i18n } = useTranslation();
  const setLanguageHandler = (lng: string) => {
    i18n.changeLanguage(lng);
  }
  //
  // loading
  //
  let [loading, setLoading] = useState(true);
  //
  return (
    <section id="home" className={`sections home ${darkMode ? "dark" : ""}`}>
      <div id="left-frame" style={{
        background: 'rgb(' + bgColor + ')',
      }}>
        <ul>
          <li className={i18n.language === "en" ? "hidden" : ""}>
            <a href="#" onClick={() => setLanguageHandler("en")}>
              English
            </a>
          </li>
          <li className={i18n.language === "ja" ? "hidden" : ""}>
            <a href="#" onClick={() => setLanguageHandler("ja")}>
              日本語
            </a>
          </li>
          <li>
            <a href="minella-resume-design.zip"
            ><img width="20" src="/img/icon-photoshop.png" alt="" /> Mock-up
              File (.psd)
              <img
                width="25"
                className={`icon-download ${darkMode ? "hidden" : ""}`}
                src="/img/icon-download.png"
                alt="" />
              <img
                height="25"
                className={`icon-download ${darkMode ? "" : "hidden"}`}
                src="/img/icon-download-dark.png"
                alt="" /></a>
          </li>
          <li>
            <a href="https://github.com/phminella/minella-react/tree/master" target="_blank">
              <img width="25" src="/img/icon-react.svg" alt="" /> React Project
              <img
                height="25"
                className={`icon-download ${darkMode ? "hidden" : ""}`}
                src="/img/icon-github.png"
                alt="" />
              <img
                height="25"
                className={`icon-download ${darkMode ? "" : "hidden"}`}
                src="/img/icon-github.svg"
                alt="" /></a>
          </li>
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 172 172"
                fill={"#000000"}
              >
                <g
                  fill="none"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  mix-blend-mode={"normal"}
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="#ffffff">
                    <path
                      d="M28.66667,28.66667c-7.91917,0 -14.33333,6.41417 -14.33333,14.33333v86c0,7.91917 6.41417,14.33333 14.33333,14.33333h114.66667c7.91917,0 14.33333,-6.41417 14.33333,-14.33333v-86c0,-7.91917 -6.41417,-14.33333 -14.33333,-14.33333zM28.66667,43h114.66667v7.18066l-57.33333,35.81934l-57.33333,-35.81934zM28.66667,64.514l57.33333,35.81934l57.33333,-35.81934v64.486h-114.66667z"
                    ></path>
                  </g>
                </g></svg>
              phminella@gmail.com
            </a>
          </li>
        </ul >
      </div >
      <div
            style={{
                backgroundColor: "rgb(" +
                    bgColor + ")",
                minHeight: "100vh",
                minWidth: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
            className={!loading ? "hidden" : ""}
        >
            <img src="/img/loader.svg" alt="" />
        </div >
      <div id="main" className={loading ? "hidden" : ""} onLoad={()=> setLoading(false)} style={{
        background:
          'linear-gradient(to right bottom, rgb(' +
          bgColor +
          '), rgb(0, 82, 121, 0)), url(/img/index-bg.jpg)'
      }}>
        <div id="title">
          <div className="title-tabs">
            <div className="title-tab"><img height="50" src="/img/icon-react.svg" alt="" /></div>
            <a href="https://minella-vue.firebaseapp.com/">
            <div className="title-tab" style={{
              background: 'rgb(' + bgColor + ')',
            }}><img height="50" src="/img/icon-vue.svg" alt="" /></div>
            </a>
          </div>
          <h1>Web Developer</h1>
        </div>
      </div>
    </section >
  )
};

export default Index; 