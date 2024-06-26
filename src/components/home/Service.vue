<template>
  <div class="container mx-auto py-6 md:py-12 px-4 md:px-0">
    <div class="text-center">
      <p class="text-[26px] 2xl:text-[46px] font-[700] text-[#0381e0] font-['Hind_Siliguri']">একমাত্র E-TestPaper এই তুমি পাচ্ছো</p>
    </div>
    <div class="flex justify-center gap-x-12 flex-warp pt-12">
      <div v-for="(item ,i) in services" :key="i" class="">
        <div class="flex items-center gap-x-3">
          <div class="bg-[#0381e0] p-4 rounded-md">
            <img class="h-[40px]" :src="item.icon" alt="icon"/>
          </div>
          <div>
            <p class="text-[24px] font-[600] font-['Hind_Siliguri'] text-[#0381e0]">{{ item.title }}</p>
            <p class="text-[18px] font-[600] font-['Hind_Siliguri'] text-[#000000]">{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center gap-x-12 flex-warp pt-16">
      <div v-for="(item ,i) in servicesTwo" :key="i" class="">
        <div class="flex items-center gap-x-3">
          <div class="bg-[#0381e0] p-4 rounded-md">
            <img class="h-[40px]" :src="item.icon" alt="icon"/>
          </div>
          <div>
            <p class="text-[24px] font-[600] font-['Hind_Siliguri'] text-[#0381e0]">{{ item.title }}</p>
            <p class="text-[18px] font-[600] font-['Hind_Siliguri'] text-[#000000]">{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-4 md:pt-12 flex justify-center">
      <cta-button button-text="সকল ফিচার লুফে নাও" />
    </div>
  </div>
</template>

<script setup>
import CtaButton from "~/components/common/CtaButton.vue";

const services = ref([
  { title:'Board Question', content:'সকল বিষয়ের ৩ বছরের বোর্ড প্রশ্ন ও সমাধান', icon:'/icon/icon4.png' },
  { title:'College Question', content:'সকল বিষয়ের কলেজের প্রশ্ন ও সমাধান', icon: '/icon/icon3.png' },
  { title:'Chapter Wise Preparation', content:'সকল বিষয়ের সকল অধ্যায় এর CQ & MCQ', icon: '/icon/icon5.png' }
])
const servicesTwo = ref([
  { title:'Model Test', content:'ডে চ্যালেঞ্জ এবং বোর্ড স্ট্যান্ডার্ড ফাইনাল মডেল টেস্ট', icon: '/icon/icon2.png' },
  { title:'Special Features', content:'গুরুত্বপূর্ণ প্রশ্ন ফেভারিট করে রাখা ভুল করা প্রশ্ন গুলো উপর প্র্যাকটিস', icon: '/icon/icon1.png' }
])

</script>

<style lang="scss" scoped>

</style>