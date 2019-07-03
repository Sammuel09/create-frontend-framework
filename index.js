import { init } from './framework/index.js'
import { div } from './framework/element.js'
import { btn } from './framework/element.js'
import { h1 } from './framework/element.js'
import { User } from './src/user'

const firstName = 'Samuel'
const lastName = 'Adeniran'

init(
  '#app',
  User({ firstName, lastName }),
  // h1`Hello Sam !`
)
// init('#app', h1`Hello ${firstName} ${lastName} !`)
