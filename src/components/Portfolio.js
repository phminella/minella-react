import { PortfolioStyle } from "./PortfolioStyle";
import { useSelector } from "react-redux";
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
const Portfolio = () => {
  // Localization
  const { t } = useTranslation();
  //
  //
  // dark mode handler
  let darkMode = useSelector((state) => state.theme.darkMode);
  //
  // Video Handler
  //
  const [videoLoading, setVideoLoading] = useState(false);
  const vueVideo = useRef(null);
  const kapimaVideo = useRef(null);
  const loaderHandler = (action, el) => {
    if (action === "enter") {
      el === "kapima" ? kapimaVideo.current.play() : vueVideo.current.play();
    } else {
      el === "kapima" ? kapimaVideo.current.pause() : vueVideo.current.pause();
    }
  };
  return (
    <PortfolioStyle id="portfolio-section" className={darkMode ? "dark" : ""}>
      <h1>
        /{t("portfolioTitle")} <br />
        <span className="portfolio-title-hover">{t("hover")} &#9199;</span>
        <span className="portfolio-title-tap">{t("tap")} &#9199;</span>
      </h1>
      <div className="portfolio">
        <div
          className="portfolio-video"
          onMouseEnter={() => loaderHandler("enter", "kapima")}
          onMouseLeave={() => loaderHandler("leave", "kapima")}
          onTouchStart={() => loaderHandler("enter", "kapima")}
          onTouchEnd={() => loaderHandler("leave", "kapima")}
        >
          <video
            poster="video/kapima-placeholder.png"
            preload="auto"
            ref={kapimaVideo}
            muted
          >
            <source src="video/kapima.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="portfolio-card">
            <div>
              <a
                href="https://github.com/phminella/kapima"
                target="_blank"
                rel="noreferrer"
              >
                <img src="img/icon-github.svg" alt="github" />
              </a>
              <a
                href="https://kapima.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="img/icon-link.svg" alt="link" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="portfolio-video"
          onMouseEnter={() => loaderHandler("enter", "vue")}
          onMouseLeave={() => loaderHandler("leave", "vue")}
          onTouchStart={() => loaderHandler("enter", "vue")}
          onTouchEnd={() => loaderHandler("leave", "vue")}
        >
          <video
            poster="video/vue-placeholder.png"
            preload="auto"
            ref={vueVideo}
            muted
          >
            <source src="video/vue.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {videoLoading && (
            <div className="video-loader">
              <img src="img/loader.svg" alt="loader" />
            </div>
          )}
          <div className="portfolio-card">
            <div>
              <a
                href="https://github.com/phminella/minella-vue/tree/master"
                target="_blank"
                rel="noreferrer"
              >
                <img src="img/icon-github.svg" alt="github" />
              </a>
              <a
                href="https://minella-vue.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="img/icon-link.svg" alt="link" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </PortfolioStyle>
  );
};
export default Portfolio;
