function goToIn() {
  const name = document.getElementById("input").value;
  window.location.href = `./in.html?name=${name}`;
}

function goToOut() {
  const name = document.getElementById("input").value;
  window.location.href = `./out.html?name=${name}`;
}