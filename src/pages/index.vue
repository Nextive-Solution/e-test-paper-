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
  <div class="w-full">
    <img loading="lazy" class="w-full" src="/banner/Liliputad.jpg" alt="cover"/>
  </div>
<!--  <div>-->
<!--    <teachers-opinion/>-->
<!--  </div>-->
  <div id="orderSection" class="bg-[#e7f3fc]">
    <order-section/>
  </div>
</template>
