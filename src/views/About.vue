<template>
  <Navbar />
  <section class="w-full flex flex-col py-24">
    <div class="flex flex-col gap-6 px-12 md:px-[120px] mt-12">
      <h1 class="text-3xl text-black font-bold">Tentang Kami</h1>
      <p class="md:text-xl text-black">
        Unit Kegiatan Mahasiswa Linux and Open Source atau disebut juga UKM LAOS
        merupakan salah satu organisasi yang berfokus sebagai wadah mahasiswa
        untuk memajukan kreatifitas dalam pengembangan Linux dan Open Source di
        Fakultas Ilmu Komputer Universitas Jember. UKM LAOS berkedudukan di
        bawah naungan BEM (Badan Eksekutif Mahasiswa) Fakultas Ilmu Komputer.
        UKM LAOS didirikan pada tanggal 19 desember 2009 yang berasaskan
        “Pancasila” dan bersifat “Kekeluargaan”
      </p>
    </div>
    <div
      class="flex flex-col md:flex-row px-16 md:px-[170px] gap-10 md:gap-24 mt-16 relative"
    >
      <img
        src="../assets/logo.png"
        alt="Logo Laos"
        class="h-[298px] drop-shadow-xl"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="171"
        height="150"
        viewBox="0 0 171 150"
        fill="none"
        class="hidden md:block absolute top-[86px] left-[380px]"
      >
        <path
          d="M171 71L157.151 60.5977L155.067 77.7924L171 71ZM61 7.5C83.5169 7.5 97.3644 20.3705 110.731 34.9315C123.983 49.3668 136.865 65.6655 157.228 70.8294L157.966 67.9214C138.679 63.0305 126.471 47.6414 112.941 32.9027C99.5268 18.2898 84.9009 4.5 61 4.5V7.5Z"
          fill="#113366"
        />
        <circle
          cx="61"
          cy="6"
          r="4.5"
          fill="white"
          stroke="#113366"
          stroke-width="3"
        />
        <path
          d="M171 142L156.678 132.26L155.403 149.533L171 142ZM6 53.5C41.0977 53.5 62.4496 72.8674 83.3072 93.8796C104.072 114.798 124.431 137.493 157.305 142.489L157.755 139.523C126.055 134.705 106.412 112.897 85.4364 91.7661C64.5538 70.7287 42.4276 50.5 6 50.5V53.5Z"
          fill="#113366"
        />
        <circle
          cx="6"
          cy="52"
          r="4.5"
          fill="white"
          stroke="#113366"
          stroke-width="3"
        />
      </svg>
      <div
        class="flex flex-col items:center md:items-start text-black w-full justify-center gap-3 md:gap-8"
      >
        <h1 class="text-3xl text-black font-bold">Makna Logo UKM LAOS</h1>
        <p class="md:text-xl text-center md:text-start">
          Warna “Kuning” melambangkan dasar Universitas Jember yang berarti
          “Kejayaan”.
        </p>
        <p class="md:text-xl text-center md:text-start">
          Gambar berwarna “Hijau” merupakan logo Open Source.
        </p>
      </div>
    </div>
    <div
      class="w-full px-12 md:px-[120px] pt-6 pb-24 md:pb-12 bg-[#FFCF3D] mt-16 text-black relative"
    >
      <h1 class="text-start text-3xl font-bold mb-4">Visi</h1>
      <div
        class="bg-[#00D12E] absolute w-[90%] md:w-5/6 right-0 px-10 py-5 md:text-xl text-start rounded-l-xl"
      >
        Mendukung, mengenalkan dan mengembangkan Linux dan Open Source pada
        masyarakat luas khususnya Fakultas Ilmu Komputer.
      </div>
    </div>
    <div class="mt-32 text-black flex flex-col gap-20">
      <h1 class="text-3xl font-bold">Misi</h1>
      <div class="flex justify-center">
        <div
          class="w-[280px] md:w-[480px] bg-[#00D12E] px-[20px] md:px-[30px] py-9 relative rounded-3xl"
        >
          <div
            class="absolute text-2xl md:text-3xl font-semibold bg-[#FFCF3D] w-[56px] md:w-[84px] h-[56px] md:h-[84px] flex justify-center items-center rounded-full -left-[28px] md:-left-[42px] -top-[28px] md:-top-[42px]"
          >
            1
          </div>
          <p class="md:text-xl">
            Menjadi relasi berbagai pihak yang mendukung dan mengimplementasikan
            Linux and Open Source.
          </p>
        </div>
      </div>
      <div
        class="flex flex-col md:flex-row items-center md:items-start justify-center gap-20"
      >
        <div
          class="w-[280px] md:w-[480px] bg-[#00D12E] px-[20px] md:px-[30px] py-9 relative rounded-3xl"
        >
          <div
            class="absolute text-2xl md:text-3xl font-semibold bg-[#FFCF3D] w-[56px] md:w-[84px] h-[56px] md:h-[84px] flex justify-center items-center rounded-full -left-[28px] md:-left-[42px] -top-[28px] md:-top-[42px]"
          >
            2
          </div>
          <p class="md:text-xl">
            Mengenalkan Linux dan Open Source software kepada masyarakat
            khususnya pada instansi pendidikan.
          </p>
        </div>
        <div
          class="w-[280px] md:w-[480px] bg-[#00D12E] px-[20px] md:px-[30px] py-9 relative rounded-3xl"
        >
          <div
            class="absolute text-2xl md:text-3xl font-semibold bg-[#FFCF3D] w-[56px] md:w-[84px] h-[56px] md:h-[84px] flex justify-center items-center rounded-full -left-[28px] md:-left-[42px] -top-[28px] md:-top-[42px]"
          >
            3
          </div>
          <p class="md:text-xl">
            Ikut serta dan aktif bersama aktivis linux se-Indonesia mengenalkan
            OS Linux kepada masyarakat.
          </p>
        </div>
      </div>
    </div>
    <div>
      <h1 class="text-black text-3xl font-bold mt-24 mb-12">Pengurus</h1>
      <div class="flex justify-center gap-16 mb-24">
        <div v-for="(user, key) in pengurus.bph" :key="user.id">
          <p class="text-2xl font-semibold text-black mb-6">{{ key }}</p>
          <CardPengurus :kelas="'bg-[#00D12E]'" :nama="user" />
        </div>
      </div>
    </div>
    <div class="flex flex-col md:flex-row items-start md:justify-center gap-16">
      <div class="">
        <div class="flex md:flex-col gap-12">
          <p class="hidden md:block text-2xl font-semibold text-black">
            Pemrograman
          </p>
          <CardPengurus
            :kelas="'bg-[#663911]'"
            :nama="user"
            v-for="user in pengurus.pemrograman"
            :key="user.id"
          />
        </div>
      </div>
      <div class="flex md:flex-col gap-12">
        <p class="hidden md:block text-2xl font-semibold text-black">
          OS & Jaringan
        </p>
        <CardPengurus
          :kelas="'bg-[#077F6D]'"
          :nama="user"
          v-for="user in pengurus.jaringan"
          :key="user.id"
        />
      </div>
      <div class="flex md:flex-col gap-12">
        <p class="hidden md:block text-2xl font-semibold text-black">
          Multimedia
        </p>
        <CardPengurus
          :kelas="'bg-[#9B1233]'"
          :nama="user"
          v-for="user in pengurus.multimedia"
          :key="user.id"
        />
      </div>
      <div class="flex md:flex-col gap-12">
        <p class="hidden md:block text-2xl font-semibold text-black">Humas</p>
        <CardPengurus
          :kelas="'bg-[#626FE5]'"
          :nama="user"
          v-for="user in pengurus.humas"
          :key="user.id"
        />
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import CardPengurus from "../components/CardPengurus.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "About",
  components: {
    Navbar,
    CardPengurus,
    Footer,
  },
  data() {
    return {
      pengurus: {
        bph: {
          Sekretaris: "Shafa",
          Ketua: "Fawwas",
          Bendahara: "Lintang",
        },
        pemrograman: ["Milda", "Wisnu", "Mikli", "Kukuh", "Yoga", "Faris"],
        jaringan: ["Hilman", "Geyandra", "Juni", "Fadil"],
        multimedia: ["Dany", "Fasich", "Lovanda", "Amel"],
        humas: ["Nadya", "Farhan", "Lusy", "Edwin", "Monica", "Isna"],
      },
    };
  },
};
</script>
