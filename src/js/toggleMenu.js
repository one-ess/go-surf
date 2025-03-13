const toggleMenu = () => {
  const menu = document.querySelector(".aside__menu-wrapper");
  const menuBurger = document.querySelector(".aside__menu-burger");

  menuBurger.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("aside__menu-burger_active");
    menu.classList.toggle("aside__menu-wrapper_active");
  });
};

export default toggleMenu;
