import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import './Work.scss';
// import required Swiper modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Virtual } from "swiper";
// Import Swiper styles
import "swiper/css/navigation";
import 'swiper/css';
import 'swiper/css/virtual';
const Work = () => {
  let bgColor = useSelector((state: any) => state.theme.bgColor);
  let darkMode = useSelector((state: any) => state.theme.darkMode);
  let workExperience = useSelector((state: any) => state.theme.workExperience);
  // Localization
  const { t } = useTranslation();
  return (
    <section
      id="work"
      className={`work sections ${darkMode ? "dark" : ""}`}
    >
      <div className="built-with">
        built with <b>Flexbox</b><br />
        and <b>Composition API</b>
      </div>
      <h1>{t("workExperience")}</h1>
      <Swiper modules={[Virtual, Navigation]}
        spaceBetween={30}
        loop={false}
        loopFillGroupWithBlank={false}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        centeredSlidesBounds={true}
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          650: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          900: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          1400: {
            slidesPerView: 5,
            slidesPerGroup: 6,
          },
        }} virtual className="work__items">
        {
          workExperience.map((work: any, index: any) => (
            <SwiperSlide key={work.id} virtualIndex={index} className="work__item" >
              <div
                className="work__item__card work__item__card-front"
                style={{
                  background:
                    'linear-gradient(rgba(' +
                    bgColor +
                    ',.4), rgba(0,0,0,.2)), url(' +
                    work.bgImg +
                    ')',
                }}
              >
                <p>
                  {work.location} <img width="18" src={work.flagImg} alt="" />
                </p>
                <h2>{work.company}</h2>
                <h3>{work.year}</h3>
              </div>

              <div className="work__item__card work__item__card-back">
                <h2>{work.position}</h2>
                <p>{work.details}</p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section >
  )
}

export default Work;