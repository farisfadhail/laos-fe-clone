<template>
  <Navbar />
  <section class="hero">
    <div class="hero-content">
      <h1 class="title">Selamat Datang, Laosars!</h1>
      <p>
        UKM LAOS adalah unit kegiatan mahasiswa yang berfokus sebagai wadah
        untuk memajukan kreatifitas dalam pengembangan Linux dan Open Source di
        Fakultas Ilmu Komputer Universitas Jember.
      </p>
      <img src="../assets/saly.png" class="mx-auto lg:absolute w-1/2 -z-10" />
      <router-link to="/about" class="btn btn-secondary"
        >Yuk Cari Tau <font-awesome-icon icon="fas fa-arrow-right" class="pl-2"
      /></router-link>
    </div>
  </section>
  <section class="container mx-auto mb-16">
    <div class="section">
      <div class="header">
        <h2 class="title">Manfaat Laosars</h2>
        <p>
          Perkembangan digital ini adalah hal yang baik untuk pengusaha, semua
          orang mendapatkan hak yang sama dalam berkompetisi.
        </p>
      </div>
      <div class="content flex">
        <div class="item flex-col max-w-xs">
          <img
            src="../assets/trophy.png"
            alt="Trophy"
            class="mx-auto lg:mb-4"
          />
          <p class="title">Relasi</p>
          <p>
            Dapat menambah wawasan membuat terbebas dari permasalahan, relasi
            yang tepat bisa menemukan ide menyelesaikan masalah dan menambah
            pengalaman
          </p>
        </div>
        <div class="item flex-col max-w-xs">
          <img
            src="../assets/computer.png"
            alt="Computer"
            class="mx-auto lg:mb-4"
          />
          <p class="title">Bakat</p>
          <p>
            Meningkatkan dan mengembangkan potensi yang ada pada setiap
            mahasiswa secara optimal melalui berbagai kegiatan
          </p>
        </div>
        <div class="item flex-col max-w-xs">
          <img src="../assets/file.png" alt="File" class="mx-auto lg:mb-4" />
          <p class="title">Sertifikat</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- <section class="container mx-auto">
    <div class="section">
      <div class="header">
        <h2 class="title">Program Kerja</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </p>
      </div>
    </div>
  </section> -->
  <div class="flex justify-center">
    <div class="slider__container">
      <swiper
        v-if="prokers.length > 0"
        :slidesPerView="2"
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="h-full w-full"
      >
        <swiper-slide
          v-for="proker in prokers"
          class="relative"
          :key="'proker-' + proker.title"
        >
          <img
            :src="url.concat(`/${proker.poster}`)"
            class="absolute h-full w-full -z-10"
          />
          <!-- <p>{{ proker.content }}</p> -->
          <div v-html="proker.content" />
        </swiper-slide>
      </swiper>
      <div v-else class="px-2">
        <h2>Tidak ada proker untuk saat ini.</h2>
      </div>
    </div>
  </div>
  <section class="container mx-auto mb-16">
    <div class="section">
      <div class="header">
        <h2 class="title">Divisi Kami</h2>
        <p>Membangun dan menggerakan kegiatan UKM LAOS</p>
      </div>
      <!-- Desktop -->
      <div class="content hidden lg:flex">
        <div class="item flex-col lg:flex-row max-w-lg">
          <img
            src="../assets/humas.png"
            alt="Logo Humas"
            class="mx-auto lg:mr-4"
          />
          <div class="flex flex-col justify-center">
            <p class="title lg:text-left">Humas</p>
            <p class="lg:text-left">
              Divisi yang bertanggung jawab dalam perihal penyebaran informasi
              terutama di lingkup Fakultas Ilmu Komputer Univesitas Jember.
            </p>
          </div>
        </div>
        <div class="item flex-col lg:flex-row max-w-lg">
          <img
            src="../assets/pemrograman.png"
            alt="Logo Pemrograman"
            class="mx-auto lg:mr-4"
          />
          <div class="flex flex-col justify-center">
            <p class="title lg:text-left">Pemrograman</p>
            <p class="lg:text-left">
              Divisi yang berfokus pada pemrograman untuk mewujudkan tujuan dari
              UKM LAOS yaitu turut andil dalam menyebarkan open source.
            </p>
          </div>
        </div>
        <div class="item flex-col lg:flex-row max-w-lg">
          <img
            src="../assets/os.png"
            alt="Logo Os & Jaringan"
            class="mx-auto lg:mr-4"
          />
          <div class="flex flex-col justify-center">
            <p class="title lg:text-left">Os & Jaringan</p>
            <p class="lg:text-left">
              Divisi yang memberikan wawasan mengenai Linux, jaringan komputer
              (cloud computing), hingga keamanan siber.
            </p>
          </div>
        </div>
        <div class="item flex-col lg:flex-row max-w-lg">
          <img
            src="../assets/multimedia.png"
            alt="Logo Multimedia"
            class="mx-auto lg:mr-4"
          />
          <div class="flex flex-col justify-center">
            <p class="title lg:text-left">Multimedia</p>
            <p class="lg:text-left">
              Divisi yang berfokus pada bidang desain dan UI/UX dalam web maupun
              aplikasi serta mengelola poster yang di sebarkan di sosial media
              UKM LAOS.
            </p>
          </div>
        </div>
      </div>

      <!-- Mobile -->
      <div class="content flex lg:hidden">
        <div class="item flex-col lg:flex-row max-w-xs">
          <img
            src="../assets/humas.png"
            alt="Logo Humas"
            class="mx-auto lg:mr-4"
          />
          <p class="title">Humas</p>
          <p>
            Divisi yang bertanggung jawab dalam perihal penyebaran informasi
            terutama di lingkup Fakultas Ilmu Komputer Univesitas Jember.
          </p>
        </div>
        <div class="item flex-col lg:flex-row max-w-xs">
          <img
            src="../assets/pemrograman.png"
            alt="Logo Pemrograman"
            class="mx-auto lg:mr-4"
          />
          <p class="title">Pemrograman</p>
          <p>
            Divisi yang berfokus pada pemrograman untuk mewujudkan tujuan dari
            UKM LAOS yaitu turut andil dalam menyebarkan open source.
          </p>
        </div>
        <div class="item flex-col lg:flex-row max-w-xs">
          <img
            src="../assets/os.png"
            alt="Logo Os & Jaringan"
            class="mx-auto lg:mr-4"
          />
          <p class="title">Os & Jaringan</p>
          <p>
            Divisi yang memberikan wawasan mengenai Linux, jaringan komputer
            (cloud computing), hingga keamanan siber.
          </p>
        </div>
        <div class="item flex-col lg:flex-row max-w-xs">
          <img
            src="../assets/multimedia.png"
            alt="Logo Multimedia"
            class="mx-auto lg:mr-4"
          />
          <p class="title">Multimedia</p>
          <p>
            Divisi yang berfokus pada bidang desain dan UI/UX dalam web maupun
            aplikasi serta mengelola poster yang di sebarkan di sosial media UKM
            LAOS.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="container mx-auto mb-16">
    <div class="section">
      <div class="header">
        <h2 class="title">Projek Anggota dan Pengurus</h2>
        <p>Belajar bersama untuk meningkatkan keterampilan dan pengetahuan.</p>
      </div>
      <div class="grid grid-col-1 gap-4">
        <div class="project__container">
          <img src="../assets/golang.png" class="project__image" />
          <div class="w-full text-left">
            <h2 class="font-semibold text-black">
              Handika Catur Mahardika (Go-Blog)
              <a
                class="text-blue-600"
                href="https://github.com/handikacatur/go-blog"
                target="_blank"
                ><font-awesome-icon icon="fa-solid fa-link"
              /></a>
            </h2>
            <span class="text-gray-400">Sistem Informasi 192410101066</span>
            <p class="mt-4">
              Go merupakan bahasa yang dibuat oleh Google pada tahun 2009, dan
              blog yang dibuat oleh Handika ini menggunakan bahasa Go atau bisa
              juga disebut Golanguage. Selain performanya yang bisa dibilang
              cepat bahasa Go juga dikatakan mudah untuk dipelajari bagi pemula.
            </p>
          </div>
        </div>
        <div class="project__container">
          <img src="../assets/ai.jpg" class="project__image" />
          <div class="w-full text-left">
            <h2 class="font-semibold text-black">
              Handika Catur Mahardika (Covid Social Distancing)
              <a
                class="text-blue-600"
                href="https://github.com/handikacatur/covid19-social-distancing"
                target="_blank"
                ><font-awesome-icon icon="fa-solid fa-link"
              /></a>
            </h2>
            <span class="text-gray-400">Sistem Informasi 192410101066</span>
            <p class="mt-4">
              Perkembangan yang begitu pesat membuat banyak peneliti membuat
              sebuah algoritma yang membuat mesin komputer belajar sendiri yaitu
              machine learning. Pada project milik handika ini ia memakai
              machine learning untuk mengklasifikasi sebuah gambar apakah gambar
              tersebut ramai atau tidak ramai.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import CONSTANT from "@/const";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

