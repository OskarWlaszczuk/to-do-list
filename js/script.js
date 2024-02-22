{
    const tasks = [];


    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };


    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };


    const callEvents = () => {
        const removeButtonElement = document.querySelectorAll(".js-removeButton");
        removeButtonElement.forEach((removeButtonElement, taskIndex) => {
            removeButtonElement.addEventListener("click", () => {
                removeTask(taskIndex);
            });
        });

        const toggleDoneButtonsElement = document.querySelectorAll(".js-taskDoneButton");
        toggleDoneButtonsElement.forEach((toggleDoneButtons, taskIndex) => {
            toggleDoneButtons.addEventListener("click", () => {
                toggleTaskDone(taskIndex);
            });
        });
    };


    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
            <li class='tasksList__listItem ${task.done ? 'tasksList__listItem--done' : ""}'>
                <button class = "tasksList__button tasksList__button--done js-taskDoneButton">${task.done ? '✔' : ''}</button >
                     ${task.content}
                <button class="tasksList__button tasksList__button--remove js-removeButton">X</button>
            </li >
        `;
        };
        document.querySelector(".js-tasksList").innerHTML = htmlString;

        document.querySelector(".js-statsAllTasks").innerHTML = `
        Liczba wszystkich zadań: <span class='tasksList__stats--statsNumber'>${tasks.length}</span>
        `;

        document.querySelector(".js-statsDoneTasks").innerHTML = `
        Liczba ukończonych zadań: <span class='tasksList__stats--statsNumber'>${tasks.filter(task => task.done).length}</span>
        `;
        callEvents();
    };


    const addNewTaskContent = (newTaskContent) => {
        tasks.push(
            {
                content: newTaskContent,
            }
        );

        render();
    };


    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-addNewTask__input").value.trim();
        if (newTaskContent === "") {
            return;
        }
        addNewTaskContent(newTaskContent);
    };


    const init = () => {
        render();

        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };


    init();
};