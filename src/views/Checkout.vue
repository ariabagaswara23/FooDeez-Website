<template>
  <div class="container flex pt-15 pb-15">
    <div class="checkout-container">
      <div class="checkout-title rounded">
        <h1>Checkout</h1>
      </div>
      <div class="checkout-form">
        <div class="flex">
          <div class="form-group name">
            <input class="rounded mt-1" type="text" required name="name" id="name" v-model="state.name"
              placeholder="Full Name" />
            <div v-if="validation.name" class="text-danger" style="margin-top: 5px;">Please Insert Name</div>
          </div>
          <div class="form-group phone">
            <input class="rounded mt-1" type="number" required name="phone" id="phone" v-model="state.phone"
              placeholder="Phone Number" />
            <div v-if="validation.phone" class="text-danger" style="margin-top: 5px;">Please Insert Phone Number</div>
          </div>
          <div class="form-group city">
            <select class="rounded mt-1" name="city" required id="city" v-model="state.city" @change="onChange($event)">
              <option value="">Select City</option>
              <option value="cimahi">Cimahi</option>
              <option value="bandung">Bandung</option>
              <option value="jakarta">Jakarta</option>
              <option value="palembang">Palembang</option>
              <option value="medan">Medan</option>
            </select>
            <div v-if="validation.city" class="text-danger" style="margin-top: 5px;">Please Insert City</div>
          </div>
          <div class="form-group zipcode">

            <input class="rounded mt-1" type="number" required name="zipcode" id="zip" v-model="state.zipcode"
              placeholder="Zip Code" />
            <div v-if="validation.zipcode" class="text-danger" style="margin-top: 5px;">Please Insert ZipCode</div>
          </div>
        </div>
        <div class="form-group mt-1">
          <textarea class="rounded mt-1" name="address" required id="address" rows="4" v-model="state.address"
            placeholder="Address"></textarea>
          <div v-if="validation.address" class="text-danger">Please Insert Address</div>
        </div>
      </div>
    </div>
    <div class="checkout-summary rounded">
      <h1>Order Summary</h1>
      <div class="flex justify-between mt-2">
        <p>Cost ({{ cartCount }})</p>
        <p>Rp.{{ moneyFormat(orderSummary * 20000) }}</p>
      </div>
      <div class="flex justify-between mt-2">
        <p>Delivery Cost ({{ cartCount }})</p>
        <p>Rp.{{ moneyFormat(price) }}</p>
      </div>
      <div class="flex summary-total justify-between mt-2 mb-2">
        <p>Cost Total</p>
        <p>Rp.{{ moneyFormat((orderSummary * 20000) + price) }}</p>
      </div>
      <button @click="checkout" class="bg-primary center summary-button rounded">Pay Now</button>
      <!-- <router-link :to="{ name: 'checkout' }" class="bg-primary center summary-button rounded">Checkout</router-link> -->
    </div>
  </div>
</template>
<script>
import { computed, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

export default {
  name: 'Checkout',
  setup() {
    const store = useStore()

    const router = useRouter()

    const cartCount = computed(() => {
      return store.getters['cart/cartCount']
    })
    const orderSummary = computed(() => {
      return store.getters['cart/orderSummary']
    })

    const state = reactive({
      name: '',
      phone: '',
      city: '',
      zipcode: '',
      address: '',
    })
    const price = ref(0)
    const validation = reactive({
      name: false,
      phone: false,
      city: false,
      zipcode: false,
      address: false
    })
    const onChange = (event) => {
      if (event.target.value === "cimahi") {
        price.value = 5000;
      } else if (event.target.value === "bandung") {
        price.value = 7000;
      } else if (event.target.value === "jakarta") {
        price.value = 20000;
      } else if (event.target.value === "palembang") {
        price.value = 40000;
      } else if (event.target.value === "medan") {
        price.value = 70000;
      }
      return price;
    }
    const checkout = () => {
      if (state.name && state.phone && state.address && state.city && state.zipcode) {
        store.dispatch('cart/clearCart')
        router.push({
          name: 'home',
        })
        Swal.fire({
          title: "Checkout Success!",
          text: "Your Order will be processed",
          icon: "success",
          showConfirmButton: false,
          timer: 2000
        });
      }
      if (!state.name) {
        validation.name = true
      }
      if (!state.phone) {
        validation.phone = true
      }
      if (!state.city) {
        validation.city = true
      }
      if (!state.zipcode) {
        validation.zipcode = true
      }
      if (!state.address) {
        validation.address = true
      }
    }
    return {
      cartCount,
      orderSummary,
      state,
      price,
      validation,
      onChange,
      checkout
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

  .checkout-container {
    margin: 10px 5px;
    width: 100%;
    background-color: $white-color;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

    @include tablet {
      width: calc(70% - 10px);
    }

    .checkout-form {
      padding: 10px;
    }

    .flex {
      &>* {
        margin: 10px 5px;
      }
    }

    .form-group {
      .text-danger {
        color: #e61919;
        font-size: 0.8rem;
      }

      &.name {
        width: 100%;

        @include tablet {
          width: calc(50% - 10px);
        }
      }

      &.phone {
        width: 100%;

        @include tablet {
          width: calc(50% - 10px);
        }
      }

      &.city {
        width: 100%;

        @include tablet {
          width: calc(50% - 10px);
        }

        select {
          width: 100%;
        }
      }

      &.zipcode {
        width: 100%;

        @include tablet {
          width: calc(50% - 10px);
        }
      }

      textarea {
        width: 100%;
      }
    }

    input,
    textarea,
    select {
      padding: 0.5rem;
      width: 100%;
      border: 1px solid rgba(49, 53, 59, 0.96);

      &:focus {
        outline: 2px solid $primary-color;
        border: 0;
      }
    }

    .checkout-title {
      padding: 10px;
      text-align: start;
      width: 100%;
      background-color: $tertiary-color;
      color: $brand-secondary-color;
    }
  }

  .checkout-summary {
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
