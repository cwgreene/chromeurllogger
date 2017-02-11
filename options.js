function save_options() {
  var backend_url = document.getElementById('backend_url').value;
  var username = document.getElementById('username').value;
  var credentials = document.getElementById('credentials').value;
  chrome.storage.sync.set({
    backend_url: backend_url,
    username: username,
    credentials: credentials
  });
}

function restore_options() {
  chrome.storage.sync.get({
    backend_url: '',
    username: '',
    credentials: ''
  }, function(items) {
    console.log(items.backend_url);
    document.getElementById('backend_url').value = items.backend_url;
    document.getElementById('username').value = items.username;
    document.getElementById('credentials').value = items.credentials;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
