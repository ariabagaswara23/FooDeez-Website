<template>
  <div class="menu">
    <div class="container mt-15 mb-15">
      <div class="food-menu-wrapper">
        <h1 class="content-title">Menu</h1>
        <p class="content-sub-title">Explore foods you want</p>
        <div class="food-menu-list grid">
          <div class="food-menu-item" v-for="i in 16" :key="i">
            <img class="food-img" src="../assets/hero.jpg" alt="">
            <div class="food-content">
              <h2 class="food-title">Ayam Geprek</h2>
              <p class="food-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button class="add-to-cart-button">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Menu',
}
</script>
<style lang="scss" scoped>
@import "./../scss/_responsive.scss";
@import "./../scss/_variables.scss";
</style>
