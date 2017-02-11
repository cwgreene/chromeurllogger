function save_options() {
  var backend_url = document.getElementById('backend_url');
  var username = document.getElementById('username');
  var password = document.getElementById('password');
  chrome.storage.sync.set({
    backend_url: backend_url,
    username: username,
    password: password
  });
}

function restore_options() {
  chrome.storage.sync.get({
    backend_url: backend_url,
    username: username,
    password: password
  }, function(items) {
    document.getElementById('backend_url').value = items.backend_url;
    document.getElementById('username').value = items.username;
    document.getElementById('password').value = items.password;
  });
}

cument.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
