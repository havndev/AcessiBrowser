// Recebe mensagens do popup.html e encaminha para o script de conteúdo
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'applyStyle') {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, request);
    });
  }
});
