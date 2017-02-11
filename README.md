# Url Reporter
Basic chrome plugin to report urls to a specified location. Allows configuration of
destination and username credentials.

## Tutorials Used

Used the following tutorials and stack overflow questions.

Basic Setup:

https://robots.thoughtbot.com/how-to-make-a-chrome-extension


Getting the Current Url:

http://stackoverflow.com/questions/1979583/how-can-i-get-the-url-of-the-current-tab-from-a-google-chrome-extension


Options Page:

https://developer.chrome.com/extensions/options


MDN Info on forms:

https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms


Doing requests

https://developer.chrome.com/extensions/xhr


Actually publishing:

https://developer.chrome.com/webstore/publish

## Testing Locally
Set the backend url in the settings page to http://localhost:8080
then Install something like http-echo-server to see the requests.

```
git clone https://github.com/watson/http-echo-server
cd http-echo-server
npm install
PORT=8080 npm start
```
