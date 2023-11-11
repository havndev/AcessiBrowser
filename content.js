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

