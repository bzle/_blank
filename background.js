

// var bkg = chrome.extension.getBackgroundPage();
// bkg.console.log(":: After initialize");
// bkg.console.log("enabled is "+enabled+".");

var enabled = true;
chrome.browserAction.setIcon({ path: 'icon.png' });

// ICON CLICK
chrome.browserAction.onClicked.addListener(function (tab) {
  // enabled = enabled ? false : true;
  enabled = !enabled
  updateExtension()
});

// PAGE LOAD/RELOAD
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    updateExtension()
  }
})

// UPDATE JAVASCRIPT AND ICON
function updateExtension() {
  if (enabled) {
    chrome.browserAction.setIcon({ path: 'icon.png' });
    chrome.tabs.executeScript(null, { file: 'enable.js' });
  } else {
    chrome.browserAction.setIcon({ path: 'disabled.png'});
    chrome.tabs.executeScript(null, { file: 'disable.js' });
  }
}
