<template>
  <Navbar />
  <section class="w-full flex flex-col gap-24 py-24">
    <div class="flex flex-col gap-6 px-12 md:px-[150px] mt-12">
      <h1 class="text-3xl text-black font-bold">OUR PROGRAM</h1>
      <p class="md:text-xl text-black">
        LAOS memiliki beberapa program kerja yang dilaksanakan untuk
        meningkatkan kompetensi mahasiswa fakultas ilmu komputer maupun
        masyarakat umum di bidang teknologi
      </p>
    </div>
    <div class="flex justify-center gap-24 px-[72px] flex-wrap">
      <CardProker :item="item" v-for="item in proker" :key="item.id" />
    </div>
  </section>
  <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import CardProker from "../components/CardProker.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Proker",
  components: {
    Navbar,
    CardProker,
    Footer,
  },
  data() {
    return {
      proker: [
        {
          title: "PERTEMUAN RUTIN",
          img: "../src/assets/proker-1.png",
        },
        {
          title: "PENGEMBANGAN PROJECT",
          img: "../src/assets/proker-2.png",
        },
        {
          title: "PELATIHAN CTF",
          img: "../src/assets/proker-3.png",
        },
        {
          title: "PELATIHAN GIT",
          img: "../src/assets/proker-4.png",
        },
        {
          title: "PELATIHAN LINUX",
          img: "../src/assets/proker-5.png",
        },
        {
          title: "PELATIHAN UI/UX",
          img: "../src/assets/proker-6.png",
        },
        {
          title: "LAOS ARENA",
          img: "../src/assets/proker-7.png",
        },
      ],
    };
  },
};
</script>
