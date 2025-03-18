import { HousesArrayData } from "./Houses.js";

console.log(HousesArrayData);

document.getElementById("4-room").onchange = TrueOrFalse;

function TrueOrFalse(event) {
  if (event.target.checked) {
    const FilteredArrayOnly4Room = HousesArrayData.filter(
      (House) => House.noOfRooms === 4
    );

    console.log(FilteredArrayOnly4Room);

    // FetchGharInfoAndDisplay();

    setTimeout(() => {
      const homesElement = document.querySelector(".homes");

      // console.log(homesElement);

      homesElement.innerHTML = "";

      const iconElement = document.querySelector(
        ".fa-solid.fa-refresh.fa-spin"
      );

      // iconElement.remove();

      // iconElement.style.display = "none";

      // homesElement.innerHTML = "";

      // homesElement.innerHTML = "";

      FilteredArrayOnly4Room.map((house) => {
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
  } else {
    setTimeout(() => {
      const homesElement = document.querySelector(".homes");

      console.log(homesElement);

      const iconElement = document.querySelector(
        ".fa-solid.fa-refresh.fa-spin"
      );

      // iconElement.remove();

      // iconElement.style.display = "none";

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
}

// function FetchGharInfoAndDisplay() {}

// console.log(FilteredArrayOnly4Room);

// console.log(HousesArrayData);
