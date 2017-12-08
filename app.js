function onReady() {

    let id = 0;
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
            complete: false,
            id: id
        });
        id++;
       // newToDoText.value = '';  Should this be here. shows in chkpoint illustration, but not instructed.  This statement also appears in addtoDo.eventlistener function.

        renderTheUI();
    }

    function deleteToDo (id) {
        toDos = toDos.filter(item => item.id !== id);
    }



    function renderTheUI() {
        const toDoList = document.getElementById('toDoList');
        toDoList.textContent = '';
        toDos.forEach(function(toDos){
            const newLi = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            const title = document.createElement('span');
            const completeText = document.createTextNode('Check if To-Do is completed . . .  ');
            title.textContent = toDos.title;

            const delBtn = document.createElement('button');
            const delBtnText = document.createTextNode('Click to Delete this To-Do');
            delBtn.appendChild(delBtnText);


            toDoList.appendChild(newLi);
            newLi.appendChild(title);
            newLi.appendChild(checkbox);
            newLi.appendChild(completeText);
            newLi.appendChild(delBtn);
            delBtn.addEventListener('click', event => {
                deleteToDo(toDos.id);
                renderTheUI();
            });
        });
    }

    addToDoForm.addEventListener('submit', event => {
        event.preventDefault();
        createNewToDo();
        newToDoText.value = '';
    });

    renderTheUI();
}


window.onload = function () {
    onReady();
};

