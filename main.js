function smoothScroll(target, duration) {
  var targetLocation = document.querySelector(target);
  var targetPosition = targetLocation.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapse = currentTime - startTime;
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t * t * t + 2) + b;
  }

  requestAnimationFrame(animation);
}

smoothScroll(".section2", 1000);
