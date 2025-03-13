import "./js/utils/dynamicAdapt";

import displayCurrentDate from "./js/displayCurrentDate";
import toggleMenu from "./js/toggleMenu";
import initShoresSwiper from "./js/initShoresSwiper";
import { initMapDotClick, initTourCardsSwiper, initTourPostersSwiper } from "./js/tourSwipersController";
import initGlobalSwipers from "./js/initGlobalSwipers";
import calculateResortPrice from "./js/calculateResortPrice";
import toggleSurfboardSpoilers from "./js/toggleSurfboardSpoilers";

const init = () => {
  displayCurrentDate();
  toggleMenu();
  initShoresSwiper();
  initMapDotClick();
  initTourCardsSwiper();
  initTourPostersSwiper();
  initGlobalSwipers();
  calculateResortPrice();
  toggleSurfboardSpoilers();
};

init();
