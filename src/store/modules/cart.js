const cart = {
  namespaced: true,

  state: {
    cart: [],
  },
  getters: {
    cartCount(state) {
      return state.cart.length
    },
    orderSummary(state) {
      const orderSummaryCart = state.cart.map(food => {
        return food.quantity
      }).reduce((prev, curr) => prev + curr, 0);
      return orderSummaryCart;
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
    REMOVE_FOOD_FROM_CART(state, food) {
      state.cart = state.cart.filter(item => {
        return item.food.idMeal !== food.idMeal
      })
    },
    INCREASE_CART_QUANTITY(state, { food, quantity }) {
      let foodInCart = state.cart.find(item => {
        return item.food.idMeal === food.idMeal
      })
      foodInCart.quantity += quantity
    },
    DECREASE_CART_QUANTITY(state, { food, quantity }) {
      let foodInCart = state.cart.find(item => {
        return item.food.idMeal === food.idMeal
      })
      foodInCart.quantity -= quantity
    },
    CLEAR_CART(state) {
      state.cart = [];
    },
  },
  actions: {
    addFoodToCart({ commit }, { food, quantity }) {
      commit('ADD_FOOD_TO_CART', { food, quantity })
    },
    removeFoodFromCart({ commit }, food) {
      commit('REMOVE_FOOD_FROM_CART', food)
    },
    increaseCartQuantity({ commit }, { food, quantity }) {
      commit('INCREASE_CART_QUANTITY', { food, quantity })
    },
    decreaseCartQuantity({ commit }, { food, quantity }) {
      commit('DECREASE_CART_QUANTITY', { food, quantity })
    },
    clearCart({ commit }) {
      commit('CLEAR_CART')
    },
  }
}

export default cart
