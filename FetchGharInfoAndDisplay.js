import { HousesArrayData } from "./Houses.js";
import { updateUI } from "./SearchNoofRoom.js";

console.log(HousesArrayData);

export function FetchGharInfoAndDisplay() {
  setTimeout(() => {
    const iconElement = document.querySelector(".fa-solid.fa-refresh.fa-spin");

    iconElement.style.display = "none";

    updateUI(HousesArrayData);
  }, 5000);
}

FetchGharInfoAndDisplay();
