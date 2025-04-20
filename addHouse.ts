const houseNameElement = document.querySelector("#title");



const noofRoomElement = document.querySelector("#noofroom");



const squareFeetCoveredElement = document.querySelector("#squarefeetcovered");



const locatedAtElement = document.querySelector("#located-at");



const addTodoElement = document.querySelector(".submit-btn");

const houses = localStorage.getItem("houses") ? JSON.parse(localStorage.getItem("houses") as string) : [];

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

  containerHouseListsElement?.appendChild(houseListElement);
});

addTodoElement?.addEventListener("click", function (event) {

  const titleValue = (houseNameElement as HTMLInputElement)?.value;

  const noofRoomElementValue = (noofRoomElement as HTMLInputElement).value;

  const squareFeetCoveredElementValue = (squareFeetCoveredElement as HTMLInputElement).value;

  const locatedAtElementValue = (locatedAtElement as HTMLInputElement).value;

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

    containerHouseListsElement?.appendChild(houseListElement);
  });


    (houseNameElement as HTMLInputElement).value = "";
    (noofRoomElement as HTMLInputElement).value = "";
    (squareFeetCoveredElement as HTMLInputElement).value = "";
    (locatedAtElement as HTMLInputElement).value = "";
});
