function smoothScroll(target, duration) {
  const targetLocation = document.querySelector(target);
  const targetPosition = targetLocation.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const startTime = null;
}

smoothScroll(".section2", 1000);
