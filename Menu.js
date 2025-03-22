function showHideAboutMenu() {
  const appmenuMenuElement = document.querySelector(".appmenu__about__menu");

  if (appmenuMenuElement.classList.contains("appmenu__about__menu-none")) {
    appmenuMenuElement.classList.remove("appmenu__about__menu-none");
  } else {
    appmenuMenuElement.classList.add("appmenu__about__menu-none");
  }
}

function showHideServiceMenu() {
  const appmenuMenuElement = document.querySelector(".appmenu__services__menu");
  console.log(appmenuMenuElement);
  if (appmenuMenuElement.classList.contains("appmenu__services__menu-none")) {
    appmenuMenuElement.classList.remove("appmenu__services__menu-none");
  } else {
    appmenuMenuElement.classList.add("appmenu__services__menu-none");
  }
}

// document.querySelector(".about__anchor").onclick = showHideAboutMenu;

document.querySelector(".services__anchor").onclick = showHideServiceMenu;

// export { showHideAboutMenu, showHideServiceMenu };
