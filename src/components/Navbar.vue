<template lang="">
  <header>
    <nav class="navbar-bg-primary" id="drawer">
      <p class="brand-title"><i>FOO<span>DEEZ</span></i></p>
      <ul class="menu-desktop">
        <li class="nav-item">
          <router-link :to="{ name: 'home' }">Home</router-link>
        </li>
        <li class="nav-item ml-3 mr-3">
          <router-link :to="'menu'">Menu</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'gallery'">Gallery</router-link>
        </li>
      </ul>
      <ul class="menu-desktop">
        <li class="nav-item mr-5" id="dropdown">
          <router-link :to="'cart'">Cart</router-link>
        </li>
      </ul>
      <a @click="toggle" id="hamburger" class="mr-1" aria-label="Hamburger">☰</a>
    </nav>
    <ul ref="mobileMenu" class="menu-mobile pt-8">
            <li class="nav-item">
                <router-link :to="{ name: 'home' }">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="'menu'">Menu</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="'gallery'">Gallery</router-link>
            </li>
            <li class="nav-item" id="dropdown">
                <router-link :to="'cart'">Cart</router-link>
            </li>
      </ul>
  </header>
</template>
<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex'

export default {
  name: 'Navbar',
  setup() {
    const store = useStore()
    const mobileMenu = ref(null);
    const cartCount = computed(() => {
      return store.getters['cart/cartCount']
    })
    const toggle = () => {
      mobileMenu.value.classList.toggle("show-mobile-menu");
    }
    return {
      cartCount,
      mobileMenu,
      toggle
    }
  },
}
</script>
<style lang="scss" scoped>
@import "./../scss/_responsive.scss";
@import "./../scss/_variables.scss";

nav {
  display: flex;
  width: 100%;
  top: 0;
  position: fixed;
  color: $white-color;
  justify-content: space-between;
  align-items: center;
  transition: background-color 1s ease;
  z-index: 10;

  .nav-item a {
    transition: 0.5s;

    &:focus {
      color: $brand-secondary-color;
    }

    &:hover {
      color: $brand-secondary-color;
    }
  }

  @include tablet {
    // background-color: transparent;

  }

  .brand-title {
    font-weight: bold;
    font-size: 21px;
    color: $primary-color;

    span {
      color: $brand-secondary-color;
    }
  }

  ul {
    &.menu-desktop {
      display: none;
    }

    margin-left: auto;
    list-style: none;
    flex-direction: column;

    @include tablet {
      &.menu-desktop {
        display: flex;
        flex-direction: row;
      }
    }

    li {
      a {
        color: $white-color;
      }
    }
  }

  #hamburger {
    font-size: 30px;
    color: $white-color;

    @include tablet {
      display: none;
    }
  }
}

.menu-mobile {
  position: fixed;
  top: 0;
  list-style: none;
  width: 100%;
  background-color: $navbar-background-color;
  transform: translate(0, -200px);
  z-index: 2;

  @include tablet {
    display: none;

  }

  li {
    a {
      position: relative;
      color: $white-color;
      display: inline-block;
    }

    .badge {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: -8px;
      right: 30px;
      font-size: 12px;
      width: 20px;
      height: 20px;
      z-index: 10;
      border-radius: 50%;
      background-color: $red-color;
      color: $white-color;
    }
  }
}

.show-mobile-menu {
  transform: translate(0, 50px);
}
</style>
