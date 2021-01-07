import Vue from 'vue'
import Vuex from 'vuex'

import tareas from '../modules/tareas'
import contador from '../modules/contador'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    titulo : 'Desde store.js'
  },
  mutations: {
  },
  actions: {
   
  },
  modules:
  {
    tareas, contador
  }
  
})
