import html from './app.html?raw'; //con ?raw nos permite importar correctamente el html
import todoStore, { Filters } from '../store/todo.store';
import { renderTodos,renderPending } from './uses-cases';

const ElementIDs = { //objeto que guarda los ids de los elementos html
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    ClearCompletedButton: '.clear-completed',
    TodoFilters: '.filtro',
    PendingCountLabel: '#pending-count',
}
/**
 *
 *@param {String} elementId
 */

export const App = (elementId) =>{

    //*Funcion que muestra todos las tareas
    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter());
        renderTodos(ElementIDs.TodoList,todos);
        updatePendingCount();
    }

    //*Renderiza el contador de pendientes
    const updatePendingCount = () => {
        renderPending(ElementIDs.PendingCountLabel);
    }

    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

    //referencias HTML
    const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);
    const todoListUL = document.querySelector(ElementIDs.TodoList);
    const clearCompletedButton = document.querySelector(ElementIDs.ClearCompletedButton);
    const filtersLIs = document.querySelectorAll(ElementIDs.TodoFilters);

    //listeners (eventos)
    newDescriptionInput.addEventListener('keyup', (event) => {
        if (event.keyCode !== 13 ) return; //el keyCode es la tecla que estamos presionando el 13 es para enter
        if (event.target.value.trim().length === 0) return; //validacion para que el valor que escribe el usuario no sea una string vacio
        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value = '';
    });

    todoListUL.addEventListener('click', (event) =>{
        const element = event.target.closest('[data-id]');
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();
    });

    todoListUL.addEventListener('click', (event) =>{
        const isDestroyElement = event.target.className === 'destroy'; //bool
        const element = event.target.closest('[data-id]');
        if(!element || !isDestroyElement) return;
        todoStore.deleteTodo(element.getAttribute('data-id'));
        displayTodos();
    });

    clearCompletedButton.addEventListener('click',()=> {
        todoStore.deleteCompleted();
        displayTodos();
    });

    filtersLIs.forEach(element => {
        element.addEventListener('click', (element) =>{
            filtersLIs.forEach(el => el.classList.remove('selected')); //remueve la clase
            element.target.classList.add('selected') //añade la clase a los filtros
            switch(element.target.text){
                case 'Todos':
                    todoStore.setFilter(Filters.All);
                break
                case 'Pendientes':
                    todoStore.setFilter(Filters.Pending);
                break
                case 'Completados':
                    todoStore.setFilter(Filters.Completed);
                break
            }
            displayTodos();
        })
    });
}