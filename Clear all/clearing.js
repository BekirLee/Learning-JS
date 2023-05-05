

let tasks = [
    { "id": 1, "name": "task1" },
    { "id": 2, "name": "task2" },
    { "id": 3, "name": "task3" },
    { "id": 4, "name": "task4" },
]

let editid;
let istaskupdate = false;
const clear=document.querySelector("#")

const taskinput = document.querySelector("#password");
displaytask();

function displaytask() {
    let ul = document.getElementById("task-list");
    ul.innerHTML = "";

    for (let result of tasks) {

        let li = `
                <li class="task list-group-item">
                    <div class="form-control">
                        <input class="form-check-input" id="${result.id}">
                        <label for="${result.id}" class="form-check-label">${result.name}</label>
                    </div>
                    </li>
                    <div class="dropdown">
                        <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa-solid fa-ellipsis"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a onclick="deleteTask(${result.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash"></i> Del</a></li>
                        <li><a  class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Add</a></li>
                        <li><a onclick='updateTask(${result.id}," ${result.name}")' class="dropdown-item" href="#"><i class="fa-solid fa-trash"></i> Update</a></li>
                        </ul>
                        </div>`;

        ul.insertAdjacentHTML("beforeend", li);

    }

}

document.querySelector("#form1").addEventListener("click", newtask);


function newtask(event) {
    if (taskinput.value == "") {
        alert("You should write true text");
    }
    else {
        if (!istaskupdate) {
            //add
            tasks.push({ "id": tasks.length + 1, "name": taskinput.value })
            taskinput.value = "";
            displaytask();

        }
        else {
            //update
            for (let result of tasks) {
                if (result.id == editid) {
                    result.name = taskinput.value;

                }
                istaskupdate = false;
            }

        }


    }
    event.preventDefault();
}

// let textpassword = document.querySelector("#password");

//     result.push({ "id": textpassword.length, "name": textpassword.value })

// document.querySelector("#clear-task").addEventListener("click", function (event) {
//     console.log("Sil");
//     event.preventDefault();
// });

function deleteTask(id) {
    let del_id;
    // for (let index in tasks) {
    //     if (tasks[index].id == id) {
    //         del_id = id;
    //     }
    // }

    del_id = tasks.findIndex(function (mission) {
        return mission.id == id;
    })

    tasks.splice(del_id, 1);
    displaytask();

}

function updateTask(taskId, taskName) {
    editid = taskId;
    istaskupdate = true;
    taskinput.value = taskName;
    taskinput.focus();
    taskinput.classList.add("active");
}

function clear 
