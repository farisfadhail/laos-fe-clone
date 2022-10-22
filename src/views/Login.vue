<template>
  <Navbar />
  <section class="w-full min-h-screen bg-primary px-6 md:px-[85px] py-24">
    <div
      class="bg-white w-full md:w-[600px] flex flex-col py-12 px-8 md:px-16 gap-2 rounded-xl shadow-md"
    >
      <p class="text-start">Selamat datang kembali!</p>
      <h2 class="text-start text-[56px] text-black font-bold mb-2">Sign In</h2>
      <div
        class="input-group flex flex-col text-start text-black text-sm font-light gap-2 mb-2"
      >
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="test1@gmail.com"
          class="bg-[#FFF7DE] py-3 px-5 rounded-sm text-black placeholder:text-gray-400"
          v-model="user.email"
        />
      </div>
      <div
        class="input-group flex flex-col text-start text-black text-sm font-light gap-2"
      >
        <div class="flex justify-between">
          <label for="password">Password</label>
          <p class="text-gray-400">forgot password?</p>
        </div>
        <div
          class="bg-[#FFF7DE] py-3 px-5 rounded-sm focus-within:border-[2.5px] border-black flex justify-between"
        >
          <input
            :type="[showPass ? 'text' : 'password']"
            name="password"
            id="password"
            placeholder="password123"
            class="bg-[#FFF7DE] text-black outline-none placeholder:text-gray-400 w-5/6"
            v-model="user.password"
          />
          <svg
            v-if="showPass"
            @click="showPass = false"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-eye cursor-pointer"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
            />
            <path
              d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
            />
          </svg>
          <svg
            v-if="!showPass"
            @click="showPass = true"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-eye-slash cursor-pointer"
            viewBox="0 0 16 16"
          >
            <path
              d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"
            />
            <path
              d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"
            />
            <path
              d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"
            />
          </svg>
        </div>
      </div>
      <div class="flex justify-center mt-6">
        <button
          class="bg-primary text-white py-2 px-6 flex items-center gap-3"
          @click="signIn()"
          style="border-radius: 40px"
        >
          <p>SIGN IN</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3.56224 13.4062H17.7466L14.3646 9.11719C14.2685 8.99531 14.3552 8.8125 14.5122 8.8125H16.031C16.2607 8.8125 16.4787 8.91797 16.6193 9.09844L20.463 13.9734C20.8497 14.4656 20.5005 15.1875 19.8747 15.1875H3.56224C3.45912 15.1875 3.37474 15.1031 3.37474 15V13.5938C3.37474 13.4906 3.45912 13.4062 3.56224 13.4062Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div class="flex gap-2 justify-center mt-4">
        <p>Belum punya akun?</p>
        <router-link to="/register"
          ><p class="text-primary font-medium">Sign Up</p></router-link
        >
      </div>
    </div>
    <img
      src="../assets/human-illustration.png"
      alt="ilustrasi"
      class="absolute top-32 right-8 hidden md:block"
    />
  </section>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "Login",
  components: {
    Navbar,
  },
  data() {
    return {
      showPass: false,
      user: {},
    };
  },
  methods: {
    signIn() {
      console.log(this.user);
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
