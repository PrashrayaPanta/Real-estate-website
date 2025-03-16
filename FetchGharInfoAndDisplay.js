import { HousesArrayData } from "./Houses.js";

console.log(HousesArrayData);

export function FetchGharInfoAndDisplay() {
  setTimeout(() => {
    const homesElement = document.querySelector(".homes");

    console.log(homesElement);

    const iconElement = document.querySelector(".fa-solid.fa-refresh.fa-spin");

    // iconElement.remove();

    iconElement.style.display = "none";

    // homesElement.innerHTML = "";

    // homesElement.innerHTML = "";

    HousesArrayData.map((house) => {
      // Create a new div element for each house
      const homeElement = document.createElement("div");
      homeElement.classList.add("home");
      // Add the "home" class to the new elements
      // Set the inner HTML for the new home element
      homeElement.innerHTML = ` <img
           src="${house.imgUrlLocal}"
           alt="Beautiful Family House"
           srcset=""
           class="home__image"
         />
         <h5 class="home__name">${house.HouseName}</h5>
         <div class="home__location">
           <svg class="home__icon">
             <use xlink:href="./sprite.svg#icon-location2"></use>
           </svg>
           <p>${house.country}</p>
         </div>
         <div class="home__roomcounts">
           <svg class="home__icon">
             <use xlink:href="./sprite.svg#icon-user"></use>
           </svg>
           <p>${house.noOfRooms}</p>
         </div>
         <div class="home__area">
           <svg class="home__icon">
             <use xlink:href="./sprite.svg#icon-expand"></use>
           </svg>
           <p>${house.area}m<sup>2</sup></p>
         </div>
         <div class="home__price">
           <svg class="home__icon">
             <use xlink:href="./sprite.svg#icon-key"></use>
           </svg>
           <p>${house.price}</p>
         </div>
         <button class="home__button">Contact Realtors</button>
       `;
      // Append the new home element to the homes container
      homesElement.appendChild(homeElement);
    });
  }, 500);
}

FetchGharInfoAndDisplay();
