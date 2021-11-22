import makeElement from "../../utils/makeElement";
import {Router} from './../../routes/router';
import button from "../../components/ui/button";
import { getStore } from "../../redux/store";
import reducer from '../../redux/reducers';
 

const cancelButton = button("cancel")
const deleteButton = button("add")

const addPage = function(props){
    const page = document.createElement('div') 
    function cleanUp (){
        cancelButton.removeEventListener('click', onCancelDelete)  
        deleteButton.removeEventListener('click', onDeleteTodo) 
    }
    function onCancelDelete (e){
        cleanUp()
        Router('/toDoPage')
    }
    function onDeleteTodo (e){ 
        cleanUp()
        Router('/toDoPage')
    }
    
    let todoTemplate = `
        <header >
            <h1 >The To Do List</h1>
            <h2>Time to get things done</h2>
            <h3>Add NEW Todo</h3>
            <span class="flex">
            <span>
            <label>ID</label>
            <input type="text"/>
            <label>Completed</label>
            <input type="checkbox"/>
            <label>Category</label>
            <input type="text"/>
            <label>To Do</label>
            <input type="text"/>
            <label>Start Date</label>
            <input type="text"/>
            <label>End Date</label>
            <input type="text"/>
            <label>Start Time</label>
            <input type="text"/>
            <label>End Time</label>
            <input type="text"/>
            <div></div>
        </header>
    `
    const addTemplate = makeElement(todoTemplate) 
    addTemplate.querySelector('div').innerHTML = ''
    cancelButton.addEventListener('click', onCancelDelete)  
    deleteButton.addEventListener('click', onDeleteTodo) 
    addTemplate.querySelector('div').append(cancelButton, deleteButton)
    page.append(addTemplate)

    return page;
    
}

export default addPage