
var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
  document.getElementByClassName("navbar").style.top = "0";
  } else {
  document.getElementByClassName("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
