{

    const tasks = [];

    const welcome = () => {
        console.log("Cześć!");
    };

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

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, taskIndex) => {
            removeButton.addEventListener("click", () => {
                removeTask(taskIndex);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-toggleDone");

        toggleDoneButtons.forEach((toggleDoneButton, taskIndex) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(taskIndex);
            });
        });
    };

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li class="tasks__item js-task">
                     <button class="tasks__button tasks__button--toggleDone js-toggleDone">
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

        bindEvents();
    };

    const onFormSubmint = (event) =>{
        event.preventDefault();

        const newTaskElement = document.querySelector(".js-newTask");
        const newTaskContent = newTaskElement.value.trim();

        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTaskElement.value = "";
        }

        newTaskElement.focus();
    };

    const init = () => {
        render();
        welcome();

        const from = document.querySelector(".js-form");
        from.addEventListener("submit", onFormSubmint);
    }

  
    init();

}






