

const houseNameElement = document.querySelector("#title");

// console.log(houseNameElement);





const noofRoomElement = document.querySelector("#noofroom");

console.log(noofRoomElement);

const squareFeetCoveredElement = document.querySelector("#squarefeetcovered");

console.log(squareFeetCoveredElement);


const locatedAtElement = document.querySelector("#located-at");

console.log(locatedAtElement);





const addTodoElement = document.querySelector(".submit-btn");


addTodoElement.addEventListener("click", function(event){

    // console.log(event.target);
    

    const titleValue = houseNameElement.value;


    const noofRoomElementValue = noofRoomElement.value;


    const squareFeetCoveredElementValue = squareFeetCoveredElement.value;



    const locatedAtElementValue = locatedAtElement.value;



    localStorage.setItem("todos", JSON.stringify({titleValue, noofRoomElementValue, squareFeetCoveredElementValue, locatedAtElementValue})) 


}) 


// console.log(addTodoElement);


// addTodoElement.onclick
