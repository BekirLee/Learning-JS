

let tasks = [
    { "id": 1, "name": "task1" },
    { "id": 2, "name": "task2" },
    { "id": 3, "name": "task3" },
    { "id": 4, "name": "task4" },


]
displaytask();

function displaytask() {
    let ul = document.getElementById("task-list");
    ul.innerHTML = "";

    for (let result of tasks) {

        let li = `
                <li class="task list-group-item d-flex justify-content-between">
                    <div class="form-control">
                        <input type="checkbox" class="form-check-input" id="${result.id}">
                        <label for="${result.id}" class="form-check-label">${result.name}</label>
                    </div>
                    <div class="dropdown ">
                    <a class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-ellipsis"></i>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a onclick="deleteTask(${result.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash"></i> Del</a></li>
                    <li><a  class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Add</a></li>
                    </ul>
                    </div>
                    </li>
                   `;
                    
        ul.insertAdjacentHTML("beforeend", li);

    }

}

document.querySelector("#form1").addEventListener("click", newtask);


function newtask(event) {
    let taskinput = document.querySelector("#password");
    if (taskinput.value == "") {
        alert("You should write true text");
    }
    else {
        tasks.push({ "id": tasks.length + 1, "name": taskinput.value })
        taskinput.value = "";
        displaytask();

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


