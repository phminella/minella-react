import { Link } from 'react-scroll';
import scrollSpy from "./plugins/scroll-spy";
import { useSelector, useDispatch } from "react-redux";
import { setBgColor, setDarkMode } from "./store/themeSlice";
import './App.scss';
import React, { useEffect } from "react";
import i18n from "./plugins/i18n";
//Components
import Index from "./components/Index";
import TheNav from "./components/TheNav";
import About from "./components/About";
import Education from "./components/Education";
import useGetData from "./hooks/getData";
const Work = React.lazy(() => import('./components/Work'));
const Contact = React.lazy(() => import('./components/Contact'));


function App() {
  let darkMode = useSelector((state: any) => state.theme.darkMode);
  const dispatch = useDispatch();
  const localStorageHandler = () => {
    // Theme Background Color
    if (localStorage.getItem("bgColor")) {
        // @ts-ignore
        dispatch(setBgColor(localStorage.getItem("bgColor")));
    }
    // Dark mode
    if (localStorage.getItem("darkMode")) {
        // @ts-ignore
        dispatch(setDarkMode(JSON.parse(localStorage.getItem("darkMode"))));
    }
    // Language
    if (localStorage.getItem('language')) {
        // @ts-ignore
        i18n.changeLanguage(localStorage.getItem('language'));
    }
}
  useEffect(() => scrollSpy(), []);
  useEffect(() => localStorageHandler(), 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [])
  useGetData(
    "https://vuefire-849fd-default-rtdb.firebaseio.com/work.json",
    "workExperience"
  );
  return (
  <div className="App">
    <TheNav></TheNav>
    <Index></Index>    
    <About></About>
    <Work></Work>
    <Education></Education>
    <Contact></Contact>
    
    {/* <!-- Button to move page back to the top --> */}
    <div className={`move-up ${darkMode ? "dark" : ""}`}>
      <Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>
        <img height="25" alt="arrow-up" src="/img/arrow-up.svg"
        /></Link>
    </div>
  </div >
);
}

export default App;
