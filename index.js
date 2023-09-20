const name = document.querySelector(".header-name");

function checkNameWidth() {
  const br = document.querySelector("br");

  if (window.innerWidth >= 500) {
    if (br) {
      name.innerHTML = name.innerHTML.replace("<br>", " ");
    }
  } else {
    if (!br) {
      name.innerHTML = name.innerHTML.replace(" ", "<br>");
    }
  }
}

checkNameWidth();

window.addEventListener("resize", checkNameWidth);
