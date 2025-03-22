import { HousesArrayData } from "./Houses.js";

console.log(HousesArrayData);

document
  .querySelectorAll(".noofroom")
  .forEach(
    (certainCheckEleemnt, index) =>
      (certainCheckEleemnt.onchange = Room1andRoom2Search)
  );

function Room1andRoom2Search(event) {
  console.log(event.target.id.split("-")[0]);

  console.log(event.target.checked);

  if (event.target.checked) {
    console.log("Chgecked");

    const FilteredArrayRoom = HousesArrayData.filter(
      (House) => House.noOfRooms == event.target.id.split("-")[0]
    );

    if (FilteredArrayRoom.length <= 0) {
      const homesElements = document.querySelector(".homes");
      homesElements.innerHTML = `<h1 class="nodatafound">No Data Found</h1>`;
    } else {
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

        FilteredArrayRoom.map((house) => {
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

    // console.log(FilteredArrayRoom);

    // FetchGharInfoAndDisplay();
  } else {
    setTimeout(() => {
      const homesElement = document.querySelector(".homes");

      const NoDataFoundElement = document.querySelector(".nodatafound");

      // console.log(NoDataFoundElement);

      NoDataFoundElement.remove();

      console.log(homesElement);

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
