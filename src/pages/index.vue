<script setup>
import Banner from "~/components/home/Banner.vue";
import Feature from "~/components/home/Feature.vue";
import Cover from "~/components/home/Cover.vue";
import SpecialFeature from "~/components/home/SpecialFeature.vue";
import Review from "~/components/home/Review.vue";
import TeachersOpinion from "~/components/home/TeachersOpinion.vue";
import OrderSection from "~/components/home/OrderSection.vue";
</script>

<template>
    <div class="bg-[#e7f3fc]">
        <banner/>
    </div>
    <div>
      <feature/>
    </div>
    <div class="bg-[#e7f3fc]">
      <cover/>
    </div>
   <div>
     <special-feature/>
   </div>
  <div class="bg-[#e7f3fc]">
    <review/>
  </div>
  <div>
    <teachers-opinion/>
  </div>
  <div class="bg-[#e7f3fc]">
    <order-section/>
  </div>
</template>
