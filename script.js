const logo = document.getElementById('logo')
const topNav = document.getElementById('myTopNav')

window.onscroll = function() {
  topNav.style.height='0'
  logo.style.opacity = '0'
}


function openNav() {
  topNav.style.height = "200px"
  logo.style.opacity = '0'
}

function closeNav() {
  topNav.style.height = "0";
  logo.style.opacity = '1'
}
