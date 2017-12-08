function onReady() {

    let id = 0;
    let toDos = [];
    var strToDos = localStorage.getItem("storedToDos");
    if (strToDos !== null) {
        toDos = JSON.parse(strToDos);
        id = toDos.length;
    }


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
        saveToDos();    // save todos to storage
        renderTheUI();
    }

    function deleteToDo (id) {
        toDos = toDos.filter(item => item.id !== id);
        saveToDos();
    }

    function saveToDos () {
        strToDos = JSON.stringify(toDos);
        localStorage.setItem("storedToDos", strToDos);
    }


    function renderTheUI() {
        const toDoList = document.getElementById('toDoList');
        toDoList.textContent = '';
        toDos.forEach(function(toDo){
            const newLi = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            const title = document.createElement('span');
            const completeText = document.createTextNode('Check if To-Do is completed . . .  ');
            title.textContent = toDo.title;
            if (toDo.complete) {
                checkbox.checked = true;
            }

            const delBtn = document.createElement('button');
            const delBtnText = document.createTextNode('Click to Delete this To-Do');
            delBtn.appendChild(delBtnText);

            toDoList.appendChild(newLi);
            newLi.appendChild(title);
            newLi.appendChild(checkbox);
            newLi.appendChild(completeText);
            newLi.appendChild(delBtn);
            delBtn.addEventListener('click', event => {
                deleteToDo(toDo.id);
                renderTheUI();
            });

            checkbox.addEventListener('click', event => {
                toDo.complete = !toDo.complete;
                saveToDos();
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

