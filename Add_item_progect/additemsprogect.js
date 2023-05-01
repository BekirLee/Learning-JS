let tasks = [
    { "id": 1, "name": "task1" },
    { "id": 2, "name": "task2" },
    { "id": 3, "name": "task3" },
    { "id": 4, "name": "task4" },


]
displaytask();

function displaytask() {
    let ul = document.getElementById("task-list");

    for (let result of tasks) {

        let li = `
                <li class="task list-group-item">
                    <div class="form-control">
                        <input class="form-check-input" id="${result.id}">
                        <label for="${result.id}" class="form-check-label">${result.name}</label>
                    </div>
                    </li>`;

        ul.insertAdjacentHTML("beforeend", li);

    }

}

document.querySelector("#form1").addEventListener("click", newtask);


function newtask(event) {
    let taskinput=document.querySelector("#password");
   tasks.push( {"id":tasks.length +1,"name":taskinput.value})

event.preventDefault();

}

// let textpassword = document.querySelector("#password");

//     result.push({ "id": textpassword.length, "name": textpassword.value })
   
// document.querySelector("#clear-task").addEventListener("click", function (event) {
//     console.log("Sil");
//     event.preventDefault();
// });