import { Link } from 'react-scroll';
import { useSelector, useDispatch } from "react-redux";
import { setDarkMode } from "./store/themeSlice";
import './App.scss';
import { useEffect } from "react";
import i18n from "./plugins/i18n";
//Components
import Index from "./components/Index";
import Portfolio from './components/Portfolio';
import ItJobs from './components/ItJobs';
import Footer from './components/Footer';

function App() {
  let darkMode = useSelector((state: any) => state.theme.darkMode);
  const dispatch = useDispatch();
  const localStorageHandler = () => {
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
  useEffect(() => localStorageHandler(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [])
  return (
    <div className="App">
      <Index></Index>
      <Portfolio></Portfolio>
      <ItJobs></ItJobs>
      <Footer></Footer>
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
