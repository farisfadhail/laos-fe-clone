<template>
  <div :data-theme="theme">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: import.meta.env.VITE_THEME || "light",
    };
  },
  components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");

#app {
  font-family: "Poppins", sans-serif;
  text-align: center;
}
</style>
