<template>
    <div class="bg-[#E1E1E1] w-[246px] h-[246px] rounded-3xl flex justify-center relative">
        <img :src="'../src/assets/foto-pengurus/' + nama + '.png'" :alt="'Foto ' + nama" class="w-full object-cover h-auto">
        <div class="absolute w-[212px] h-[52px] bg-[#00D12E] rounded-full -bottom-[26px] flex justify-center items-center text-xl text-white font-semibold" :class="kelas">{{nama}}</div>
    </div>
</template>

<script>
export default {
    name: 'CardPengurus',
    components: {},
    props: ['kelas', 'nama']
}
</script>