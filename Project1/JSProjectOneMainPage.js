var element = document.getElementById("EleTest");
element.style.left = "100px";
element.style.top = "50px";

div = document.createElement("div");
document.body.appendChild(div);
div.className = "fadein";
window.setTimeout(function () {
  div.className = "fadeout";
}, 3000);

var el = document.getElementById("container");
el.style.top = "150px";
el.style.left = "100px";
