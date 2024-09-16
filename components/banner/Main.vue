<template>
  <div class="w-full h-full flex flex-col justify-start items-start mb-[60px] md:mb-0">
    <div class="w-full h-full flex flex-row flex-wrap">
      <div class="w-full lg:w-3/5 h-full mt-[30px] px-0 lg:px-[25px] flex flex-col justify-start items-start">
        <div class="w-full gap-[20px] py-[16px] px-[40px] h-full border border-[#A9A7A7] rounded-[20px] flex flex-col justify-start items-start">
          <h3 class="font-medium text-[20px]">بنر مخصوص شما برای پست</h3>
          <img :src="banner.post_banner" alt="">
          <a :href="banner.post_banner" download class="mx-auto mt-[67px] max-w-[360px] cursor-pointer text-[#141414] flex flex-row justify-center items-center rounded-[10px] bg-[#1EFF81] h-[48px] w-full">
            دریافت بنر
          </a>
        </div>
      </div>
      <div class="w-full lg:w-2/5 h-full mt-[30px] px-0 lg:px-[25px] flex flex-col justify-start items-start">
        <div class="w-full gap-[20px] py-[16px] px-[40px] h-full border border-[#A9A7A7] rounded-[20px] flex flex-col justify-start items-start">
          <h3 class="font-medium text-[20px]">بنر مخصوص شما برای استوری</h3>
          <img :src="banner.story_banner" alt="">
          <a :href="banner.story_banner" download class="mx-auto mt-[67px] max-w-[360px] cursor-pointer text-[#141414] flex flex-row justify-center items-center rounded-[10px] bg-[#1EFF81] h-[48px] w-full">
            دریافت بنر
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const banner = ref<IBanner>({
  id: 1,
  post_banner: '/images/banner/post_banner.png',
  story_banner: '/images/banner/story_banner.png'
})

</script>

<style scoped>

</style>