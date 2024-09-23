<template>
  <div>
    <div @click="findActiveLayer" class="cursor-pointer">
      <img class="h-[90px] w-full md:h-auto" loading="lazy" src="/banner/topBanner.png" alt="image"/>
    </div>
    <div class="container mx-auto flex flex-col items-center py-4 md:py-8 px-2 md:px-0">
      <div>
        <CountDown/>
      </div>
      <div class="pt-0 md:pt-0 text-center">
        <p class="text-[26px] md:text-[56px] text-[#f32120] font-[700] font-['Siyam_Rupali']">ই-টেস্টপেপার  দেশের প্রথম এবং একমাত্র ডিজিটাল টেস্টপেপার</p>
      </div>
      <div class="pt-4 md:pt-4 text-center">
        <p class="text-[18px] md:text-[30px] md:text-justify text-[#000000] font-[600] font-['Hind_Siliguri']">যা এইচএসসি শিক্ষার্থীদের <span class="text-blue-500 font-[700]">গাইডবই, সাপ্লিমেন্ট</span> এবং <span class="text-blue-500 font-[700]">টেস্টপেপার</span> এর একমাত্র ডিজিটাল বিকল্প</p>
      </div>
      <div class="pt-4 md:pt-12 pb-4 md:pb-8">
        <iframe class="h-[220px] w-full md:h-[650px] lg:w-[1000px] xl:w-[1300px] rounded-xl md:rounded-3xl"
                src="https://www.youtube.com/embed/SW4UteiYzV8?si=DzqmKioZztzTfDJC">
        </iframe>
      </div>
      <div class="pt-4 md:pt-4 flex justify-center md:justify-start">
        <cta-button button-text="৫০ হাজার শিক্ষার্থীর সাথে যুক্ত হও তুমিও" button-design="text-[16px] bg-[#48017e] hover:bg-[#ffffff] hover:ring-2 hover:ring-[#48017e] text-[#ffffff] hover:text-[#000000]" />
      </div>
    </div>
  </div>
</template>

<script setup>
import CtaButton from "~/components/common/CtaButton.vue";
import CountDown from "~/components/common/CountDown.vue";

const findActiveLayer = () => {
  const currentActiveElement = document.getElementById('orderSection');

  if (currentActiveElement) {
    currentActiveElement.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
};
</script>

<style lang="scss" scoped>

</style>