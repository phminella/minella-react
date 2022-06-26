import './About.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import '../plugins/i18n';
import { useTranslation } from "react-i18next";
const About = () => {
  let darkMode = useSelector((state: any) => state.theme.darkMode);
  // Translation Plugin
  const { t } = useTranslation();
  //
  // State
  //
  const [isBlur, setIsBlur] = useState(true);
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  // Password change handler
  const passwordChangeHandler = (event: any) => {
    setPassword(event.target.value);
  }
  //
  // Toggle Blur
  //
  const toggleBlurHandler = (event: any) => {
    setPassword("");
    event.preventDefault();
    if (event.target.password.value === "minellarc") {
      setIsBlur(false);
      setError(false);
      var Scroll = require('react-scroll');
      var scroller = Scroll.scroller;
      scroller.scrollTo('residence-card', {
        duration: 1000,
        delay: 100,
        smooth: true,
        offset: -150, // Scrolls to element + 50 pixels down the page
      })
    } else {
      setError(true);
    }
  }
  //
  return (
    <section id="about" className="sections about">
      <div className="about-background" >
        <h1>{t('about')}</h1>
      </div>
      <div className="built-with" > built with <b>CSS Grid </b></div >
      <div className={`about__container ${darkMode ? "dark" : ""}`}>
        <div className="about__items" id="about-details" >
          <div>
            <ul>
              <li>
                <b>Paulo Henrique Minella </b>
              </li>
              <li> 06 / 12 / 1985 </li>
              <li > Male </li>
              <li>
                〒169 - 0075 <br />
                東京都新宿区高田馬場３－３－１５グランハイツ高田馬場
              </li>
              <li>(070) - 2797 - 1994 </li>
              <li> phminella@gmail.com</li>
              <li>
                Visa Status: Engineer / Specialist in Humanities / Int'l Services
              </li>
              <li> Expires 12 / 10 / 2026 </li>
            </ul>
          </div>
        </div>
        <div className="about__items">
          <div id="residence-card" >
            <img
              id="residence-card-img"
              className={`card-img ${isBlur ? "" : "hidden"}`}
              src="/img/about/residence-card-blurred.jpg"
              alt=""
            />
            <img
              className={`card-img ${isBlur ? "hidden" : ""}`}
              src="/img/about/residence-card.png"
              alt=""
            />
            <p className={error ? "" : "hidden"}>
              <img src="/img/error.png" alt="" />
              {t('passwordError')}
            </p>
            <div id="about-form" className={!isBlur ? 'height-zero' : ''}>
              <form onSubmit={toggleBlurHandler}>
                <input
                  type="password" minLength={8} value={password} name="password" placeholder={t('password')} onChange={passwordChangeHandler} required />
                <button type='submit'>
                  {t('showCard')}
                </button>
              </form>
            </div>
          </div >
        </div >
      </div >
    </section >
  )
}

export default About;