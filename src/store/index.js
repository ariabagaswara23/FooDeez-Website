import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import home from './modules/home'
import menu from './modules/menu'
import cart from './modules/cart'

const cartState = createPersistedState({ paths: ['cart'] })

export default createStore({
  modules: {
    home,
    menu,
    cart,
  },
  plugins: [cartState]
})
