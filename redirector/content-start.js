// Redirect immediately if rewards already maxed
chrome.storage.local.get(["last_maxed_date"], (data) => {
  if (new Date().toLocaleDateString() == data.last_maxed_date) {
    window.location.host = "www.google.com";
  }
});
