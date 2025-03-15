function showHideAboutMenu() {
  const sidebarMenuElement = document.querySelector(".sidebar__about__menu");

  if (sidebarMenuElement.classList.contains("sidebar__about__menu-none")) {
    sidebarMenuElement.classList.remove("sidebar__about__menu-none");
  } else {
    sidebarMenuElement.classList.add("sidebar__about__menu-none");
  }
}

function showHideServiceMenu() {
  const sidebarMenuElement = document.querySelector(".sidebar__services__menu");
  console.log(sidebarMenuElement);
  if (sidebarMenuElement.classList.contains("sidebar__services__menu-none")) {
    sidebarMenuElement.classList.remove("sidebar__services__menu-none");
  } else {
    sidebarMenuElement.classList.add("sidebar__services__menu-none");
  }
}

document.querySelector(".about__anchor").onclick = showHideAboutMenu;

document.querySelector(".services__anchor").onclick = showHideServiceMenu;

export { showHideAboutMenu, showHideServiceMenu };