import axios from "axios";

export default {
  name: "Homepage",
  components: {
    Swiper,
    SwiperSlide,
    Navbar,
    Footer,
  },
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
  data() {
    return {
      prokers: [],
      url: CONSTANT.apiUrl,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.getProker();
    });
  },
  methods: {
    async getProker() {
      try {
        const response = await axios.get(this.url.concat("/api/proker"));
        const { data } = response.data;
        if (!data.length > 0) {
          throw new Error("Data proker kosong");
        }

        this.prokers = data;
      } catch (error) {
        this.prokers = [];
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500&display=swap");

.hero {
  @apply h-screen p-4 lg:p-0;
}

.hero-content {
  @apply h-full relative bg-gradient-to-br from-[#2DCC70] rounded-3xl lg:rounded-none flex flex-col;
  align-items: flex-start !important;
  max-width: 100% !important;
  width: 100%;
}

.hero .title {
  @apply text-4xl lg:max-w-xl font-bold;
  line-height: 54px;
  text-align: left;
  color: #ffe595;
}

.hero p {
  @apply text-xs lg:text-sm lg:max-w-xl text-left;
  color: #fff;
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
}

.hero .btn {
  @apply text-primary w-full lg:w-auto;
  border-radius: 10px;
  text-transform: capitalize;
}

.section {
  @apply px-2 py-4;
}

.section .header {
  @apply my-16;
}

.section .header .title {
  @apply text-2xl lg:text-5xl mb-4;
  color: #000000;
  font-weight: 600;
}

.section p {
  @apply text-[10px] lg:text-sm;
  color: #000000;
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
}

.section .header p {
  @apply text-xs lg:text-sm max-w-3xl mx-auto;
}

.section .content {
  @apply flex-wrap justify-center lg:justify-around gap-12;
}

.section .content .item {
  @apply flex justify-center;
}

.section .content .item .title {
  @apply order-first lg:order-none lg:my-4 text-[20px] lg:text-3xl font-bold;
}

.section .content .item img {
  @apply my-4 lg:my-0;
  max-width: 200px;
}

.swiper-wrapper {
  margin-top: 2em;
}

.slider__container {
  @apply h-60 lg:h-96 bg-[#F8F8F8] rounded-3xl shadow-inner flex items-center justify-center lg:min-w-[50%];
  max-width: 1100px;
}

.swiper-slide {
  @apply max-h-72 rounded-3xl overflow-hidden;
  cursor: pointer;
  max-width: 470px;
  background: pink;
}

.swiper-slide img {
  object-fit: cover;
}

.swiper-slide p {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.41);
  bottom: 0;
  color: white;
  display: flex;
  height: 0;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  overflow: hidden;
  transition: 0.5s;
}

.swiper-slide:hover p {
  height: 30%;
}

.project__container {
  @apply shadow flex gap-4 text-black p-4;
}

.project__image {
  max-width: 240px;
  max-height: 240px;
}

@media (min-width: 1024px) {
  .hero-content {
    padding: 2rem !important; /* 32px */
  }

  .hero .title {
    font-size: 4rem; /* 64px */
    line-height: 96px;
  }

  .hero img {
    bottom: 0;
    width: 40em; /* 640px */
    right: 1rem;
  }
}
</style>
