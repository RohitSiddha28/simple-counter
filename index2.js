const i = document.getElementById("i");
const d = document.getElementById("d");
const r = document.getElementById("r");
const l = document.getElementById("l");
let c = 0;
i.onclick = function () {
  c++;
  l.textContent = c;
};

d.onclick = function () {
  c--;
  l.textContent = c;
};

r.onclick = function () {
  c = 0;
  l.textContent = c;
};
