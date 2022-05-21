const params = new URLSearchParams(window.location.search);
const username = params.get("name");
document.getElementById("name").innerText = username;
