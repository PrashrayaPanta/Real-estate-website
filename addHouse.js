const houseNameElement = document.querySelector("#title");

console.log(houseNameElement);

const noofRoomElement = document.querySelector("#noofroom");

console.log(noofRoomElement);

const squareFeetCoveredElement = document.querySelector("#squarefeetcovered");

console.log(squareFeetCoveredElement);

const locatedAtElement = document.querySelector("#located-at");

console.log(locatedAtElement);

const addTodoElement = document.querySelector(".submit-btn");

const houses = JSON.parse(localStorage.getItem("houses")) || [];

console.log(houses);

houses.map((todo) => {
  const houseListElement = document.createElement("div");

  houseListElement.classList.add("house-list");

  houseListElement.innerHTML = `<h2>House Title:${todo.titleValue}</h2>
          <h2>House No of Room: ${todo.noofRoomElementValue}</h2>
          <h2>square Foot: ${todo.squareFeetCoveredElementValue}</h2>
          <h2>Located At :${todo.locatedAtElementValue}</h2>`;

  const containerHouseListsElement = document.querySelector(
    ".container-house-lists"
  );

  containerHouseListsElement.appendChild(houseListElement);
});

addTodoElement.addEventListener("click", function (event) {
  const titleValue = houseNameElement.value;

  const noofRoomElementValue = noofRoomElement.value;

  const squareFeetCoveredElementValue = squareFeetCoveredElement.value;

  const locatedAtElementValue = locatedAtElement.value;

  console.log(
    titleValue,
    noofRoomElementValue,
    squareFeetCoveredElementValue,
    locatedAtElementValue
  );

  houses.push({
    titleValue,
    noofRoomElementValue,
    squareFeetCoveredElementValue,
    locatedAtElementValue,
  });

  localStorage.setItem("houses", JSON.stringify(houses));

  console.log(houses);

  houses.map((todo) => {
    const houseListElement = document.createElement("div");
    houseListElement.classList.add("house-list");

    houseListElement.innerHTML = `<h2>House Title:${todo.titleValue}</h2>
          <h2>House No of Room: ${todo.noofRoomElementValue}</h2>
          <h2>square Foot: ${todo.squareFeetCoveredElementValue}</h2>
          <h2>Located At :${todo.locatedAtElementValue}</h2>`;

    const containerHouseListsElement = document.querySelector(
      ".container-house-lists"
    );

    containerHouseListsElement.appendChild(houseListElement);
  });


    houseNameElement.value = "";
    noofRoomElement.value = "";
    squareFeetCoveredElement.value = "";
    locatedAtElement.value = "";
});
