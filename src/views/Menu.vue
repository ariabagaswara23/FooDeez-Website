<template>
  <div class="menu">
    <div class="container mt-15 mb-15">
      <div class="food-menu-wrapper">
        <h1 class="content-title">Menu</h1>
        <p class="content-sub-title">Explore foods you want</p>
        <div class="flex justify-center select-category mt-3 p-1">
          <select class="p-1 rounded" @change="onChange($event)">
            <option value="beef">Beef</option>
            <option value="chicken">Chicken</option>
            <option value="dessert">Dessert</option>
            <option value="lamb">Lamb</option>
            <option value="miscellaneous">Miscellaneous</option>
            <option value="pasta">Pasta</option>
          </select>
          <input type="text" class="p-1 rounded" placeholder="Search foods...." v-model="searchFood" />
        </div>
        <div class="food-menu-list grid" v-if="filteredFood.length >= 1">
          <div class="food-menu-item" v-for="food in filteredFood" :key="food.idMeal">
            <img class="food-img" :src="food.strMealThumb" alt="">
            <div class="food-content">
              <h2 class="food-title">{{ food.strMeal }}</h2>
              <button class="add-to-cart-button" @click.prevent="addToCart(food)">
                <font-awesome-icon icon="fa-solid fa-cart-plus" /> Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div class="center mt-5" v-else>
          <img src="../assets/not-found.png" class="img-not-found" />
          <h2 class="text-not-found">Oops, looks like the food you are looking for is not available</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from 'vuex'
import { computed, onMounted, ref } from 'vue'
import Swal from 'sweetalert2'


export default {
  name: 'Menu',
  setup() {
    const store = useStore()
    const searchFood = ref('')
    onMounted(() => {
      store.dispatch('menu/fetchFoods', 'beef')
    })
    const foods = computed(() => {
      return store.state.menu.foods
    })
    const filteredFood = computed(() => {
      return foods.value.filter(food => food.strMeal.toLowerCase().includes(searchFood.value.toLowerCase()))
    })
    const onChange = (event) => {
      if (event.target.value === "beef") {
        store.dispatch('menu/fetchFoods', 'beef')
      } else if (event.target.value === "chicken") {
        store.dispatch('menu/fetchFoods', 'chicken')
      } else if (event.target.value === "dessert") {
        store.dispatch('menu/fetchFoods', 'dessert')
      } else if (event.target.value === "lamb") {
        store.dispatch('menu/fetchFoods', 'lamb')
      } else if (event.target.value === "miscellaneous") {
        store.dispatch('menu/fetchFoods', 'miscellaneous')
      } else if (event.target.value === "pasta") {
        store.dispatch('menu/fetchFoods', 'pasta')
      }
    }

    const addToCart = (food) => {
      store.dispatch('cart/addFoodToCart', {
        food,
        quantity: 1
      })
      Swal.fire({
        title: "Success",
        icon: "success",
        text: "Success Add Food to Cart",
        showConfirmButton: false,
        timer: 1500
      });
    }

    return {
      searchFood,
      foods,
      filteredFood,
      onChange,
      addToCart
    }

  }
}
</script>
<style lang="scss" scoped>
@import "./../scss/_responsive.scss";
@import "./../scss/_variables.scss";

.select-category {

  select {
    max-width: 120px;
    margin-right: 5px;
    padding: 15px;
  }

  input {
    width: 50%;
  }
}

.food-title {
  height: 60px !important;
  font-size: 1.2rem;

  @include tablet {
    height: 110px !important;
    font-size: 1.25rem;
  }
}
</style>
