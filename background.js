var enable=true;

chrome.browserAction.onClicked.addListener(function (tab) {
 enable = enable ? false : true;
 if(enable){
  //turn on...
  chrome.browserAction.setIcon({ path: 'icon.png' });
  //chrome.browserAction.setBadgeText({ text: 'ON' });
  chrome.tabs.executeScript(null, { file: 'inject.js' }); 
 }else{
  //turn off...
  chrome.browserAction.setIcon({ path: 'disabled.png'});
  //chrome.browserAction.setBadgeText({ text: 'OFF' });
  chrome.tabs.executeScript(null, { file: 'inject.js' });
 }
});

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
      if (enable) {
          chrome.tabs.executeScript(null, { file: 'inject.js' }); 
      }
  }
})