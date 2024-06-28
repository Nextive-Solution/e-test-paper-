<template>
  <div>
    <div>
      <img loading="lazy" src="/banner/banner.jpg" alt="image"/>
    </div>
    <div class="container mx-auto flex flex-col items-center py-4 md:py-8 px-4 md:px-0">
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
        <iframe class="h-[220px] 2xl:h-[512px] 2xl:w-[1024px] rounded-3xl"
                src="https://www.youtube.com/embed/pRYcDAdytKY?si=YLgZpJDlLFbjri4K">
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