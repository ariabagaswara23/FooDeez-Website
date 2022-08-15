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
          <div class="food-menu-item" v-for="i in 8" :key="i">
            <img class="food-img" src="../assets/hero.jpg" alt="">
            <div class="food-content">
              <h2 class="food-title">Ayam Geprek</h2>
              <p class="food-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
                dignissimos officia ipsa neque illo recusandae.</p>
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
export default {
  name: 'Home',
  components: {
    Hero
  }
}
</script>

<style lang="scss" scoped>
@import "./../scss/_responsive.scss";
@import "./../scss/_variables.scss";
</style>
