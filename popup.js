//Variables
const menu1 = document.getElementById('menu1');
const menu2 = document.getElementById('menu2');
const menu3 = document.getElementById('menu3');
const menu4 = document.getElementById('menu4');
var button = document.getElementById("coloraddButton");

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


// Botões GoBack

// MENU 1
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

//MENU 2 
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

//MENU 3
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

//MENU 4
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


//Menus

//Menu 1
menu1.addEventListener('click', () => {
  console.log("clickou botao1")  
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

//Menu 2
menu2.addEventListener('click', () => {
  console.log("clickou botao2") 
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

//Menu 3
menu3.addEventListener('click', () => {
  console.log("clickou botao3") 
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

//Menu 4
menu4.addEventListener('click', () => {
  console.log("clickou botao4") 
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

//Funçao que executa o ColorAdd
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

//Função responsável pelas modificações da fonte
document.addEventListener('DOMContentLoaded', function () {
  var fontSelect = document.getElementById('fontSelect');
  var fontSizeSlider = document.getElementById('fontSizeSlider');
  var fontSizeValue = document.getElementById('fontSizeValue');
  var letterSpacingSlider = document.getElementById('letterSpacingSlider');
  var letterSpacingValue = document.getElementById('letterSpacingValue');
  var inputCor = document.getElementById('inputCor');

  //Cor
  inputCor.addEventListener('change', function () {
    console.log(inputCor.value);
    sendMessageToContentScript({ color: inputCor.value });
  });

  //Espaçamento
  letterSpacingSlider.addEventListener('input', function () {
    letterSpacingValue.textContent = letterSpacingSlider.value;
    sendMessageToContentScript({ letterSpacing: letterSpacingSlider.value + 'px' });
  });
  
  //Fonte
  fontSelect.addEventListener('change', function () {
    sendMessageToContentScript({ font: fontSelect.value });

  });

  //Tamanho da fonte
  fontSizeSlider.addEventListener('input', function () {
    var fontSize = fontSizeSlider.value + 'px';
    fontSizeValue.textContent = fontSize;
    sendMessageToContentScript({ fontSize: fontSize });
  });
  

  // Send a message to the content script
  function sendMessageToContentScript(message) {
    console.log('Sending message to content script:', message);
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, message);
    });
  }
});



// Função que converte o ColorAdd numa imagem da cor
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

  if (color in coloraddSymbols) {
    return coloraddSymbols[color];
  } else {
    return "Unknown color";
  }
}
