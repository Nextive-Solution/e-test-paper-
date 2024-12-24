<script setup>
import Banner from "~/components/home/Banner.vue";
import Feature from "~/components/home/Feature.vue";
import Review from "~/components/home/Review.vue";
import OrderSection from "~/components/home/OrderSection.vue";
import Service from "~/components/home/Service.vue";
</script>

<template>
    <div class="bg-[#f6fcfd]">
        <banner/>
    </div>
    <div class="bg-[#b8e0fc]">
      <feature/>
    </div>
    <div>
      <service/>
    </div>
<!--    <div class="bg-[#e7f3fc]">-->
<!--      <cover/>-->
<!--    </div>-->
<!--   <div>-->
<!--     <special-feature/>-->
<!--   </div>-->
  <div>
    <review/>
  </div>
 <div class="w-full flex justify-center md:mb-12 cursor-pointer" @click="findActiveLayer">
   <img loading="lazy" class=" md:w-[1200px] md:h-[640px] rounded-lg" src="/banner/offerBanner2.jpg" alt="cover"/>
 </div>
<!--  <div>-->
<!--    <teachers-opinion/>-->
<!--  </div>-->
  <div id="orderSection" class="bg-[#e7f3fc]">
    <order-section/>
  </div>
</template>


<script>
const findActiveLayer = () => {
  const currentActiveElement = document.getElementById('orderSection');

  if (currentActiveElement) {
    currentActiveElement.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
};
</script>