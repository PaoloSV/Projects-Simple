const taskInput = document.querySelector('#task-input');
const addTaskBtn = document.querySelector('#add-task-btn');
const taskList = document.querySelector('#task-list');

let taskItem;

const addTask = () => {
    const taskText = taskInput.value.trim();
    if(taskText !==""){
        taskItem = document.createElement('li');
        taskItem.innerHTML = 
        `<span>${taskText}</span>
        <button class="delete-btn">Eliminar</button>
        `;
        const deleteBtn = taskItem.querySelector('.delete-btn');
        // deleteBtn.addEventListener('click',()=>{
        //     deleteTask;   
        // })
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

//TODO: REVISAR
function toggleComplete () {
    this.classList.toggle("completed")
}

//TODO: REVISAR
function deleteTask () {
    this.parentElement.remove();
}

addTaskBtn.addEventListener('click',()=>{
    addTask();
})

taskInput.addEventListener('keypress',(event)=>{
    if(event.key === 'Enter'){
        addTask();
    }
})

taskList.addEventListener('click',(event)=>{
    if(event.target.tagName === 'SPAN'){
        event.target.classList.toggle("completed");
    }
})

taskList.addEventListener('click',(event)=>{
    if(event.target.classList.contains('delete-btn')){
        event.target.parentElement.remove();
    }
})

//TODO: HACER ANOTACIONES AL CODIGO 