import Api from '../../data/Api'

const home = {
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
    fetchFoods({ commit }, area) {
      Api.get(`/filter.php?a=${area}`)
        .then(response => {
          commit('GET_FOODS', response.data.meals);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}

export default home
