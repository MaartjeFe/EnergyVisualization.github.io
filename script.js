// Get the button and popup
var button = document.getElementById("infoButton");
var popup = document.getElementById("popup");

// When the user clicks the button, open the popup
button.onclick = function() {
  popup.style.display = "block";
}

// When the user clicks on <span> (x), close the popup
document.getElementsByClassName("close")[0].onclick = function() {
  popup.style.display = "none";
}

// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}
