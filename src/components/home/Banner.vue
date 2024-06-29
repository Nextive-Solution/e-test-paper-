<template>
  <div>
    <div>
      <img class="h-[90px] w-full md:h-auto" loading="lazy" src="/banner/banner.png" alt="image"/>
    </div>
    <div class="container mx-auto flex flex-col items-center py-4 md:py-8 px-2 md:px-0">
      <div>
        <CountDown/>
      </div>
      <div class="pt-0 md:pt-0 text-center">
        <p class="text-[26px] md:text-[56px] text-[#f32120] font-[700] font-['Siyam_Rupali']">ই-টেস্টেপেপার  দেশের প্রথম এবং একমাত্র ডিজিটাল টেস্টপেপার</p>
      </div>
      <div class="pt-4 md:pt-4 text-center">
        <p class="text-[18px] md:text-[30px] md:text-justify text-[#000000] font-[600] font-['Hind_Siliguri']">যা এইচএসসি শিক্ষার্থীদের <span class="text-blue-500 font-[700]">গাইডবই, সাপ্লিমেন্ট</span> এবং <span class="text-blue-500 font-[700]">টেস্টপেপার</span> এর একমাত্র ডিজিটাল বিকল্প</p>
      </div>
      <div class="pt-4 md:pt-12 pb-4 md:pb-8">
        <iframe class="h-[220px] w-full md:h-[512px] md:w-[1024px] rounded-xl md:rounded-3xl"
                src="https://www.youtube.com/embed/w8S_r1jgkl4?si=dnFUpTDu5YAVc7yt">
        </iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import CtaButton from "~/components/common/CtaButton.vue";
import CountDown from "~/components/common/CountDown.vue";
</script>

<style lang="scss" scoped>

</style>