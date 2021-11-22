import makeElement from './../utils/makeElement'
import link from './../components/ui/link'
const pageNotFound = function(){
    const header = document.createElement('header')
    const backToSafety = link("back to To Do App", '/toDoPage')
    const template = `
    <header class="ui-header">    
    <h1>404 Page Not Found</h1>    
    <p>Sorry! You've found a page that doesn't exist.</p>    
    </header>    
    `;
    const pageHeader = makeElement(template)
    pageHeader.append(backToSafety)
    header.append(pageHeader)

    return header
}

export default pageNotFound
