import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import "./Education.scss";
const Education = () => {
  let darkMode = useSelector((state: any) => state.theme.darkMode);
  // Localization
  const { t } = useTranslation();
  return (
    <section
      id="education"
      className={`education sections ${darkMode ? "dark" : ""}`}
    >
      <div className="built-with">built with <b>Flexbox</b></div>
      <h1>{t("education2")}</h1>
      <div className="education__history">
        <div className="education__history__items" style={{
          background: "linear-gradient(to right bottom,rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.2)), url(/img/education/estacio-bg.png)"}}>
        <div>
          <img src="img/education/estacio-logo.png" alt="" />
          <h2>Estacio de Sa</h2>
          <p>{t("business")}</p>
          <p><b>2003 - 2004</b></p>
        </div>
      </div>
      <div className="education__history__items" style={{
          background: "linear-gradient(to right bottom,rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.2)), url(/img/education/unisul-bg.png)"}}>
        <div>
          <img src="img/education/unisul-logo.png" alt="" />
          <h2>Unisul</h2>
          <p>{t("message.it")}</p>
          <p><b>2004 - 2009</b></p>
        </div>
      </div>
      <div className="education__history__items" style={{
          background: "linear-gradient(to right bottom,rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.2)), url(/img/education/ala-bg.png)"}}>
        <div>
          <img src="img/education/ala-logo.png" alt="" />
          <h2>Academy of Language Arts</h2>
          <p>{t("message.language")}</p>
          <p><b>2018 - 2019</b></p>
        </div>
      </div>
    </div>
    </section >
  )};

export default Education;