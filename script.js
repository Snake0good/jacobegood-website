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

// shows the navBar on a click
window.onclick = function() {
  navBar.style.opacity = '1';
}
*/




const topNav = document.getElementById('myTopNav')
const navBar = document.getElementById("nav-bar")


// hides the nav options with a scroll
window.onscroll = function() {
  topNav.style.height='0';
}

function openNav() {
  topNav.style.height = "200px";
}

function closeNav() {
  topNav.style.height = "0";
}
