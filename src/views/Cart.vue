<template>
  <div class="container flex pt-15 pb-15">
    <div class="cart-container">
      <div class="cart-title rounded">
        <h1>Your Cart</h1>
      </div>
      <div v-if="cartCount >= 1">
        <div class="flex cart-item rounded" v-for="item in cart" :key="item.food.idMeal">
          <img class="image-food rounded" :src="item.food.strMealThumb" alt />
          <div class="ml-2" style="text-align: start;">
            <p>{{ item.food.strMeal }}</p>
            <h4>Rp.{{ moneyFormat(20000) }}</h4>
          </div>
          <div class="cart-content">
            <button class="cart-button bg-primary rounded" @click.prevent="increaseCartQuantity(item)">
              <font-awesome-icon icon="fa-solid fa-plus" />
            </button>
            <input type="number" :value="item.quantity" disabled style="width:40px; text-align:center;" />
            <button class="cart-button bg-primary rounded" @click.prevent="decreaseCartQuantity(item)">
              <font-awesome-icon icon="fa-solid fa-minus" />
            </button>
            <button class="cart-delete-button rounded ml-3" @click.prevent="removeFoodFromCart(item.food)">
              <font-awesome-icon icon="fa-solid fa-trash" />
            </button>
          </div>
        </div>
      </div>
      <div class="center mt-5" v-else>
        <img src="../assets/not-found.png" class="img-not-found" />
        <h2 class="text-not-found">Oops, looks like you haven't added any food to the cart</h2>
        <router-link :to="{ name: 'menu' }" class="empty-cart-button bg-primary rounded">
          BACK TO MENU
        </router-link>
      </div>
    </div>
    <div class="cart-summary rounded">
      <h1>Order Summary</h1>
      <div class="flex justify-between mt-2">
        <p>Cost Total ({{ cartCount }})</p>
        <p>Rp.{{ moneyFormat(orderSummary * 20000) }}</p>
      </div>
      <div class="flex summary-total justify-between mt-2 mb-2">
        <p>Cost Total</p>
        <p>Rp.{{ moneyFormat(orderSummary * 20000) }}</p>
      </div>
      <router-link :to="{ name: 'checkout' }" class="bg-primary center summary-button rounded">Checkout</router-link>
    </div>
  </div>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Swal from 'sweetalert2'
export default {
  name: 'Cart',
  setup() {
    const store = useStore()

    const cart = computed(() => {
      return store.state.cart.cart
    })

    const cartCount = computed(() => {
      return store.getters['cart/cartCount']
    })
    const orderSummary = computed(() => {
      return store.getters['cart/orderSummary']
    })

    const removeFoodFromCart = (item) => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          store.dispatch('cart/removeFoodFromCart', item)
          Swal.fire(
            'Deleted!',
            'Food has been deleted from your cart.',
            'success'
          )
        }
      })
    }
    const increaseCartQuantity = (item) => {
      store.dispatch('cart/increaseCartQuantity', {
        food: item.food,
        quantity: 1
      })
    }
    const decreaseCartQuantity = (item) => {
      if (item.quantity !== 1) {
        store.dispatch('cart/decreaseCartQuantity', {
          food: item.food,
          quantity: 1
        })
      }
    }

    return {
      cart,
      cartCount,
      orderSummary,
      removeFoodFromCart,
      increaseCartQuantity,
      decreaseCartQuantity
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./../scss/_responsive.scss";
@import "./../scss/_variables.scss";

.container {
  min-height: 100vh;

  &.flex {
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .cart-container {
    margin: 10px 5px;
    width: 100%;

    @include tablet {
      width: calc(70% - 10px);
    }

    .empty-cart-button {
      padding: 15px;
      margin-top: 10px;
      display: inline-block;
      color: $white-color;
    }

    .cart-item {
      margin: 15px 0px;
      padding: 10px;
      position: relative;
      min-height: 100px;
      align-items: center;
      background-color: $white-color;
      box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;

      .image-food {
        width: 75px;
        height: 75px;
        object-fit: cover;
      }

      .cart-content {
        margin-left: auto;
        margin-top: 10px;
        margin-bottom: 10px;

        @include tablet {
          margin-top: 0;
          margin-bottom: 0;
        }

        .cart-delete-button {
          background-color: $red-color;
          color: $white-color;
          border: 0;

          &:hover {
            background: #cc1717;
          }

          &:focus {
            background: #cc1717;
            outline: 2px solid #cc1717;
          }
        }
      }

      .cart-button {
        transition: 0.5s;
        color: $white-color;
        border: 0;

        &:hover {
          background: $brand-secondary-color;
        }

        &:focus {
          background: $brand-secondary-color;
          outline: 2px solid $brand-secondary-color;
        }
      }
    }

    .cart-title {
      padding: 10px;
      text-align: start;
      width: 100%;
      background-color: $tertiary-color;
      color: $brand-secondary-color;
    }
  }

  .cart-summary {
    padding: 10px;
    margin: 10px 5px;
    width: 100%;
    background-color: $tertiary-color;
    color: $brand-secondary-color;

    @include tablet {
      width: calc(30% - 10px);
    }

    .summary-total {
      border-top: 1px solid #2b2b2b;
      padding-top: 10px;
    }

    .summary-button {
      transition: 0.5s;
      padding: 10px 20px;
      color: $white-color;
      font-size: 1rem;
      width: 100%;
      display: inline-block;
      font-weight: bold;
      border: 0;

      &:hover {
        background: $brand-secondary-color;
      }

      &:focus {
        background: $brand-secondary-color;
        outline: 2px solid $brand-secondary-color;
      }
    }
  }
}
</style>
