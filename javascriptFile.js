<<<<<<< HEAD
// alright bro

var prevScrollpos = window.pageYOffset;
=======
// use comments so I understand what's going on
var prevScrollPos = window.pageYOffset;
>>>>>>> f78bb66485fb63b4f5c3b8afd8a5358be8b910ae
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-125px";
  }
  prevScrollpos = currentScrollPos;
}
