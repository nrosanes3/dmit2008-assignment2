
import makeElement from "../../utils/makeElement";
import {Router} from './../../routes/router';
import button from "../../components/ui/button";
import { getStore } from "../../redux/store";
import reducer from '../../redux/reducers';
 

const cancelButton = button("cancel")
const deleteButton = button("delete")

const deletePage = function(props){
  const page = document.createElement('div') 

    function cleanUp (){
        cancelButton.removeEventListener('click', onCancelDelete)  
        deleteButton.removeEventListener('click', onDeleteTodo) 
    }

    function onCancelDelete (e){
        cleanUp()
        Router('/toDoPage')
    }

    function onDeleteTodo(e) {
		const index = getStore().findIndex((todo) => todo.id === props.id);
		const action = {
			type: 'delete',
			payload: { index },
			cb: () => cleanUp(),
		};

		reducer(action);
		Router('/toDoPage');
	}
    
    let todoTemplate = `
        <header>
            <h1>The To Do List</h1>
            <h2>Time to get things done</h2>
            <h3>Delete a todo</h3>
            <div></div>
        </header>
    `
    const deleteTemplate = makeElement(todoTemplate) 
    deleteTemplate.querySelector('div').innerHTML = ''
    cancelButton.addEventListener('click', onCancelDelete)  
    deleteButton.addEventListener('click', onDeleteTodo) 
    deleteTemplate.querySelector('div').append(cancelButton, deleteButton)
    page.append(deleteTemplate)
    return page;  
}

export default deletePage;