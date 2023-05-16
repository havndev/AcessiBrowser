const menu1 = document.getElementById('menu1');
const menu2 = document.getElementById('menu2');
const menu3 = document.getElementById('menu3');
const menu4 = document.getElementById('menu4');
var button = document.getElementById("coloraddButton");

  button.addEventListener("click", function () {
    var colorSelect = document.getElementById("colorSelect");
    var selectedColor = colorSelect.value;

    console.log(selectedColor); 
    var coloraddSymbol = convertToColorADD(selectedColor);
    var resultText = document.getElementById("resultText");
    var resultImage = document.getElementById("resultImage");

    if (selectedColor) {
      resultText.textContent = selectedColor;
      resultImage.src = coloraddSymbol;
      resultContainer.style.display = "block";
    } else {
      resultContainer.style.display = "none";
    }
  });

const backBtn1 = document.getElementById('goBack1');
const backBtn2 = document.getElementById('goBack2');
const backBtn3 = document.getElementById('goBack3');
const backBtn4 = document.getElementById('goBack4');

const mainMenu = document.getElementById('mainMenu');
const mainForm = document.getElementById('mainForm');

const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('form3');
const form4 = document.getElementById('form4');

backBtn1.addEventListener('click', () => {
 if (mainForm.style.display === 'none') {
   mainForm.style.display = 'none';
   mainMenu.style.display = 'block';
 }
 else if (mainForm.style.display === '') {
   mainForm.style.display = 'none';
   mainMenu.style.display = 'block';
 }
 else  {
   mainMenu.style.display = 'block';
   mainForm.style.display = 'none';
 }
});
backBtn2.addEventListener('click', () => {
 if (mainForm.style.display === 'none') {
   mainForm.style.display = 'none';
   mainMenu.style.display = 'block';
 }
 else if (mainForm.style.display === '') {
   mainForm.style.display = 'none';
   mainMenu.style.display = 'block';
 }
 else  {
   mainMenu.style.display = 'block';
   mainForm.style.display = 'none';
 }
});
backBtn3.addEventListener('click', () => {
 if (mainForm.style.display === 'none') {
   mainForm.style.display = 'none';
   mainMenu.style.display = 'block';
 }
 else if (mainForm.style.display === '') {
   mainForm.style.display = 'none';
   mainMenu.style.display = 'block';
 }
 else  {
   mainMenu.style.display = 'block';
   mainForm.style.display = 'none';
 }
});
backBtn4.addEventListener('click', () => {
 if (mainForm.style.display === 'none') {
   mainForm.style.display = 'none';
   mainMenu.style.display = 'block';
 }
 else if (mainForm.style.display === '') {
   mainForm.style.display = 'none';
   mainMenu.style.display = 'block';
 }
 else  {
   mainMenu.style.display = 'block';
   mainForm.style.display = 'none';
 }
});

menu1.addEventListener('click', () => {
 if (mainForm.style.display === 'none') {
   // 👇️ this SHOWS the form
   mainMenu.style.display = 'none';
   mainForm.style.display = 'block';
   form1.style.display = 'block';
   form2.style.display = 'none';
   form3.style.display = 'none';
   form4.style.display = 'none';
 }
 else if (mainForm.style.display === '') {
   mainMenu.style.display = 'none';
   mainForm.style.display = 'block';
   form1.style.display = 'block';
   form2.style.display = 'none';
   form3.style.display = 'none';
   form4.style.display = 'none';
 } 
 else {
   // 👇️ this HIDES the form
   mainForm.style.display = 'none';
 }
});

menu2.addEventListener('click', () => {
 if (mainForm.style.display === 'none') {
   mainMenu.style.display = 'none';
   mainForm.style.display = 'block';
   form1.style.display = 'none';
   form2.style.display = 'block';
   form3.style.display = 'none';
   form4.style.display = 'none';
 }
 else if (mainForm.style.display === '') {
   mainMenu.style.display = 'none';
   mainForm.style.display = 'block';
   form1.style.display = 'none';
   form2.style.display = 'block';
   form3.style.display = 'none';
   form4.style.display = 'none';
 }
 else  {
   mainForm.style.display = 'none';
 }
});

menu3.addEventListener('click', () => {
  if (mainForm.style.display === 'none') {
    mainMenu.style.display = 'none';
    mainForm.style.display = 'block';
    form1.style.display = 'none';
    form2.style.display = 'none';
    form3.style.display = 'block';
    form4.style.display = 'none';
  }
  else if (mainForm.style.display === '') {
    mainMenu.style.display = 'none';
    mainForm.style.display = 'block';
    form1.style.display = 'none';
    form2.style.display = 'none';
    form3.style.display = 'block';
    form4.style.display = 'none';
  }
  else  {
    mainForm.style.display = 'none';
  }
 });

menu4.addEventListener('click', () => {
 if (mainForm.style.display === 'none') {
   mainMenu.style.display = 'none';
   mainForm.style.display = 'block';
   form1.style.display = 'none';
   form2.style.display = 'none';
   form3.style.display = 'none';
   form4.style.display = 'block';
 }
 else if (mainForm.style.display === '') {
   mainMenu.style.display = 'none';
   mainForm.style.display = 'block';
   form1.style.display = 'none';
   form2.style.display = 'none';
   form3.style.display = 'none';
   form4.style.display = 'block';
 }
 else  {
   mainForm.style.display = 'none';
 }
});

function convertToColorADD(color) {
 
  const coloraddSymbols = {
    red: "images/coloradd_red.png",
    green: "images/coloradd_green.png",
    blue: "images/coloradd_blue.png",
    yellow: "images/coloradd_yellow.png",
    purple: "images/coloradd_purple.png",
    orange: "images/coloradd_orange.png",
    black: "images/coloradd_black.png",
    white: "images/coloradd_white.png",
    brown: "images/coloradd_brown.png",
    
  };

  // Check if the color exists in the symbol mapping
  if (color in coloraddSymbols) {
    return coloraddSymbols[color];
  } else {
    return "Unknown color";
  }
}