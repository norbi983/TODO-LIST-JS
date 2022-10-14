{
const tasks = [];

const addNewTask = (newTaskContent) => {
    tasks.push({ content: newTaskContent });
    render();
};

const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
};

const toogleTaskDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render;
};

const bindEvent = () => {
    const removeButton = document.querySelectorAll(".js-remove");

    removeButton.forEach((removeButton, taskIndex) => {
        removeButton.addEventListener("click", () => {
            removeTask(taskIndex);
        });
    });

    const toggleDoneButton = document.querySelectorAll(".js-toggleDone");

    toggleDoneButton.forEach((toggleDoneButton, taskIndex) => {
        toggleDoneButton.addEventListener("click", () => {
            toogleTaskDone(taskIndex);
        });
    });
};

const render = () => {
    let htmlString = "";

    for (const task of tasks) {
        htmlString += `
        <li class="tasks__item js-task">
        <button class="tasks__button tasks__button--toggleDone js-toggleDone
            ${task.done ? "✅" : ""}
            </button>
            <span class="tasks__content${task.done ? "tasks__content--done" : ""}">
            ${task.content}
            </span>
            <button class="tasks__button tasks__button--remove js-remove">
            🗑️
            </button>
            </li>
            `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;

    bindEvent();
};

const onFormSubmit = (event) =>{
    event.preventDefault();

    const newTaskElement = document.querySelector(".js-newTask");
    const newTaskContent = newTaskElement.ariaValueMax.trim();

    if (newTaskContent !== "") {
        addNewTask(newTaskContent);
        newTaskElement.VALUE = "";
    }

    newTaskElement.focus();
};

const init = () => {
    render();

    const from = document.querySelector(".js-form");
    from.addEventListener("submit", onFormSubmit);
};

init();

}






