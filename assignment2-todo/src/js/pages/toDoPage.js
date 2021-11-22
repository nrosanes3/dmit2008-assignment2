import toDoPage from '../components/cards/toDoPage'
import makeElement from '../utils/makeElement'
import {getStore} from './../redux/store'
import { todos } from '../components/cards/todo'
import {Router} from "~/src/js/routes/router"

 
const theToDoPage = function(){
    const page = document.createElement('div') 
    const container = toDoPage();
    const todosList = getStore()

    function onDeletetodos (e){
      const todosId =  e.currentTarget.dataset.key;
      console.log(todosId)
      Router('/delete', todosId)
    }

    if(todosList.length !== 0){
      const elements =  todosList.map(emp=>{
             return todos(emp) 
        })
      const ul = container.querySelector('#todos')
      elements.forEach(elm=>{
          elm.querySelector('#delete').addEventListener('click', onDeletetodos)
          ul.append(elm)
      })
      page.append(container)
    }
    
   
    
    return page
}

export default theToDoPage