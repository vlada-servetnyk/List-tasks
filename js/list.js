
const input = document.querySelector(".form-control");
const btn = document.querySelector(".btn");
const div = document.querySelector(".input-group");

const listTasks = document.createElement("ul");
listTasks.classList.add("list-group");
div.insertAdjacentElement("afterend", listTasks);
const list = document.querySelector(".list-group");

let tasks = [];

btn.addEventListener("click", handleClick);

function handleClick() {
    const taskInput = input.value;


    const taskItem = {
        text: taskInput,
        done: false,
    };
    tasks.push(taskItem);
    
    input.value = "";
    render();

    
};

function render() {
    console.log(tasks);
    
    const markup = tasks   
        .map(item =>
            `<li class="list-group-item" data-action="${item.done}}">${item.text}</li>`)
        .join("");
    list.innerHTML = markup;
};

listTasks.addEventListener("click", doneTask);
    function doneTask(event) {
        let doneTask = event.target;
            doneTask.style.textDecoration = "line-through";
        doneTask.dataset.action = true;
        const indexDoneTask = Array.from(list.children).indexOf(event.target);
        tasks[indexDoneTask].done = true;           
};









// let tasks = "";
    // const markup = `<li class="list-group-item">${taskInput}</li>`;
    // tasks += markup;
    // list.innerHTML = tasks;

    