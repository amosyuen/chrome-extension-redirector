// Set local storage if points are no longer increasing for today
let points = document.getElementById("id_rc");
if (points) {
  points = parseInt(points.innerText);
  chrome.storage.local.get(["last_points"], (data) => {
    update = {};
    if (points == data.last_points) {
      update.last_maxed_date = new Date().toLocaleDateString();
    } else {
      update.last_points = points;
    }
    chrome.storage.local.set(update, () => {});
  });
}

window.location.host = "www.google.com";
