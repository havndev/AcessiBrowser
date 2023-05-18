chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

  if (request.font) {
    console.log(request.font);
    if (request.font === "None"){
      var elements = document.querySelectorAll('*');
    elements.forEach(function (element) {
    element.style.fontFamily = '';
  });
    }
    else {
      var elements = document.querySelectorAll('*');
      elements.forEach(function (element) {
      element.style.fontFamily = request.font;
    });
    }
   
  }
  if (request.fontSize) {
    var elements = document.querySelectorAll('*');
      elements.forEach(function (element) {
      element.style.fontSize = request.fontSize;
    });
  }
  if (request.letterSpacing) {
    document.body.style.letterSpacing = request.letterSpacing;
  }
  if (request.color) {
    console.log(request.color);
    if (request.color === "corNone"){
    var elements = document.querySelectorAll('*');
    elements.forEach(function (element) {
    element.style.color = '';
  });
    }
    else { 
    var elements = document.querySelectorAll('*');
    elements.forEach(function (element) {
    element.style.color = request.color;
  });
    }
  
  }
  if (request.option === "invertColors") {
    invertColors();
  }  
  if (request.option === "None") {
      resetColors();
    }
    if (request.option === "Grayscale"){
      grayscale();
    }
    if (request.option === "Sepia"){
      sepia();
    }
    if (request.option === "Tritanopia"){
      simulateTritanopia();
        }
    if (request.option === "Deuteranopia"){
        simulateDeuteranopia();
        }
    if (request.option === "Protanopia"){
        simulateProtanopia();
        }

  function invertColors() {
  const elements = document.querySelectorAll('*');
  elements.forEach(function (element) {
    element.style.filter = 'invert(100%)';
  });}

  function resetColors() {
  const elements = document.querySelectorAll('*');
  elements.forEach(function (element) {
    element.style.filter = 'none';
    element.style.backgroundColor = ''; 
    element.style.color = '';
    
  });}

  function grayscale() {
  const elements = document.querySelectorAll('*');
  elements.forEach(function (element) {
    element.style.filter = 'grayscale(100%)';
  });}

  function sepia() {
  const elements = document.querySelectorAll('*');
  elements.forEach(function (element) {
    element.style.filter ='sepia(40%)';
  });}

  function simulateTritanopia() {
  const elements = document.querySelectorAll('*');
  elements.forEach(function (element) {
    element.style.backgroundColor = '#FAF5FF';
    element.style.color = '#0039FF';
  });}

  function simulateDeuteranopia() { 
  const elements = document.querySelectorAll('*');
  elements.forEach(function (element) {
    element.style.backgroundColor = '#FFFFCC';
    element.style.color = '#000000';
  });}

  function simulateProtanopia() { 
  const elements = document.querySelectorAll('*');
  elements.forEach(function (element) {
    element.style.backgroundColor = '#A6D8FF';
    element.style.color = '#000000';
  });}
  
});

















































// function toggleDeuteranopia(enableDeuteranopia) {
//   isDeuteranopiaEnabled = enableDeuteranopia;

//   if (isDeuteranopiaEnabled) {
//     applyDeuteranopiaSimulation();
//   } else {
//     removeDeuteranopiaSimulation();
//   }
// }

// function applyDeuteranopiaSimulation() {
  
//   originalColors = {};

//   const elements = document.querySelectorAll('*');
//   elements.forEach(element => {
//     originalColors[element] = getComputedStyle(element).color;
//     element.style.color = simulateDeuteranopiaColor(originalColors[element]);
//   });
// }

// function removeDeuteranopiaSimulation() {
//   // Restore the original colors of the elements
//   const elements = document.querySelectorAll('*');
//   elements.forEach(element => {
//     element.style.color = originalColors[element];
//   });
// }

// function simulateDeuteranopiaColor(color) {
  
//   const rgb = color.match(/\d+/g);
//   const red = parseInt(rgb[0]);
//   const green = parseInt(rgb[1]);
//   const blue = parseInt(rgb[2]);

  
//   const deuteranopiaRed = Math.round((green * 0.8) + (blue * 0.2));
//   const deuteranopiaGreen = Math.round((red * 0.258) + (blue * 0.742));
//   const deuteranopiaBlue = Math.round((red * 0.019) + (green * 0.981));

  
//   return `rgb(${deuteranopiaRed}, ${deuteranopiaGreen}, ${deuteranopiaBlue})`;
// }
