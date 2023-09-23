const headerName = document.querySelector(".header-name");

function checkNameWidth() {
  const br = document.querySelector("br");

  if (window.innerWidth >= 500) {
    if (br) {
      headerName.innerHTML = headerName.innerHTML.replace("<br>", " ");
    }
  } else {
    if (!br) {
      headerName.innerHTML = headerName.innerHTML.replace(" ", "<br>");
    }
  }
}

checkNameWidth();

window.addEventListener("resize", checkNameWidth);
