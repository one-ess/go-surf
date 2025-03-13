import Swiper from "swiper";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";

const initShoresSwiper = () => {
  const shoresContainer = document.querySelector(".header__shores-container");
  const routes = document.querySelectorAll(".route");
  const shoresTitle = ["West", "East", "North", "South"];

  new Swiper(shoresContainer, {
    modules: [Pagination, EffectFade, Autoplay],
    autoplay: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    speed: 600,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".shore-dots",
      clickable: true,
      bulletClass: "shore-dot",
      renderBullet: function (index, className) {
        return `<li class="header__shore-dot ${className}">
                <div class="shore-dot__progress"></div>
                <div class="shore-dot__number">0${index + 1}</div>
                <div class="shore-dot__title">${shoresTitle[index]} Shore</div>
              </li>`;
      },
    },
    on: {
      slideChange: function () {
        routes.forEach((route) => {
          if (!(+route.dataset.index === this.activeIndex)) {
            route.classList.remove("route_active");
          } else {
            route.classList.add("route_active");
          }
        });
      },
    },
  });
};

export default initShoresSwiper;
