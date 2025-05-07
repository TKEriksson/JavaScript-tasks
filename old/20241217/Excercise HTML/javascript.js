// https://www.w3resource.com/javascript-exercises/event/index.php
// 9. Enter Key Detection in Input

// Write a JavaScript program that adds a keydown event listener to a text input to detect when the "Enter key" is pressed.

document.getElementById("txtbox").addEventListener("keypress", (event) => {
  if (event.key === 'Enter') {
    alert("Enter!\n" + document.getElementById("txtbox").value);
  }
});





// https://www.w3resource.com/javascript-exercises/event/index.php
// 5. Image Slideshow Navigation

// Write a JavaScript program to create a slideshow that changes the displayed image when a next or previous button is clicked.
let slideNr = 1; // Start with nr 1.

function showSlide(nr) {

for (let i = 1; i <= 4; i++) {

  document.getElementById(`slide${i}`).style.display = nr === i ? "block" : "none";

}

  // switch (nr) {
  //   case 1:
  //     document.getElementById("slide1").style.display = "block";
  //     document.getElementById("slide2").style.display = "none";
  //     document.getElementById("slide3").style.display = "none";
  //     document.getElementById("slide4").style.display = "none";
      
  //   break;
  //   case 2:
  //     document.getElementById("slide1").style.display = "none";
  //     document.getElementById("slide2").style.display = "block";
  //     document.getElementById("slide3").style.display = "none";
  //     document.getElementById("slide4").style.display = "none";
  //     break;
  //   case 3:
  //     document.getElementById("slide1").style.display = "none";
  //     document.getElementById("slide2").style.display = "none";
  //     document.getElementById("slide3").style.display = "block";
  //     document.getElementById("slide4").style.display = "none";
  //     break;
  //   case 4:
  //     document.getElementById("slide1").style.display = "none";
  //     document.getElementById("slide2").style.display = "none";
  //     document.getElementById("slide3").style.display = "none";
  //     document.getElementById("slide4").style.display = "block";
  //     break;
  // }

}


function nextSlide() {
  slideNr++;
  if (slideNr >= 5) {
    slideNr = 1;
  }

  showSlide(slideNr);
}


function prevSlide() {
  slideNr--;
  if (slideNr <= 1) {
    slideNr = 4;
  }

  showSlide(slideNr);
}