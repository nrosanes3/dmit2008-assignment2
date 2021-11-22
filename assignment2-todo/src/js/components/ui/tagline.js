import makeElement from "../../utils/makeElement"

const tagline = function (elementType='h2', label="Just Get Started.", className="ui-heading2"){
     const template = `<${elementType} class="${className}"> ${label} </ ${elementType}>`
     const element = makeElement(template)
     return element
}
export default tagline