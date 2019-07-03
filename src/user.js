import { createComponent } from '../framework/index'
import { div } from '../framework/element.js'
import { onClick } from '../framework/event'

// initial state of the application
const initialState = { firstName: 'Samuel', lastName: 'Adeniran' };

// state mutation actions i.e fuunctions that change state
const methods = {
  changeName: (state, firstName) => ({...state, firstName})
}

// component template
const template = ({ firstName, lastName }) =>
  div`${onClick(() => alert(firstName))} Hello ${firstName} ${lastName} `

// create a real world component
export const User = createComponent({ template, methods, initialState });
