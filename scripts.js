function move() {
  const i = document.getElementById("no");
  i.style.top = `${Math.floor(Math.random() * 99)}vh`;
  i.style.left = `${Math.floor(Math.random() * 99)}vw`;
}
