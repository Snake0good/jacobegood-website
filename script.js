function hideDropdown() {
  var dropdown = document.getElementById("hamburger-dropdown");
  var menu = document.getElementById("menu")
  var close = document.getElementById("close")

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