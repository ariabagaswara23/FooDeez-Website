<template>
  <div class="home">
    <Hero />
    <div class="container" id="page-content">
      <div class="food-menu-wrapper">
        <h1 class="content-title">Search foods you want to eat</h1>
        <p class="content-sub-title">
          You can find a lot of foods here
        </p>
        <div class="food-menu-list grid">
          <div class="food-menu-item" v-for="food in foods.slice(0, 8)" :key="food.idMeal">
            <img class="food-img" :src="food.strMealThumb" alt="">
            <div class="food-content">
              <h2 class="food-title">{{ food.strMeal }}</h2>
            </div>
          </div>
        </div>
        <router-link :to="{ name: 'menu' }">
          <button class="more-button">
            See More
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "../components/Hero.vue"
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'Home',
  components: {
    Hero
  },
  setup() {
    const store = useStore()

    onMounted(() => {
      store.dispatch('home/fetchFoods', 'Japanese')
    })
    const foods = computed(() => {
      return store.state.home.foods
    })
    return {
      foods
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./../scss/_responsive.scss";
@import "./../scss/_variables.scss";
</style>
