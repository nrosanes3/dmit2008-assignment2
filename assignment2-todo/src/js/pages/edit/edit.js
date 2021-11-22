
import makeElement from "../../utils/makeElement";
import {Router} from './../../routes/router';
import button from "../../components/ui/button";
import { getStore } from "../../redux/store";
import reducer from '../../redux/reducers';


const cancelButton = button("cancel")
const editButton = button("edit")

const editPage = function(props){
 const page = document.createElement('div') 

    function cleanUp (){
        cancelButton.removeEventListener('click', onCancelEdit)  
        editButton.removeEventListener('click', onEditTodo) 
    }
    function onCancelEdit (e){
        cleanUp()
        Router('/toDoPage')
    }
    function onEditTodo (e){ 
            cleanUp()
            Router('/toDoPage')
    }
    
    let todoTemplate = `
        <header >
        <h1 >The To Do List</h1>
        <h2>Time to get things done</h2>
        <h3>Edit Todo</h3>
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
    const editTemplate = makeElement(todoTemplate) 
    editTemplate.querySelector('div').innerHTML = ''
    cancelButton.addEventListener('click', onCancelEdit)  
    editButton.addEventListener('click', onEditTodo) 
    editTemplate.querySelector('div').append(cancelButton, editButton)
    page.append(editTemplate)
    return page;  
}

export default editPage;