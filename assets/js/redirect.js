// Set the time (in milliseconds) for inactivity before redirect
var redirectTime = 120 * 1000; // 3 minutes

// Set the URL to redirect to
var redirectUrl = "http://127.0.0.1:5555/";

// Initialize the timer
var timer = setTimeout(function() {
  window.location.href = redirectUrl;
}, redirectTime);

// Reset the timer on any activity
document.addEventListener("click", function() {
  clearTimeout(timer);
  timer = setTimeout(function() {
    window.location.href = redirectUrl;
  }, redirectTime);
});
document.addEventListener("keypress", function() {
  clearTimeout(timer);
  timer = setTimeout(function() {
    window.location.href = redirectUrl;
  }, redirectTime);
});

// reset the timer on scroll activity
document.addEventListener("scroll", function() {
  clearTimeout(timer);
  timer = setTimeout(function() {
    window.location.href = redirectUrl;
  }, redirectTime);
});
