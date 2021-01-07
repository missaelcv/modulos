# Modulos-mcv

Compatibility Note
Vue does not support IE8 and below, because it uses ECMAScript 5 features that are un-shimmable in IE8. However it supports all ECMAScript 5 compliant browsers.

## Project setup
```
npm install vue
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Start the project from cmd
```
vue ui
```
### To help with that.
Vuex allows us to divide our store into modules. Each module can contain its own state, mutations, actions, getters, and even nested modules - it's fractal all the way down:

const moduleA = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

### Import the modules files after creating the modules.js
import tareas from '../modules/tareas'
import contador from '../modules/contador'

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
