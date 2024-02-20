{
    const tasks = [];


    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
                <li class='tasksList__listItem ${task.done === true ? 'tasksList__listItem--done' : ""}'>
                <button class = 'tasksList__buton tasksList__buton--done'>✔</button> ${task.content} <button class = 'tasksList__buton tasksList__buton--remove'>X</button>
                </li>`
        };

        document.querySelector(".js-tasksList").innerHTML = htmlString;
    };


    const addNewTaskContent = (newTaskContent) => {
        tasks.push(
            {
                content: newTaskContent,
            },
        );

        render();
    };


    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-addNewTask__input").value.trim();
        if (newTaskContent === "") {
            return;
        }
        addNewTaskContent(newTaskContent)
    };


    const init = () => {
        render();

        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };


    init();
};