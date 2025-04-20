import { HousesArrayData } from "./Houses.js";

// Track selected room counts using an array
let selectedRooms = [];

document.querySelectorAll(".noofroom").forEach((checkbox) => {
  checkbox.onchange = handleRoomFilter;
});

function handleRoomFilter(event) {
  const roomCount = parseInt(event.target.id.split("-")[0]);
  console.log(roomCount);

  const isChecked = event.target.checked;

  // Update selected rooms array
  if (isChecked) {
    // Add room count if not already present
    if (!selectedRooms.includes(roomCount)) {
      selectedRooms.push(roomCount);

      console.log(selectedRooms);
    }
  } else {
    // Remove room count from array
    selectedRooms = selectedRooms.filter((count) => count !== roomCount);
    console.log(selectedRooms);
  }

  // Filter houses based on selected rooms
  let filteredHouses;
  if (selectedRooms.length > 0) {
    filteredHouses = HousesArrayData.filter((house) =>
      selectedRooms.includes(house.noOfRooms)
    );
  } else {
    // Show all houses if no filters selected
    filteredHouses = HousesArrayData;
  }

  updateUI(filteredHouses);
}

// Keep the same updateUI function from previous example
export function updateUI(houses) {
  const homesElement = document.querySelector(".homes");
  homesElement.innerHTML = "";

  if (houses.length === 0) {
    homesElement.innerHTML = `<h1 class="nodatafound">No Data Found</h1>`;
    return;
  }

  houses.forEach((house) => {
    const homeElement = document.createElement("div");
    homeElement.classList.add("home");
    homeElement.innerHTML = `
      <img src="${house.imgUrlLocal}" alt="Beautiful Family House" class="home__image" />
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
    homesElement.appendChild(homeElement);
  });
}
