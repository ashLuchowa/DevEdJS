function scrollAppear() {
  const introText = document.querySelector(".intro-text");
  const introPosition = introText.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (introPosition < screenPosition) {
    introText.classList.add("intro-appear");
  } else {
    introText.classList.remove("intro-appear");
  }
}

window.addEventListener("scroll", scrollAppear);
