import { PortfolioStyle } from "./PortfolioStyle";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const Portfolio = () => {
  // Localization
  const { t } = useTranslation();
  //
  //
  // dark mode handler
  let darkMode = useSelector((state) => state.theme.darkMode);
  const [hovered, setHovered] = useState("");
  return (
    <PortfolioStyle id="portfolio-section" className={darkMode ? "dark" : ""}>
      <h1>
        /{t("portfolioTitle")} <br />
        <span>{t("hover")} &#9199;</span>
      </h1>
      <div className="portfolio">
        <div
          className="portfolio-video"
          onMouseEnter={() => setHovered("kapima")}
          onMouseLeave={() => setHovered("")}
        >
          {hovered !== "kapima" ? (
            <img src="video/kapima-placeholder.png" alt="kapima" />
          ) : (
            <video poster="video/kapima-placeholder.png" autoPlay muted>
              <source src="video/kapima.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <div className="portfolio-card">
            <div>
              <a href="https://github.com/phminella/kapima" target="_blank" rel="noreferrer">
                <img src="img/icon-github.svg" alt="github" />
              </a>
              {/* <a href="http://google.com" target="_blank" rel="noreferrer"> */}
                <img src="img/icon-link.svg" alt="link" />
              {/* </a> */}
            </div>
          </div>
        </div>
        <div
          className="portfolio-video"
          onMouseEnter={() => setHovered("vue")}
          onMouseLeave={() => setHovered("")}
        >
          {hovered !== "vue" ? (
            <img src="video/vue-placeholder.png" alt="vue" />
          ) : (
            <video poster="video/vue-placeholder.png" autoPlay muted>
              <source src="video/vue.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <div className="portfolio-card">
            <div>
              <a href="https://github.com/phminella/minella-vue/tree/master" target="_blank" rel="noreferrer">
                <img src="img/icon-github.svg" alt="github" />
              </a>
              <a href="https://minella-vue.web.app/" target="_blank" rel="noreferrer">
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
