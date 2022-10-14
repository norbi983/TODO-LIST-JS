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


