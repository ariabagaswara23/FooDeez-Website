import Api from '../../data/Api'

const menu = {
  namespaced: true,

  state: {
    foods: [],
  },
  getters: {

  },
  mutations: {
    GET_FOODS(state, foods) {
      state.foods = foods;
    },
  },
  actions: {
    fetchFoods({ commit }, category) {
      Api.get(`/filter.php?c=${category}`)
        .then(response => {
          commit('GET_FOODS', response.data.meals);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}

export default menu
