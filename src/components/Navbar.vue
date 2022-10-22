<template>
  <div
    class="navbar__container"
    :class="{ 'is-hidden': !showNavbar }"
    id="navbar"
  >
    <div class="navbar container mx-auto">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a>Item 1</a></li>
            <li tabindex="0">
              <a class="justify-between">
                Parent
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                  />
                </svg>
              </a>
              <ul class="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <router-link
          to="/"
          class="text-lg flex items-center text-primary font-semibold"
        >
          <img alt="Laos logo" src="../assets/logo.png" class="w-9 h-9 mr-2" />
          {{ title }}
        </router-link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0 font-semibold">
          <li v-for="menu in menus" :key="'menu-' + menu.title">
            <router-link :to="menu.route" class="text-[#BDBDBD]">{{
              menu.title
            }}</router-link>
          </li>
          <!-- <li tabindex="0">
            <a>
              Parent
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                />
              </svg>
            </a>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li> -->
        </ul>
      </div>
      <div class="navbar-end">
        <router-link
          to="/login"
          class="btn btn-outline btn-primary font-medium py-2 px-5 rounded-xl"
          >Login</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import CONST from "@/const.js";

export default {
  name: "Navbar",
  data() {
    return {
      title: CONST.title,
      menus: CONST.menus,
      showNavbar: true,
      lastScrollPosition: 0,
      scrollOffset: 40,
    };
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    this.scrollOffset = document.getElementById("navbar").offsetHeight;
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    // Toggle if navigation is shown or hidden
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (
        Math.abs(window.pageYOffset - this.lastScrollPosition) <
        this.scrollOffset
      ) {
        return;
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },
  },
};
</script>

<style scoped>
.navbar__container {
  @apply w-full bg-white py-3 fixed z-10;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transform: translateY(0);
  transition: transform 200ms linear;
}
.navbar__container.is-hidden {
  transform: translateY(-100%);
}
.menu .router-link-exact-active {
  color: #2dcc70;
}
</style>
