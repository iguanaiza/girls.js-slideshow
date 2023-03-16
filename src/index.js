/* girls.js - Interaktywna Galeria
 * Plik gallery.js
 * Tutaj będziemy dodawać nasz kod.*/
//---------------------------------------

// ==CLASS CHANGING FUNCTION==
function showSlide(slideNum) {
  if (slideNum < 1 || slideNum > 5) {
    return;
  }

  const clear = document.querySelector(".show");
  const clearPin = document.querySelector(".selected");
  const slide = document.querySelector("#slide" + slideNum);
  const pin = document.querySelector("#pin" + slideNum);

  clear.classList.remove("show");
  clearPin.classList.remove("selected");
  slide.classList.add("show");
  pin.classList.add("selected");
}

// ==SLIDE CHANGING FUNCTION FOR >ARROW< SELECTION==
let currentNum = 1;

function handlePrev() {
  let newNum = currentNum - 1;
  if (newNum < 1) {
    newNum = 5;
  }
  showSlide(newNum);
  currentNum = newNum;
}

function handleNext() {
  let newNum = currentNum + 1;
  if (newNum > 5) {
    newNum = 1;
  }
  showSlide(newNum);
  currentNum = newNum;
}

//==SLIDE CHANGING FUNCTION FOR >AUTOPLAY<
const autoPlay = document.querySelector("#play");
let playOn = false;
let slideInterval;

function playBtnOn() {
  if (playOn === true) {
    stopSlideshow();
  } else {
    startSlideshow();
  }
}

function startSlideshow() {
  autoPlay.classList.add("on");
  playOn = true;
  slideInterval = setInterval(handleNext, 2500);
}

function stopSlideshow() {
  autoPlay.classList.remove("on");
  playOn = false;
  clearInterval(slideInterval);
}

//==CHANGING PHOTO BY >PIN< SELECTION==
for (let pinNum = 1; pinNum <= 5; pinNum++) {
  document
    .querySelector("#pin" + pinNum)
    .addEventListener("click", function () {
      showSlide(pinNum);
    });
}

//==CHANGING PHOTO BY >ARROW< SELECTION==
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

prev.addEventListener("click", handlePrev);
next.addEventListener("click", handleNext);

//==AUTOPLAY PHOTOS==
autoPlay.addEventListener("click", playBtnOn);

/* ++++OLD CODE++++
function showSlide(slideNum) {
  const clear = document.querySelector(".show");
  const slide = document.querySelector("#slide" + slideNum);

  if (slideNum < 1 && slideNum <= 5) {
    clear.classList.remove("show");
    slide.classList.add("show");
  } else console.log("Please provide value between 1 and 5.");
}

function handleClick1() {
  showSlide(1);
}

function handleClick2() {
  showSlide(2);
}

function handleClick3() {
  showSlide(3);
}

function handleClick4() {
  showSlide(4);
}

function handleClick5() {
  showSlide(5);
}

const pin1 = document.querySelector("#pin1");
const pin2 = document.querySelector("#pin2");
const pin3 = document.querySelector("#pin3");
const pin4 = document.querySelector("#pin4");
const pin5 = document.querySelector("#pin5");

pin1.addEventListener("click", handleClick1);
pin2.addEventListener("click", handleClick2);
pin3.addEventListener("click", handleClick3);
pin4.addEventListener("click", handleClick4);
pin5.addEventListener("click", handleClick5);*/