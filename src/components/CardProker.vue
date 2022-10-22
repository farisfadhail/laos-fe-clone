<template>
    <div class="flex flex-col gap-4 items-center w-[300px]">
        <img :src="item.img" alt="" class="rounded-full w-[242px] h-[242px]">
        <h3 class="text-2xl text-black font-bold">{{ item.title }}</h3>
        <!-- <p class="text-lg text-black font-medium">{{ item.content }}</p>
        <router-link to="/" class="px-12 py-2 text-white bg-[#00D12E] rounded-full">Details</router-link> -->
      </div>
</template>

<script>
export default {
    name: 'CardProker',
    components: {},
    props: ['item']
}
</script>