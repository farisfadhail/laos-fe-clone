<template>
    <Navbar />
    <section class="w-full h-96 flex justify-center items-center">
        <!-- <h1 class="text-3xl text-black font-bold">Halaman Event</h1> -->
        <img src="../assets/coming-soon-event.png" alt="" class="w-96 h-96 mt-40">
    </section>
</template>

<script>

import Navbar from '../components/Navbar.vue'

export default {
    name: 'Event',
    components: {
        Navbar
    } 
}
</script> 