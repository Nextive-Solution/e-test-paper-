<template>
  <div class="container mx-auto py-6 md:py-12 px-4 md:px-0">
    <div class="text-center">
      <p class="text-[26px] 2xl:text-[46px] font-[700] text-[#0381e0]">কেন শিক্ষার্থীরা ই-টেস্টপেপার কে বেছে নিচ্ছে?</p>
    </div>
    <div class="flex justify-center w-full pt-6 md:pt-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="(item ,i) in videos" :key="i" >
          <div>
            <iframe  class="ring-2 ring-[#0381e0] h-[200px] md:w-[412px] md:h-[312px]"
                     :src="item.link">
            </iframe>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center pt-12">
      <cta-button button-text="হাজারো শিক্ষার্থীর সাথে যুক্ত হও" />
    </div>
  </div>
</template>

<script setup>
import CtaButton from "~/components/common/CtaButton.vue";

const videos = ref([
  { link:'https://www.youtube.com/embed/_-h2tCE11-Y?si=7fwrztie__O9Rmji' },
  { link:'https://www.youtube.com/embed/XwfXr9CBMs8?si=cabY6KB2w9Oh6z6z' },
  { link:'https://www.youtube.com/embed/pOBJvplBa60?si=S9pm28LDkuMAQakf' },
  { link:'https://www.youtube.com/embed/JJ3Mj0riWGA?si=crx4I6-eMHJ28cMU' },
  { link:'https://www.youtube.com/embed/LvwCdQlVdzA?si=XZLTp0syfrt7Y234' },
  { link:'https://www.youtube.com/embed/NVcGkVSpzJo?si=cQm5f8n7ZwNDwGfM' }
])
</script>

<style lang="scss" scoped>

</style>