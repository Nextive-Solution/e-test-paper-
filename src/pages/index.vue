<script setup>
import Banner from "~/components/home/Banner.vue";
import Feature from "~/components/home/Feature.vue";
import Cover from "~/components/home/Cover.vue";
import SpecialFeature from "~/components/home/SpecialFeature.vue";
import Review from "~/components/home/Review.vue";
import TeachersOpinion from "~/components/home/TeachersOpinion.vue";
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
    <div class="w-full">
      <img class="w-full" src="/banner/eidsalamicover.jpg" alt="cover"/>
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
  <div>
    <teachers-opinion/>
  </div>
  <div id="orderSection" class="bg-[#e7f3fc]">
    <order-section/>
  </div>
</template>
