import { Todo } from "../todos/models/todo.models.js";

export const Filters = { //filtros
    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos:[ //tareas pendientes
        new Todo('Piedra del infinito 1'),
        new Todo('Piedra del infinito 2'),
        new Todo('Piedra del infinito 3'),
    ],
    filter: Filters.All, //filtros
}

const initStore = () =>{
    loadStore();
    console.log('InitStore GAAA');
}

//*Funcion que carga los datos en el locaStorage
const loadStore = () => {
    if(!localStorage.getItem('state')) return;
    const {todos = [],filter = Filters.All } = JSON.parse(localStorage.getItem('state')); // convierte el JSON a obj y lo igualamos con desestructuracion
    state.todos = todos;
    state.filter = filter;
}

//*Guarda el JSON en el localStorage
const saveStateToLocalStorage = () => {
    localStorage.setItem('state',JSON.stringify(state)); // convierte nuestro objeto 'state' en un JSON y lo guarda en el localStorage
    // localStorage.setItem('state','Hola mundo');
}

//*Metodo que optiene todos las tareas (todos)
const getTodos = (filter = Filters.All) => {
    switch(filter){
        case Filters.All:
            return [...state.todos];
        case Filters.Completed: //regresa las completadas
            return state.todos.filter(todo => todo.done); //filer () Básicamente, sirve para filtrar elementos de un array según un criterio.
        case Filters.Pending: //regresa las que aun estan pendientes
            return state.todos.filter(todo => !todo.done);
        default:
            throw new Error(`Option ${filter} is not valid`)
    }
}


/**
 * 
 * @param {String} description 
 */
//*Metodo que agrega nueva tarea
const addTodo = (description) =>{
    if (!description){
        throw new Error(`Description is required`);
    }
    state.todos.push(new Todo(description));
    saveStateToLocalStorage();
}

//*Metodo para cambiar el estado de la tarea
const toggleTodo = (todoId) =>{
    state.todos = state.todos.map(todo => {
        if ( todo.id === todoId ) {
            todo.done = !todo.done;
        }
        return todo;
    });
    saveStateToLocalStorage();
}
//*Metodo que borra una tarea
const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id != todoId);
    saveStateToLocalStorage();
}
//*Metodo que borra una tarea completada
const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done);
    saveStateToLocalStorage();
}

const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
    saveStateToLocalStorage();
}

const getCurrentFilter = () =>{
    return state.filter;
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}