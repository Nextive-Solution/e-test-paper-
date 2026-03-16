<template>
  <div class="w-full flex flex-col items-center py-6 md:py-12">
    <h1 v-if="title" class="text-[22px] md:text-[40px] font-[800] text-[#0d568b] text-center mb-4 md:mb-6 font-['Hind_Siliguri']">
      {{ title }}
    </h1>
    <OfferCountDown :offer="offer" />
  </div>
</template>

<script setup>
import OfferCountDown from "~/components/common/OfferCountDown.vue";

defineProps({
  offer: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: ''
  }
});
</script>
