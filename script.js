/*
var dropdown = document.getElementById("hamburger-dropdown");
var menu = document.getElementById("menu")
var close = document.getElementById("close")

function hideDropdown() {
  if (dropdown.style.display === 'block') {
    dropdown.style.display = "none";
    menu.style.visibility = "visible"
    close.style.visibility = "hidden"
  } else {
    dropdown.style.display = "block";
    menu.style.visibility = "hidden"
    close.style.visibility = "visible"
  }
}

*/

const topNav = document.getElementById('myTopNav')
const navBar = document.getElementById("nav-bar")

/*
window.onscroll = function() {
  topNav.style.height='0';
  navBar.style.opacity = '0';
}

window.onclick = function() {
  navBar.style.opacity = '1';
}
*/

function openNav() {
  topNav.style.height = "200px";
}

function closeNav() {
  topNav.style.height = "0";
}
