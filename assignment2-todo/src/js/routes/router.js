import homePage from "../pages/home";
import toDoPage from "../pages/toDoPage";
import pageNotFound from "../pages/pageNotFound";
import deletePage from "../pages/delete/delete";
import editPage from '../pages/edit/edit';
import addPage from '../pages/add/add';

const routes = {
    '/':homePage(),
    '/toDoPage':toDoPage(),
    '/pageNotFound':pageNotFound(),
    '/delete': deletePage,
	'/add': addPage,
	'/edit': editPage,
}


const Router = function(pathname, params=null){
    const isValidRoute = Object.keys(routes).find(key=> key===pathname)
    console.log(isValidRoute)

    const app = document.querySelector('#app')
    app.innerHTML = '';
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    );
    if(isValidRoute === undefined){
        app.append(pageNotFound())
    }else{
        app.appendChild(routes[window.location.pathname](params))
    }
}

export {Router}