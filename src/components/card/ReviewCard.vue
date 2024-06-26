<template>
  <div class="md:w-full h-[220px] md:h-auto ring-2 ring-[#0381e0] rounded-2xl">
    <div class="flex flex-col items-center rounded-t-2xl bg-[#0062a8]">
      <div class="flex justify-center -mt-[50px] ">
        <img class="h-[100px] w-[100px] md:h-[90px] md:w-[90px] bg-[#fff]  ring-2 ring-[#0381e0]  rounded-full" :src="item.image" alt="image"/>
      </div>
    </div>
    <div class="bg-[#0062a8] w-full text-center py-2">
      <p class="text-[#ffffff] text-[24px] font-[600] font-['Hind_Siliguri'] text-center">{{ item.name }}</p>
      <p class="text-[#ffffff] text-[16px] font-[600] font-['Hind_Siliguri'] text-center">{{ item.institute }}</p>
    </div>
    <div class="p-4">
      <p class="text-[#000] text-[18px] font-[600] font-['Hind_Siliguri'] text-center">{{ item.review }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: {}
  }
})
</script>

<style lang="scss" scoped>
.clip-path {
  clip-path: polygon(100% 100%, 0% 100% , 0.00% 92.00%, 2.00% 91.85%, 4.00% 91.41%, 6.00% 90.70%, 8.00% 89.74%, 10.00% 88.56%, 12.00% 87.21%, 14.00% 85.74%, 16.00% 84.19%, 18.00% 82.62%, 20.00% 81.09%, 22.00% 79.65%, 24.00% 78.35%, 26.00% 77.25%, 28.00% 76.36%, 30.00% 75.74%, 32.00% 75.40%, 34.00% 75.35%, 36.00% 75.60%, 38.00% 76.13%, 40.00% 76.92%, 42.00% 77.96%, 44.00% 79.20%, 46.00% 80.60%, 48.00% 82.11%, 50.00% 83.67%, 52.00% 85.23%, 54.00% 86.73%, 56.00% 88.13%, 58.00% 89.37%, 60.00% 90.41%, 62.00% 91.21%, 64.00% 91.74%, 66.00% 91.98%, 68.00% 91.93%, 70.00% 91.59%, 72.00% 90.97%, 74.00% 90.09%, 76.00% 88.98%, 78.00% 87.68%, 80.00% 86.24%, 82.00% 84.71%, 84.00% 83.14%, 86.00% 81.59%, 88.00% 80.12%, 90.00% 78.77%, 92.00% 77.59%, 94.00% 76.63%, 96.00% 75.92%, 98.00% 75.48%, 100.00% 75.33%);
}
</style>