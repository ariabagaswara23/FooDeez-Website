import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import home from './modules/home'
import menu from './modules/menu'

export default createStore({
  modules: {
    home,
    menu,
  }
})
