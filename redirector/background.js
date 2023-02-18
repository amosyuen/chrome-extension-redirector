const MATCH_REGEX = new RegExp(
  "^https://www.bing.com/search.*?[?&]q=([^&]+).*$"
);
const REPLACE_REGEX = "https://www.google.com/search?q=$1";

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status != "complete") {
    return;
  }
  redirectUrl = tab.url.replace(MATCH_REGEX, REPLACE_REGEX);
  if (redirectUrl == tab.url) {
    return;
  }

  chrome.tabs.update(tabId, {
    url: redirectUrl,
  });
});
