import { HousesArrayData } from "./Houses.js";

console.log(HousesArrayData);

document.querySelector(".search").onsubmit = Search;

export function Search(e) {
  e.preventDefault();

  const serachTerm = document.getElementById("search").value;

  const SearchOnTheBasisOfInput = (country) => {
    const FilteredArray = HousesArrayData.filter(
      (House) => House.country == country
    );

    const length = FilteredArray.length;

    return { length, FilteredArray };
  };

  const FilteredHousesArray = SearchOnTheBasisOfInput(serachTerm);

  console.log(FilteredHousesArray);

  //Updating this filtered array(country basis) in UI

  function FilteredHousesArrayInfoAndDisplay() {
    setTimeout(() => {
      const homesElement = document.querySelector(".homes");

      homesElement.innerHTML = "";

      // console.log(homesElement);

      // console.log(homesElement);

      // const homeElement = document.qu(".home");

      // console.log(homeElement);

      // homeElement.remove();

      // console.log(homesElement);

      // homeElement.style.display = "none";

      // const iconElement = document.querySelector(
      //   ".fa-solid.fa-refresh.fa-spin"
      // );

      // homesElement.innerHTML =

      // iconElement.remove();

      // iconElement.style.display = "block";

      // homesElement.innerHTML = "";

      // homesElement.innerHTML = "";

      FilteredHousesArray.FilteredArray.map((house) => {
        console.log(house);

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

  FilteredHousesArrayInfoAndDisplay();
}
