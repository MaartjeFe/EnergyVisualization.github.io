// Get the buttons and popups
var button1 = document.getElementById("infoButton1");
var popup1 = document.getElementById("popup1");
var button2 = document.getElementById("infoButton2");
var popup2 = document.getElementById("popup2");

// Function to open the popup when the corresponding button is clicked
function openPopup(button, popup) {
  button.onclick = function() {
    popup.style.display = "block";
  }
}

// Function to close the popup when the close button is clicked
function closePopup(popup) {
  popup.getElementsByClassName("close")[0].onclick = function() {
    popup.style.display = "none";
  }
}

// Function to close the popup when clicking outside of it
function closePopupOutside(popup) {
  window.onclick = function(event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  }
}

// Open and close popups for button 1
openPopup(button1, popup1);
closePopup(popup1);
closePopupOutside(popup1);

// Open and close popups for button 2
openPopup(button2, popup2);
closePopup(popup2);
closePopupOutside(popup2);
