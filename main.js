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

  requestAnimationFrame(animation);
}

smoothScroll(".section2", 1000);
