<template>
  <div>
    <div class="text-center bg-[#0062a8] py-6">
      <p class="text-[22px] md:text-[46px] font-[700] text-[#ffffff] ">একমাত্র E-TestPaper এই তুমি পাচ্ছো</p>
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
                <p class="text-[24px] md:text-[34px] font-[600]  text-[#0381e0]">Board Question</p>
                <p class="text-[16px] md:text-[24px] font-[600]  text-[#000000]">সকল বিষয়ের ৬/৭  বছরের বোর্ড প্রশ্ন ও সমাধান</p>
              </div>
            </div>
            <div class="pl-16">
              <a href="https://play.google.com/store/apps/details?id=com.nextive.eTestPaper" target="_blank">
                <img loading="lazy" src="/media/board.gif" alt="gif"/>
              </a>
            </div>
          </div>
        </div>

        <div class="bg-[#b8e0fc]">
          <div class="container mx-auto p-4 md:p-0 md:flex justify-evenly items-center">
            <div>
              <a href="https://play.google.com/store/apps/details?id=com.nextive.eTestPaper" target="_blank">
                <img loading="lazy" src="/media/college.gif" alt="gif"/>
              </a>
            </div>
            <div class="flex items-center gap-x-3">
              <div class="bg-[#0381e0] p-2 md:p-4 rounded-md">
                <img loading="lazy" class="h-[40px] md:h-[60px]" src="/icon/icon3.png" alt="icon"/>
              </div>
              <div>
                <p class="text-[24px] md:text-[34px] font-[600]  text-[#0381e0]">College Question</p>
                <p class="text-[16px] md:text-[24px] font-[600] text-[#000000]">সকল বিষয়ের ৩/৪ বছরের কলেজের প্রশ্ন ও সমাধান</p>
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
                <p class="text-[24px] md:text-[34px] font-[600]  text-[#0381e0]">Chapter Wise Preparation</p>
                <p class="text-[16px] md:text-[24px] font-[600]  text-[#000000]">সকল বিষয়ের সকল অধ্যায় এর CQ & MCQ</p>
              </div>
            </div>
            <div class="pl-12">
              <a href="https://play.google.com/store/apps/details?id=com.nextive.eTestPaper" target="_blank">
                <img loading="lazy" src="/media/chapterwise.gif" alt="gif"/>
              </a>
            </div>
          </div>
        </div>

        <div class="bg-[#b8e0fc]">
          <div class="container mx-auto p-4 md:p-0 md:flex justify-evenly items-center">
            <div class="pl-14">
              <div class="">
                <a href="https://play.google.com/store/apps/details?id=com.nextive.eTestPaper" target="_blank">
                  <img loading="lazy" src="/media/modeltest.gif" alt="gif"/>
                </a>
              </div>
            </div>
            <div class="flex items-center gap-x-3">
              <div class="bg-[#0381e0] p-2 md:p-4 rounded-md">
                <img loading="lazy" class="h-[40px] md:h-[60px]" src="/icon/icon2.png" alt="icon"/>
              </div>
              <div>
                <p class="text-[24px] md:text-[34px] font-[600]  text-[#0381e0]">Model Test</p>
                <p class="text-[16px] md:text-[24px] font-[600] text-[#000000]">৫০ ডে চ্যালেঞ্জ এবং বোর্ড স্ট্যান্ডার্ড ফাইনাল মডেল টেস্ট</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="block md:hidden">
        <div class="bg-[#fff]">
          <div v-for="(item, i) in services" :key="i" class="container mx-auto p-4 md:p-0">
            <div class="flex items-center justify-evenly flex-warp gap-x-3 pb-4">
              <div class="bg-[#0381e0] px-4 py-3 rounded-md">
                <img loading="lazy" class="h-[50px] w-[50px] md:w-auto md:h-[60px]" :src="item.icon" alt="icon"/>
              </div>
              <div class="">
                <p class="text-[20px] md:text-[34px] font-[600]  text-[#0381e0]">{{ item.title }}</p>
                <p class="text-[16px] md:text-[24px] font-[600]  text-[#000000]">{{ item.content }}</p>
              </div>
            </div>
            <div>
              <a href="https://play.google.com/store/apps/details?id=com.nextive.eTestPaper" target="_blank">
                <img :src="item.video" alt="gif"/>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-4 md:pt-12 flex justify-center px-2">
        <cta-button button-text="ই-টেস্টপেপার এর সবগুলো ফিচার এক্সেস করো" button-design="text-[18px] bg-[#f7a201] hover:bg-[#ffffff] hover:ring-2 hover:ring-[#f7a201] text-[#ffffff] hover:text-[#000000]"  />
      </div>
    </div>
  </div>
</template>

<script setup>
import CtaButton from "~/components/common/CtaButton.vue";

const services = ref([
  { title:'Board Question', content:'সকল বিষয়ের ৬/৭ বছরের বোর্ড প্রশ্ন ও সমাধান', icon:'/icon/icon4.png',video:'/media/board.gif' },
  { title:'College Question', content:'সকল বিষয়ের ৩/৪ বছরের কলেজের প্রশ্ন ও সমাধান', icon: '/icon/icon3.png',video:'/media/college.gif' },
  { title:'Chapter Wise Preparation', content:'সকল বিষয়ের সকল অধ্যায় এর CQ & MCQ', icon: '/icon/icon5.png',video:'/media/chapterwise.gif' },
  { title:'Model Test', content:'৫০ ডে চ্যালেঞ্জ এবং বোর্ড স্ট্যান্ডার্ড ফাইনাল মডেল টেস্ট', icon: '/icon/icon2.png',video:'/media/modeltest.gif' },
])
const servicesTwo = ref([
  { title:'Model Test', content:'ডে চ্যালেঞ্জ এবং বোর্ড স্ট্যান্ডার্ড ফাইনাল মডেল টেস্ট', icon: '/icon/icon2.png' },
  { title:'Special Features', content:'গুরুত্বপূর্ণ প্রশ্ন ফেভারিট করে রাখা ভুল করা প্রশ্ন গুলো উপর প্র্যাকটিস', icon: '/icon/icon1.png' }
])

</script>

<style lang="scss" scoped>

</style>