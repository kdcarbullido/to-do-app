function onReady() {

    let toDos = [];
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

    function createNewToDo() {
        if (!newToDoText.value) {return;}
        newToDoText.value = newToDoText.value.trim();
        if (newToDoText.value.length <= 0) {return;}

        toDos.push({
            title: newToDoText.value,
            complete: false
        });

       // newToDoText.value = '';  Should this be here. shows in chkpoint illustration, but not instructed.  This statement also appears in addtoDo.eventlistener function.

        renderTheUI();
    }

    function renderTheUI() {
        const toDoList = document.getElementById('toDoList');
        toDoList.textContent = '';
        toDos.forEach(function(toDos){
            const newLi = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            const title = document.createElement('span');
            title.textContent = toDos.title;

            toDoList.appendChild(newLi);
            newLi.appendChild(title);
            newLi.appendChild(checkbox);

        });
    }

    addToDoForm.addEventListener('submit', event => {
        event.preventDefault();
        createNewToDo();
        newToDoText.value = '';
    })

    renderTheUI();
}

    //     // get the text
    //     let title = newToDoText.value;
    //
    //     // create a new li
    //     let newLi = document.createElement('li');
    //
    //     // create a new input
    //     let checkbox = document.createElement('input');
    //
    //     // set the input's type to checkbox
    //     checkbox.type = "checkbox";
    //
    //     // set the title
    //     newLi.textContent = title;
    //
    //     // attach the checkbox to the li
    //     newLi.appendChild(checkbox);
    //
    //     // attach the li to the ul
    //     toDoList.appendChild(newLi);
    //
    //     // empty the input
    //
    // });





window.onload = function () {
    onReady();
};

