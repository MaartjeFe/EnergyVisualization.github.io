// Get the buttons and popups
var button1 = document.getElementById("infoButton1");
var popup1 = document.getElementById("popup1");
var button2 = document.getElementById("infoButton2");
var popup2 = document.getElementById("popup2");
var button3 = document.getElementById("infoButton3");
var popup3 = document.getElementById("popup3");
// Get the fourth button and popup
var button4 = document.getElementById("infoButton4");
var popup4 = document.getElementById("popup4");
// Get the fifth button and popup
var button5 = document.getElementById("infoButton5");
var popup5 = document.getElementById("popup5");
// Get the fifth button and popup
var button6 = document.getElementById("infoButton6");
var popup6 = document.getElementById("popup6");


// Function to open the popup when the corresponding button is clicked
function openPopup(button, popup) {
  button.onclick = function() {
    popup.style.display = "block";
  };
}

// Function to close the popup when the close button is clicked
function closePopup(popup) {
  popup.getElementsByClassName("close")[0].onclick = function() {
    popup.style.display = "none";
  };
}

// Function to close the popup when clicking outside of it
function closePopupOutside(popup) {
  window.onclick = function(event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  };
}

// Open and close popups for button 1
openPopup(button1, popup1);
closePopup(popup1);
closePopupOutside(popup1);

// Open and close popups for button 2
openPopup(button2, popup2);
closePopup(popup2);
closePopupOutside(popup2);

// Open and close popups for the new button
openPopup(button3, popup3);
closePopup(popup3);
closePopupOutside(popup3);

// Open and close popups for the fourth button
openPopup(button4, popup4);
closePopup(popup4);
closePopupOutside(popup4);

// Open and close popups for the fifth button
openPopup(button5, popup5);
closePopup(popup5);
closePopupOutside(popup5);
// Open and close popups for the fifth button
openPopup(button6, popup6);
closePopup(popup6);
closePopupOutside(popup6);
