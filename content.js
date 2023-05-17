chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.font) {
    document.body.style.fontFamily = request.font;
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
    document.body.style.color = request.color;
  }
});





