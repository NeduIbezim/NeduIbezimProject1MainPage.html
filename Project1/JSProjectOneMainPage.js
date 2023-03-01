var element = document.getElementById("EleTest");
element.style.left = "100px";
element.style.top = "50px"


div = document.createElement('div');
document.body.appendChild(div);
div.className = 'fadein';
window.setTimeout(function () {
  div.className = 'fadeout';
}, 3000);