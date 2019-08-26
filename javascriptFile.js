// use comments so I understand what's going on
var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
  document.getElementByClassName("navbar").style.top = "0";
  } else {
  document.getElementByClassName("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
