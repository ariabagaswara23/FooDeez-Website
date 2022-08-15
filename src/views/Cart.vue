<template>
  <div class="container flex mt-15 mb-15">
    <div class="cart-container">
      <div class="cart-title rounded">
        <h1>Your Cart</h1>
      </div>
      <div class="flex cart-item rounded" v-for="i in 4" :key="i">
        <img class="image-food rounded" src="../assets/image-1.jpg" alt />
        <div class="ml-2">
          <p>Ayam Geprek</p>
          <h4>Rp.15000</h4>
        </div>
        <div class="cart-content">
          <button class="cart-button bg-primary rounded">
            <font-awesome-icon icon="fa-solid fa-plus" />
          </button>
          <input type="number" value="1" disabled style="width:40px; text-align:center;" />
          <button class="cart-button bg-primary rounded">
            <font-awesome-icon icon="fa-solid fa-minus" />
          </button>
          <button class="cart-delete-button rounded ml-3">
            <font-awesome-icon icon="fa-solid fa-trash" />
          </button>
        </div>
      </div>
    </div>
    <div class="cart-summary rounded">
      <h1>Order Summary</h1>
      <div class="flex justify-between mt-2">
        <p>Total Harga (3 barang)</p>
        <p>Rp. 100.000</p>
      </div>
      <div class="flex summary-total justify-between mt-2 mb-2">
        <p>Total Harga</p>
        <p>Rp. 100.000</p>
      </div>
      <router-link :to="{ name: 'checkout' }" class="bg-primary center summary-button rounded">Checkout</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Cart',
}
</script>
<style lang="scss" scoped>
@import "./../scss/_responsive.scss";
@import "./../scss/_variables.scss";

.container {
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
