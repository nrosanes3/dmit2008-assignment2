import makeElement from "../../utils/makeElement"

const todos = function ({id,category,title,isComplete,endDate}) {
    const template =   `
     <li class="${title}" data-key="${id}">
     <p>${category}</p> 
     <p>${department}</p> 
     <p>${isComplete}</p> 
     <p>${endDate}</p>
     <p>
     <button  data-key="${id}" id="edit">edit</button
     </p>
     <p>
     <button  data-key="${id}" id="delete">delete</button
     </p>
     </li>
    `
    return makeElement(template)
}

export {todos}