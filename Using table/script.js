// selectors
let taskInput = document.querySelector("#taskInput");
let timeInput = document.querySelector("#timeInput");
let table = document.getElementsByTagName("table")[0];
let button = document.querySelector("#button");
let tbody = document.getElementsByTagName("tbody")[1];
// to add the number to the table (id)
let taskNumber = 0;

// event lisnter
button.addEventListener("click", ()=>{
    // check if the inputs has strings
    if(taskInput.value.length > 0 &&
         timeInput.value.length > 0){
            addTask();
    }
})

function addTask(){
    // create the elements
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let button = document.createElement("button");
   
    // change the number in the id column
    th.innerText = ++ taskNumber;
    th.setAttribute("scope", "row")
    button.innerText = "X";
    button.classList.add("btn");
    button.classList.add("btn-danger");
    button.addEventListener("click", ()=>{
        button.parentNode.parentNode.remove()
    });
    td3.appendChild(button);
    // take the values from the inputs and store then in td
    td1.innerText = taskInput.value;
    td2.innerText = timeInput.value;
    // clear the inputs
    taskInput.value = "";
    timeInput.value = "";
    // append the td's to the tr
    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    


    // append the tr to tbody


    tbody.appendChild(tr);

}
