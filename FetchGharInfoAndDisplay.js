import { HousesArrayData } from "./Houses.js";
import { updateUI } from "./SearchOnTheBasisOfNoofRoom.js";

console.log(HousesArrayData);

export function FetchGharInfoAndDisplay() {

  console.log("Hello I am inside fetchgharinfoandisplay");
  

  console.log("Hello i am from fetch ghar info and display")
  setTimeout(() => {
    const iconElement = document.querySelector(".fa-solid.fa-refresh.fa-spin");

    iconElement.style.display = "none";

    updateUI(HousesArrayData);
  }, 5000);
}

FetchGharInfoAndDisplay();
