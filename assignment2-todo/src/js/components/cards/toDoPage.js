import makeElement from '../../utils/makeElement'
const toDoPage = function (){
    const template = `
    <aside id="toDoPage" class="toDoPage">
    <header>
        <h2>To Do List</h2>
    </header>
    <ul id="todos" class="todos">
     
    </ul>
    <footer>

    </footer>
</aside>
    `

    return makeElement(template)
}

export default toDoPage;