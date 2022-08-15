<template>
  <div class="home">
    <Hero />
    <div class="container" id="page-content">
      <div class="food-menu-wrapper">
        <h1 class="content-title">Search foods you want to eat</h1>
        <div class="food-menu-list grid">
          <div class="food-menu-item">
            <img class="food-img" src="../assets/hero.jpg" alt="">
            <div class="food-content">
              <h2 class="food-title">Ayam Geprek</h2>
              <p class="food-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
                dignissimos officia ipsa neque illo recusandae.</p>
            </div>
          </div>
          <div class="food-menu-item">
            <img class="food-img" src="../assets/hero.jpg" alt="">
            <div class="food-content">
              <h2 class="food-title">Ayam Geprek</h2>
              <p class="food-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
                dignissimos officia ipsa neque illo recusandae.</p>
            </div>
          </div>
          <div class="food-menu-item">
            <img class="food-img" src="../assets/hero.jpg" alt="">
            <div class="food-content">
              <h2 class="food-title">Ayam Geprek</h2>
              <p class="food-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
                dignissimos officia ipsa neque illo recusandae.</p>
            </div>
          </div>
          <div class="food-menu-item">
            <img class="food-img" src="../assets/hero.jpg" alt="">
            <div class="food-content">
              <h2 class="food-title">Ayam Geprek</h2>
              <p class="food-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
                dignissimos officia ipsa neque illo recusandae.</p>
            </div>
          </div>
        </div>
        <button class="more-button">
          See More
        </button>
        <!-- <router-link>

        </router-link> -->
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

.content-title {
  color: $primary-color;
  padding: 1rem;
  text-align: center;
}

.food-menu-wrapper {
  margin-top: 2rem;
  margin-bottom: 2rem;


  .food-menu-item {
    background-color: $white-color;
    border: 0;
    border-radius: 15px;
    padding: 15px 20px;
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;

    .food-img {
      width: 100%;
      height: 200px;
      border-radius: 15px;
      object-fit: cover;
    }

    .food-content {
      padding: 10px 0px;

      .food-title {
        color: $primary-color;
        margin-bottom: 10px;
      }

      .food-description {
        color: $tertiary-color;
      }
    }
  }

  .more-button {
    padding: 5px 15px;
    border: 0;
    border-radius: 10px;
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;
    background-color: $brand-secondary-color;
    color: $white-color;
    transition: 0.5s;

    &:focus {
      background: $brand-secondary-color;
      color: $white-color;
      outline: 2px solid $brand-secondary-color;
    }

    &:hover {
      background: $primary-color;
      color: $white-color;
    }
  }
}
</style>
