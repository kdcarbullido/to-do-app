function onReady() {

    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

    addToDoForm.addEventListener('submit', event => {
        event.preventDefault();

        // get the text for the to-do title
        let title = newToDoText.value;

        // create a new li
        let newLi = document.createElement('li');

        // create a new input
        let checkbox = document.createElement('input');

        // set the input's type to checkbox
        checkbox.type = "checkbox";

        // set the to-do title
        newLi.textContent = title;

        // attach the checkbox to the li
        newLi.appendChild(checkbox);

        let compText = document.createTextNode("Check if completed   ");
        newLi.appendChild(compText);

        let delbutton = document.createElement("button");
        let buttonText = document.createTextNode("Delete this To-Do");
        delbutton.addEventListener('click', function () {
            delbutton.parentNode.setAttribute('style', 'display:none');
        });
        delbutton.appendChild(buttonText);
        newLi.appendChild(delbutton);

        // attach the li to the ul
        toDoList.appendChild(newLi);

        // empty the input
        newToDoText.value = '';

    })

};

window.onload = function () {
    alert("The window has loaded!");
    onReady();
};

