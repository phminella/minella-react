const scrollSpy = function () {

  const section = document.querySelectorAll(".sections");
  const sections = {};
  let i = 0;
  setTimeout(function () {
    Array.prototype.forEach.call(section, function (e) {
      // @ts-ignore
      sections[e.id] = e.offsetTop;
    });
  }, 500);
  window.onscroll = function () {
    console.log("a");
    const scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
    // @ts-ignore
    for (i in sections) {
      // @ts-ignore
      if (sections[i] - 10 <= scrollPosition && i !== "home") {
        if (document.querySelector(".actived")) {
          // @ts-ignore
          document.querySelector(".actived").setAttribute("class", " ");
        }
        // @ts-ignore
        document
          .getElementById(`link-${i}`)
          .setAttribute("class", "actived");
      }
      // @ts-ignore
      if (sections["about"] - 2 > scrollPosition) {
        if (document.querySelector(".actived")) {
          // @ts-ignore
          document.querySelector(".actived").setAttribute("class", " ");
        }
      }
    }
    //
    // Animation 
    //
    // About Section
    if (window.innerWidth > 1200) {
      // @ts-ignore
      const aboutMargin = sections["about"] - scrollPosition;
      // @ts-ignore
      if (scrollPosition < sections["about"]) {
        // @ts-ignore
        document.getElementsByClassName("about__items")[0].style.marginRight = (aboutMargin - 35) + "px";
        // @ts-ignore
        document.getElementsByClassName("about__items")[1].style.marginLeft = (aboutMargin - 35) + "px";
      }
      // Education Section
      // @ts-ignore
      if ((scrollPosition + 300) > sections["education"]) {
        document.getElementsByClassName("education__history__items")[0].classList.add("slide-down");
        setTimeout(function () {
          document.getElementsByClassName("education__history__items")[1].classList.add("slide-down");
        }, 300)
        setTimeout(function () {
          document.getElementsByClassName("education__history__items")[2].classList.add("slide-down");
        }, 600)
      }
    }
    // If small screen, stop animation and send the containers to original place
    else {
      // @ts-ignore
      document.getElementsByClassName("about__items")[0].style.marginRight = "0px";
      // @ts-ignore
      document.getElementsByClassName("about__items")[1].style.marginLeft = "0px";
      document.getElementsByClassName("education__history__items")[0].classList.add("slide-down");
      document.getElementsByClassName("education__history__items")[1].classList.add("slide-down");
      document.getElementsByClassName("education__history__items")[2].classList.add("slide-down");
    }
  }
};

export default scrollSpy;