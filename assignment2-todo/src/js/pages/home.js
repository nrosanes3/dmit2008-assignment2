import levelHeading from './../components/ui/levelHeading'
import link from './../components/ui/link'
import logo from './../components/ui/logo'
import tagline from './../components/ui/tagline'

const homePage = function (){
   

    const header = document.createElement('header')
    const h1 = levelHeading('h1','Nina\'s To Do List')
    const logoSVG = logo('svg','ui-svg h-5 w-5')
    const tagLine = tagline('h2','Just Get Started.', 'ui-heading2')
    const toDoPage = link('To Do App', '/toDoPage')
    header.append(h1)
    header.append(logoSVG)
    header.append(tagLine)
    header.append(toDoPage)

    return header
      
}

export default homePage
