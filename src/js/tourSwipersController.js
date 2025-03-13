import Swiper from "swiper";

let tourPosterSwiper;
let tourCardSwiper;

const tourCards = document.querySelectorAll(".tour-card");

export const initTourCardsSwiper = () => {
  const updateSwiperClasses = (tourCardsContainer, action) => {
    tourCardsContainer.classList[action]("swiper");
    tourCardsContainer.firstElementChild.classList[action]("swiper-wrapper");
    tourCards.forEach((tourCard) => {
      tourCard.classList[action]("swiper-slide");
    });
  };

  const createSwiper = (tourCardsContainer) => {
    return new Swiper(tourCardsContainer, {
      initialSlide: tourPosterSwiper.activeIndex,
      spaceBetween: 20,
      centeredSlides: true,
      slideToClickedSlide: true,
      allowTouchMove: true,
      breakpoints: {
        900: {
          slidesPerView: 4.5,
        },
        700: {
          slidesPerView: 3.5,
        },
        500: {
          slidesPerView: 2.5,
        },

        320: {
          slidesPerView: 1.5,
          spaceBetween: 15,
        },
      },
      on: {
        slideChange: function () {
          tourPosterSwiper.slideTo(this.activeIndex);
        },
        destroy: function () {
          updateSwiperClasses(tourCardsContainer, "remove");
        },
      },
    });
  };

  // инициализация свайпера в зависимости от ширины экрана и наличия значения переменной
  const handleTourCardsSwiperEvent = () => {
    if (window.innerWidth <= 1200 && !tourCardSwiper) {
      const tourCardsContainer = document.querySelector(".map__tour-cards-container");
      updateSwiperClasses(tourCardsContainer, "add");
      tourCardSwiper = createSwiper(tourCardsContainer);
    }
    if (window.innerWidth > 1200 && tourCardSwiper) {
      tourCardSwiper.destroy(true, true);
      tourCardSwiper = null;
    }
  };

  // функция для уменьшения частого вызова resize
  let resizeTimeout;
  const debounceResize = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleTourCardsSwiperEvent, 100);
  };

  // проверять инициализацию слайдера каждый раз при загрузке и ресайзе страницы
  window.addEventListener("load", handleTourCardsSwiperEvent);
  window.addEventListener("resize", debounceResize);
};

export const initTourPostersSwiper = () => {
  const tourPostersContainer = document.querySelector(".surf__tour-posters-container");

  const checkActiveClass = (swiper, array, className) => {
    array.forEach((item) => {
      if (!(swiper.slides[swiper.activeIndex].dataset.location === item.dataset.location)) {
        item.classList.remove(className);
      } else {
        item.classList.add(className);
      }
    });
  };

  const changeLocationTitle = (swiper) => {
    const surfLocationTitle = document.querySelector(".location__title");
    surfLocationTitle.firstElementChild.textContent = swiper.slides[swiper.activeIndex].firstElementChild.textContent;
    surfLocationTitle.lastElementChild.textContent = swiper.slides[swiper.activeIndex].firstElementChild.nextElementSibling.textContent;
    surfLocationTitle.style.animation = "none";
    surfLocationTitle.offsetHeight;
    surfLocationTitle.style.animation = "opacity 0.7s ease-in-out";
  };

  const createSwiper = (tourPostersContainer) => {
    const mapDots = document.querySelectorAll(".map__dot");

    return new Swiper(tourPostersContainer, {
      slidesPerView: 5,
      initialSlide: 2,
      allowTouchMove: true,
      centeredSlides: true,
      slideToClickedSlide: true,
      breakpoints: {
        900: {
          slidesPerView: 5,
        },
        700: {
          slidesPerView: 4,
        },
        500: {
          slidesPerView: 3,
        },
        320: {
          slidesPerView: 2,
        },
      },
      on: {
        slideChange: function (tourPosterSwiper) {
          changeLocationTitle(tourPosterSwiper);
          if (tourCardSwiper) {
            tourCardSwiper.slideTo(tourPosterSwiper.activeIndex);
          } else {
            checkActiveClass(tourPosterSwiper, mapDots, "map__dot_active");
            checkActiveClass(tourPosterSwiper, tourCards, "tour-card_active");
          }
        },
      },
    });
  };

  tourPosterSwiper = createSwiper(tourPostersContainer);
};

export const initMapDotClick = () => {
  const surfMap = document.querySelector(".surf__map");
  const tourPosters = document.querySelectorAll(".tour-poster");

  surfMap.addEventListener("click", (e) => {
    if (e.target.classList.contains("map__dot")) {
      const mapDot = e.target;
      mapDot.classList.toggle("map__dot_active");

      tourCards.forEach((tourCard) => {
        if (!(mapDot.dataset.location === tourCard.dataset.location) || tourCard.classList.contains("tour-card_active")) {
          tourCard.classList.remove("tour-card_active");
        } else {
          tourCard.classList.add("tour-card_active");
        }
      });

      tourPosters.forEach((tourPoster, tourIndex) => {
        if (mapDot.dataset.location === tourPoster.dataset.location) {
          tourPosterSwiper.slideTo(tourIndex);
        }
      });
    }
  });
};
