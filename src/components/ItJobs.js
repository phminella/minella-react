import { ItJobsStyle } from "./ItJobsStyle";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const ItJobs = () => {
  // Localization
  const { t } = useTranslation();
  //
  // dark mode handler
  let darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <ItJobsStyle id="it-jobs-section" className={darkMode ? "dark" : ""}>
      <h1 className="it-jobs-title">/{t("itJobs")}</h1>
      <div className="it-jobs">
        {/* IT JOB ITEM */}
        <div className="it-jobs-item">
          <div className="it-jobs-info">
            <div className="it-jobs-name">
              <h1>Wear You Want</h1>
            </div>
            <div className="it-jobs-details">
              <ul>
                <li>&#129417; Front-end Developer</li>
                <li>
                  <img src="img/icon-thailand.svg" alt="thailand" /> Bangkok,
                  Thailand
                </li>
                <li>&#128197; 03/2016 - 02/2017</li>
              </ul>
            </div>
          </div>
          <div className="it-jobs-description">{t("wyw")}</div>
          <div className="it-jobs-tech">
            <ul>
              <li>
                <img src="img/icon-html5.svg" alt="html" />
              </li>
              <li>
                <img src="img/icon-css3.svg" alt="css" />
              </li>
              <li>
                <img src="img/icon-javascript.svg" alt="js" />
              </li>
              <li>
                <img src="img/icon-angularjs.svg" alt="js" />
              </li>
            </ul>
          </div>
        </div>
        {/* IT JOB ITEM */}
        <div className="it-jobs-item">
          <div className="it-jobs-info">
            <div className="it-jobs-name">
              <h1>CAS-VIG</h1>
            </div>
            <div className="it-jobs-details">
              <ul>
                <li>&#129417; Web Developer</li>
                <li>
                  <img src="img/icon-brazil.svg" alt="brazil" /> Florianopolis,
                  Brazil
                </li>
                <li>&#128197; 10/2007 - 06/2009</li>
              </ul>
            </div>
          </div>
          <div className="it-jobs-description">
            {t("casvig")}
            <p>{t("casvigItem1")}</p>
            <p>{t("casvigItem2")}</p>
            <p>{t("casvigItem3")}</p>
          </div>
          <div className="it-jobs-tech">
            <ul>
              <li>
                <img src="img/icon-html5.svg" alt="html" />
              </li>
              <li>
                <img src="img/icon-css3.svg" alt="css" />
              </li>
              <li>
                <img src="img/icon-javascript.svg" alt="js" />
              </li>
              <li>
                <img src="img/icon-php.svg" alt="js" />
              </li>
              <li>
                <img src="img/icon-mysql.svg" alt="js" />
              </li>
            </ul>
          </div>
        </div>
        {/* IT JOB ITEM */}
        <div className="it-jobs-item">
          <div className="it-jobs-info">
            <div className="it-jobs-name">
              <h1 style={{ fontSize: "35px", lineHeight: "28px" }}>
                VIR TUAL CONVI TES
              </h1>
            </div>
            <div className="it-jobs-details">
              <ul>
                <li>&#129417; Web Designer</li>
                <li>
                  <img src="img/icon-brazil.svg" alt="brazil" /> Florianopolis,
                  Brazil
                </li>
                <li>&#128197; 04/2006 - 02/2008</li>
              </ul>
            </div>
          </div>
          <div className="it-jobs-description">
            {t("vc")}
            <p>{t("vcItem1")}</p>
            <p>{t("vcItem2")}</p>
          </div>
          <div className="it-jobs-tech">
            <ul>
              <li>
                <img src="img/icon-html5.svg" alt="html" />
              </li>
              <li>
                <img src="img/icon-css3.svg" alt="css" />
              </li>
              <li>
                <img src="img/icon-javascript.svg" alt="js" />
              </li>
              <li>
                <img src="img/icon-photoshop.svg" alt="js" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ItJobsStyle>
  );
};

export default ItJobs;
