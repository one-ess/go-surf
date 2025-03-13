const toggleSurfboardSpoilers = () => {
  const spoilers = document.querySelectorAll(".surfboard__spoiler");

  spoilers.forEach((spoiler) => {
    spoiler.addEventListener("click", (e) => {
      if (e.target.classList.contains("surfboard__spoiler-dot")) {
        e.target.classList.toggle("surfboard__spoiler-dot_active");
        spoiler.classList.toggle("surfboard__spoiler_active");
      }
    });
  });
};

export default toggleSurfboardSpoilers;
