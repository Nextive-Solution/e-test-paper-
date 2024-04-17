<template>
  <div class="container mx-auto py-12">
    <div class="text-center">
      <p class="2xl:text-[46px] font-[700] text-[#0381e0]">প্রয়োজনে কল করুন- 8801646664222</p>
    </div>
    <div class="text-center pt-8">
      <p class="2xl:text-[26px]  text-[#000000] font-[600]">অর্ডারটি কনফার্ম করতে, আপনার নাম, ঠিকানা ও ফোন নাম্বারটি দিয়ে "অর্ডার কনফার্ম" বাটনে ক্লিক করুন।</p>
    </div>
    <div class="pt-8">
      <div class="flex justify-evenly">
        <div v-for="(item, i) in productInfo" :key="i" class="cursor-pointer rounded-md ring-2 ring-[#0381e0] bg-white px-4 py-2 w-[30%] flex items-center gap-x-4">
          <div>
            <img class="h-[90px]" src="/images/product.jpg" alt="image"/>
          </div>
          <div>
            <p class="text-[20px] font-[600]">{{ item.name }} × ১</p>
            <p class="text-[20px] font-[600]">৳ {{ item.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const productInfo = ref([
  { name:'এইচএসসি ২০২৫', price:'৯৭০.০০' },
  { name:'এইচএসসি ২০২৪', price:'৪৭৫.০০' },
])
</script>

<style lang="scss" scoped>

</style>