const cart = {
  namespaced: true,

  state: {
    cart: [],
  },
  getters: {
    cartCount(state) {
      return state.cart.length
    },
  },
  mutations: {
    ADD_FOOD_TO_CART(state, { food, quantity }) {
      let foodInCart = state.cart.find(item => {
        return item.food.idMeal === food.idMeal
      })
      if (foodInCart) {
        foodInCart.quantity += quantity
        return;
      }
      state.cart.push({
        food,
        quantity
      })
    },
  },
  actions: {
    addFoodToCart({ commit }, { food, quantity }) {
      commit('ADD_FOOD_TO_CART', { food, quantity })
    },
  }
}

export default cart
