

const houseNameElement = document.querySelector("#title");


// console.log(houseNameElement);



const noofRoomElement = document.querySelector("#noofroom");

// console.log(noofRoomElement);

const squareFeetCoveredElement = document.querySelector("#squarefeetcovered");

// console.log(squareFeetCoveredElement);


const locatedAtElement = document.querySelector("#located-at");

// console.log(locatedAtElement);

const titleValue = houseNameElement.value;


const noofRoomElementValue = noofRoomElement.value;


const squareFeetCoveredElementValue = squareFeetCoveredElement.value;


const locatedAtElementValue = locatedAtElement.value;


const inputAllement = document.querySelectorAll(".form-input");


console.log(inputAllement);





























const addTodoElement = document.querySelector(".submit-btn");


addTodoElement.addEventListener("click", function(event){











    
    



    console.log(titleValue, noofRoomElementValue, squareFeetCoveredElementValue, locatedAtElementValue);
    



    const todos = JSON.parse(sessionStorage.getItem("todos")) || [];


    console.log(todos);

    todos.map((todo) => {

        // console.log(todo);

        const houseListElement = document.createElement("div");

        houseListElement.classList.add("house-list");

        houseListElement.innerHTML = `<h2>House Title:${todo.titleValue}</h2>
        <h2>House No of Room: ${todo.noofRoomElementValue}</h2>
        <h2>square Foot: ${todo.squareFeetCoveredElementValue}</h2>
        <h2>Located At :${todo.locatedAtElementValue}</h2>`;  




    })
    

    todos.push({titleValue, noofRoomElementValue, squareFeetCoveredElementValue, locatedAtElementValue});


    sessionStorage.setItem("todos", JSON.stringify(todos));


    console.log(todos);
    




    






}) 


// console.log(addTodoElement);


// addTodoElement.onclick
