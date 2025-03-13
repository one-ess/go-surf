import Swiper from "swiper";
import { Navigation, EffectFade } from "swiper/modules";

const initGlobalSwipers = () => {
  const globalContainers = document.querySelectorAll(".global-container");
  const prevBtn = document.querySelectorAll(".swiper-button-prev");
  const nextBtn = document.querySelectorAll(".swiper-button-next");
  globalContainers.forEach((globalContainer, index) => {
    return new Swiper(globalContainer, {
      modules: [Navigation, EffectFade],
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        nextEl: nextBtn[index],
        prevEl: prevBtn[index],
      },
    });
  });
};

export default initGlobalSwipers;
