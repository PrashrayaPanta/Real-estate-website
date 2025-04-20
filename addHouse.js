var houseNameElement = document.querySelector("#title");
var noofRoomElement = document.querySelector("#noofroom");
var squareFeetCoveredElement = document.querySelector("#squarefeetcovered");
var locatedAtElement = document.querySelector("#located-at");
var addTodoElement = document.querySelector(".submit-btn");
var houses = JSON.parse(localStorage.getItem("houses")) || [];
console.log(houses);
houses.map(function (todo) {
    var houseListElement = document.createElement("div");
    houseListElement.classList.add("house-list");
    houseListElement.innerHTML = "<h2>House Title:".concat(todo.titleValue, "</h2>\n          <h2>House No of Room: ").concat(todo.noofRoomElementValue, "</h2>\n          <h2>square Foot: ").concat(todo.squareFeetCoveredElementValue, "</h2>\n          <h2>Located At :").concat(todo.locatedAtElementValue, "</h2>");
    var containerHouseListsElement = document.querySelector(".container-house-lists");
    containerHouseListsElement.appendChild(houseListElement);
});
addTodoElement.addEventListener("click", function (event) {
    var titleValue = houseNameElement === null || houseNameElement === void 0 ? void 0 : houseNameElement.value;
    var noofRoomElementValue = noofRoomElement === null || noofRoomElement === void 0 ? void 0 : noofRoomElement.value;
    var squareFeetCoveredElementValue = squareFeetCoveredElement === null || squareFeetCoveredElement === void 0 ? void 0 : squareFeetCoveredElement.value;
    var locatedAtElementValue = locatedAtElement === null || locatedAtElement === void 0 ? void 0 : locatedAtElement.value;
    console.log(titleValue, noofRoomElementValue, squareFeetCoveredElementValue, locatedAtElementValue);
    houses.push({
        titleValue: titleValue,
        noofRoomElementValue: noofRoomElementValue,
        squareFeetCoveredElementValue: squareFeetCoveredElementValue,
        locatedAtElementValue: locatedAtElementValue,
    });
    localStorage.setItem("houses", JSON.stringify(houses));
    console.log(houses);
    houses.map(function (todo) {
        var houseListElement = document.createElement("div");
        houseListElement.classList.add("house-list");
        houseListElement.innerHTML = "<h2>House Title:".concat(todo.titleValue, "</h2>\n          <h2>House No of Room: ").concat(todo.noofRoomElementValue, "</h2>\n          <h2>square Foot: ").concat(todo.squareFeetCoveredElementValue, "</h2>\n          <h2>Located At :").concat(todo.locatedAtElementValue, "</h2>");
        var containerHouseListsElement = document.querySelector(".container-house-lists");
        containerHouseListsElement === null || containerHouseListsElement === void 0 ? void 0 : containerHouseListsElement.appendChild(houseListElement);
    });
    houseNameElement === null || houseNameElement === void 0 ? void 0 : houseNameElement.value = "";
    noofRoomElement === null || noofRoomElement === void 0 ? void 0 : noofRoomElement.value = "";
    squareFeetCoveredElement === null || squareFeetCoveredElement === void 0 ? void 0 : squareFeetCoveredElement.value = "";
    locatedAtElement === null || locatedAtElement === void 0 ? void 0 : locatedAtElement.value = "";
});
