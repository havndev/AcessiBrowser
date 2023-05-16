// Recebe mensagens do background.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'applyStyle') {
    var style = `
      body {
        font-family: ${request.font} !important;
        font-size: ${request.fontSize} !important;
        font-weight: ${request.fontWeight} !important;
        letter-spacing: ${request.spacing} !important;
      }
    `;

    // Injeta o estilo na página
    var styleElement = document.createElement('style');
    styleElement.innerHTML = style;
    document.head.appendChild(styleElement);
  }
});

