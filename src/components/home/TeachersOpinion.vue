<template>
  <div class="container mx-auto py-12">
    <div class="text-center">
      <p class="2xl:text-[46px] font-[700] text-[#0381e0]">কেন শিক্ষার্থীরা ই-টেস্টপেপার কে বেছে নিচ্ছে?</p>
    </div>
    <div class="flex justify-center w-full pt-12">
      <div class="grid grid-cols-3 gap-6">
        <div v-for="(item ,i) in videos" :key="i" >
          <div>
            <iframe  class="ring-2 ring-[#0381e0]" width="412" height="312"
                     :src="item.link">
            </iframe>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center pt-12">
      <button class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-[#0381e0] hover:bg-[#ffffff]  hover:ring-2 ring-[#0381e0] text-[#ffffff] hover:text-[#000000] py-3 px-6 rounded-[30px] font-[600]">হাজারো শিক্ষার্থীর সাথে যুক্ত হও</button>
    </div>
  </div>
</template>

<script setup>
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