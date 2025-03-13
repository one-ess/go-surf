const displayCurrentDate = () => {
  const dateElement = document.querySelector(".aside__date");

  const day = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  dateElement.innerHTML = `<span>${day}</span>${month < 10 ? "0" + month : month} | ${year}`;
};

export default displayCurrentDate;
