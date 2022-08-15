<template>
  <div class="container flex mt-15 mb-15">
    <div class="checkout-container">
      <div class="checkout-title rounded">
        <h1>Checkout</h1>
      </div>
      <div class="checkout-form">
        <div class="flex">
          <div class="form-group name">
            <label for="name">Nama</label>
            <input class="rounded mt-1" type="text" required name="name" id="name" />
            <!-- <div v-if="validation.name" class="text-danger" style="margin-top: 5px;">Masukkan Nama Lengkap</div> -->
          </div>
          <div class="form-group phone">
            <label for="phone">No. Telepon</label>
            <input class="rounded mt-1" type="number" required name="phone" id="phone" />
            <!-- <div v-if="validation.phone" class="text-danger" style="margin-top: 5px;">Masukkan No. Telepon</div> -->
          </div>
          <div class="form-group city">
            <label for="city">Kota</label>
            <select class="rounded mt-1" name="city" required id="city">
              <option value="cimahi">Cimahi</option>
              <option value="bandung">Bandung</option>
              <option value="jakarta">Jakarta</option>
              <option value="bekasi">Bekasi</option>
            </select>
            <!-- <div v-if="validation.city" class="text-danger" style="margin-top: 5px;">Masukkan Kota</div> -->
          </div>
          <div class="form-group zipcode">
            <label for="zipcode">Kode POS</label>
            <input class="rounded mt-1" type="number" required name="zipcode" id="zip" />
            <!-- <div v-if="validation.zipcode" class="text-danger" style="margin-top: 5px;">Masukkan Kode POS</div> -->
          </div>
        </div>
        <div class="form-group mt-1">
          <label for="address">Alamat</label>
          <textarea class="rounded mt-1" name="address" required id="address" rows="4"></textarea>
          <!-- <div v-if="validation.address" class="text-danger">Masukkan Alamat</div> -->
        </div>
      </div>
    </div>
    <div class="checkout-summary rounded">
      <h1>Order Summary</h1>
      <div class="flex justify-between mt-2">
        <p>Total Harga (3 barang)</p>
        <p>Rp. 100.000</p>
      </div>
      <div class="flex justify-between mt-2">
        <p>Ongkos Kirim (3 barang)</p>
        <p>Rp. 100.000</p>
      </div>
      <div class="flex summary-total justify-between mt-2 mb-2">
        <p>Total Harga</p>
        <p>Rp. 100.000</p>
      </div>
      <!-- <router-link :to="{ name: 'checkout' }" class="bg-primary center summary-button rounded">Checkout</router-link> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'Checkout'
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
