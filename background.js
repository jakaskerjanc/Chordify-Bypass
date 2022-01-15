chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  deleteCookies();
});

function deleteCookies() {
  chrome.cookies.getAll({ domain: "chordify.net" }, function (cookies) {
    chrome.cookies.remove({
      url: "https://chordify.net/",
      name: "UID",
    });
  });
}
