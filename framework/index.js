import * as snabbdom from 'snabbdom';
const patch = snabbdom.init([
  require('snabbdom/modules/eventlisteners').default
]);

export const init = (selector, component) => {
  const app = document.querySelector(selector)
  patch(app, component.template)
  // const newElement = document.createElement(component.type)
  // const newTextContent = document.createTextNode(component.template)

  // newElement.append(newTextContent)
  // app.append(newElement)
}

// Add the line concerning methods and initial state
export const createComponent = ({
  template,
  methods = {},
  initialState = {}
}) => props => template(props);
