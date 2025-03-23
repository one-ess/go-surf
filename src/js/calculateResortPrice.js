const calculateResortPrice = () => {
  const counters = document.querySelectorAll(".resort__counter");
  counters.forEach((counter) => {
    counter.addEventListener("click", (e) => {
      const resortPrice = counter.closest(".resort__description").querySelector(".resort__price");
      const nightsNumber = counter.closest(".resort__description").querySelector(".nights-number"); //получаем счетчик ночей у конкретного слайда
      const guestsNumber = counter.closest(".resort__description").querySelector(".guests-number"); //получаем счетчик гостей у конкретного слайда

      const thisCounter = counter.querySelector(".resort__counter-number"); //получаем текущий счетчик

      if (e.target.closest(".resort__count-button_increase")) {
        if (+thisCounter.textContent < 9) {
          thisCounter.textContent = +thisCounter.textContent + 1;
        }
      }
      if (e.target.closest(".resort__count-button_decrease")) {
        if (+thisCounter.textContent > 1) {
          thisCounter.textContent = +thisCounter.textContent - 1;
        }
      }

      resortPrice.textContent = +nightsNumber.textContent * +nightsNumber.dataset.price + +guestsNumber.textContent * +guestsNumber.dataset.price;
    });
  });
};

export default calculateResortPrice;
