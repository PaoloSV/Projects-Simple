import { Todo } from "../models/todo.models"


/**
 * 
 * @param {Todo} todo 
 */
export const createTodoHtml = (todo) => {
    if (!todo) throw new Error('A TODO object is requireed');
    const {done,description,id} = todo //desestructuramos el obj todo
    const html = `
        <div class="view">
            <input class="toggle" type="checkbox" ${(done)? 'checked' : ''}>
            <label>${description}</label>           
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    `;
    const liElement = document.createElement('li');
    liElement.innerHTML = html;
    liElement.setAttribute('data-id',id); //agrega el atributo 'data-id' con el valor de todo.id
    if (todo.done === true){
        liElement.classList.add('completed');
    }
    return liElement;
}