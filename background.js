console.log("Doom");
function post(data, settings) {
  // Be sure this is all done securely!
  var xhr = new XMLHttpRequest();
  xhr.open("POST", settings.backend_url);
  xhr.onreadystatechange = function() {
    console.log(xhr);
    if(xhr.readystate == XMLHttpRequest.DONE) {
      console.log(xhr.responseText);
    }
  }
  xhr.send(JSON.stringify({
    username: settings.username,
    credentials: settings.credentials,
    data: data
  }));
}

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({active: true, 'lastFocusedWindow': true}, function(tabs) {
      var activeTab = tabs[0];
      var url = tabs[0].url;
      //debugging
      console.log(url);
  

    chrome.storage.sync.get({
      backend_url: '',
      username: '',
      credentials: ''
    }, function(settings) {
      post(url, settings);
    });
  });
});
