importScripts('common.js');

function googleTranslate(info,tab) {
  chrome.storage.sync.get(["translateTarget"]).then(result => {
    chrome.tabs.create({  
      url: result["translateTarget"]
    });
  });
}

// Add a listener to create the initial context menu items,
// context menu items only need to be created at runtime.onInstalled
chrome.runtime.onInstalled.addListener(async () => {
  chrome.contextMenus.create({
    id: "rtiy-context",
    title: "Highlight text containing Russian words to see their translation.",
    contexts: ["selection", "page"],
  });
  setProperty("translate.google.com", {blacklist: true, permanent: true});
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.request === "updateContext") {
      chrome.contextMenus.update("rtiy-context", {title: request.newText});
    }
});

chrome.contextMenus.onClicked.addListener(googleTranslate);