<template>
  <div>
    <div class="text-center bg-[#0062a8] py-6">
      <p class="text-[22px] 2xl:text-[46px] font-[700] text-[#ffffff] font-['Hind_Siliguri']">একমাত্র E-TestPaper এই তুমি পাচ্ছো</p>
    </div>
    <div class="py-0 md:py-0  md:px-0">
      <div class="hidden md:block">
        <div class="bg-white">
          <div class="container mx-auto p-4 md:p-0 md:flex justify-evenly items-center">
            <div class=" flex items-center gap-x-3">
              <div class="bg-[#0381e0] p-2 md:p-4 rounded-md">
                <img loading="lazy" class="h-[40px] md:h-[60px]" src="/icon/icon4.png" alt="icon"/>
              </div>
              <div>
                <p class="text-[24px] md:text-[34px] font-[600] font-['Hind_Siliguri'] text-[#0381e0]">Board Question</p>
                <p class="text-[16px] md:text-[24px] font-[600] font-['Hind_Siliguri'] text-[#000000]">সকল বিষয়ের ৩ বছরের বোর্ড প্রশ্ন ও সমাধান</p>
              </div>
            </div>
            <div class="pl-16">
              <div class="">
                <img loading="lazy" src="/media/board.gif" alt="gif"/>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-[#b8e0fc]">
          <div class="container mx-auto p-4 md:p-0 md:flex justify-evenly items-center">
            <div>
              <div class="">
                <img loading="lazy" src="/media/college.gif" alt="gif"/>
              </div>
            </div>
            <div class="flex items-center gap-x-3">
              <div class="bg-[#0381e0] p-2 md:p-4 rounded-md">
                <img loading="lazy" class="h-[40px] md:h-[60px]" src="/icon/icon3.png" alt="icon"/>
              </div>
              <div>
                <p class="text-[24px] md:text-[34px] font-[600] font-['Hind_Siliguri'] text-[#0381e0]">College Question</p>
                <p class="text-[16px] md:text-[24px] font-[600] font-['Hind_Siliguri'] text-[#000000]">সকল বিষয়ের কলেজের প্রশ্ন ও সমাধান</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white">
          <div class="container mx-auto p-4 md:p-0 md:flex justify-evenly items-center">
            <div class="flex items-center gap-x-3">
              <div class="bg-[#0381e0] p-2 md:p-4 rounded-md">
                <img loading="lazy" class="h-[40px] md:h-[60px]" src="/icon/icon5.png" alt="icon"/>
              </div>
              <div>
                <p class="text-[24px] md:text-[34px] font-[600] font-['Hind_Siliguri'] text-[#0381e0]">Chapter Wise Preparation</p>
                <p class="text-[16px] md:text-[24px] font-[600] font-['Hind_Siliguri'] text-[#000000]">সকল বিষয়ের সকল অধ্যায় এর CQ & MCQ</p>
              </div>
            </div>
            <div class="pl-12">
              <div class="">
                <img loading="lazy" src="/media/chapterwise.gif" alt="gif"/>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-[#b8e0fc]">
          <div class="container mx-auto p-4 md:p-0 md:flex justify-evenly items-center">
            <div class="pl-14">
              <div class="">
                <img loading="lazy" src="/media/modeltest.gif" alt="gif"/>
              </div>
            </div>
            <div class="flex items-center gap-x-3">
              <div class="bg-[#0381e0] p-2 md:p-4 rounded-md">
                <img loading="lazy" class="h-[40px] md:h-[60px]" src="/icon/icon2.png" alt="icon"/>
              </div>
              <div>
                <p class="text-[24px] md:text-[34px] font-[600] font-['Hind_Siliguri'] text-[#0381e0]">Model Test</p>
                <p class="text-[16px] md:text-[24px] font-[600] font-['Hind_Siliguri'] text-[#000000]">ডে চ্যালেঞ্জ এবং বোর্ড স্ট্যান্ডার্ড ফাইনাল মডেল টেস্ট</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="block md:hidden">
        <div class="bg-[#fff]">
          <div v-for="(item, i) in services" :key="i" class="container mx-auto p-4 md:p-0">
            <div class="flex items-center gap-x-3 pb-4">
              <div class="bg-[#0381e0] p-4 md:p-4 rounded-md">
                <img loading="lazy" class="h-[50px] md:h-[60px]" :src="item.icon" alt="icon"/>
              </div>
              <div>
                <p class="text-[20px] md:text-[34px] font-[600] font-['Hind_Siliguri'] text-[#0381e0]">{{ item.title }}</p>
                <p class="text-[16px] md:text-[24px] font-[600] font-['Hind_Siliguri'] text-[#000000]">{{ item.content }}</p>
              </div>
            </div>
            <div>
              <div class="">
                <img :src="item.video" alt="gif"/>
              </div>
            </div>
          </div>
        </div>
      </div>

<!--      <div class="pt-4 md:pt-12 flex justify-center">-->
<!--        <cta-button button-text="সকল ফিচার লুফে নাও" />-->
<!--      </div>-->
    </div>
  </div>
</template>

<script setup>
import CtaButton from "~/components/common/CtaButton.vue";

const services = ref([
  { title:'Board Question', content:'সকল বিষয়ের ৩ বছরের বোর্ড প্রশ্ন ও সমাধান', icon:'/icon/icon4.png',video:'/media/board.gif' },
  { title:'College Question', content:'সকল বিষয়ের কলেজের প্রশ্ন ও সমাধান', icon: '/icon/icon3.png',video:'/media/college.gif' },
  { title:'Chapter Wise Preparation', content:'সকল বিষয়ের সকল অধ্যায় এর CQ & MCQ', icon: '/icon/icon5.png',video:'/media/chapterwise.gif' },
  { title:'Model Test', content:'ডে চ্যালেঞ্জ এবং বোর্ড স্ট্যান্ডার্ড ফাইনাল মডেল টেস্ট', icon: '/icon/icon2.png',video:'/media/modeltest.gif' },
])
const servicesTwo = ref([
  { title:'Model Test', content:'ডে চ্যালেঞ্জ এবং বোর্ড স্ট্যান্ডার্ড ফাইনাল মডেল টেস্ট', icon: '/icon/icon2.png' },
  { title:'Special Features', content:'গুরুত্বপূর্ণ প্রশ্ন ফেভারিট করে রাখা ভুল করা প্রশ্ন গুলো উপর প্র্যাকটিস', icon: '/icon/icon1.png' }
])

</script>

<style lang="scss" scoped>

</style>