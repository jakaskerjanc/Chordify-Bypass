chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  deleteCookies();
});

function deleteCookies() {
  chrome.cookies.remove({
    url: "https://chordify.net/",
    name: "CID",
  });
}
