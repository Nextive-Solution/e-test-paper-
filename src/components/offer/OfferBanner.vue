<template>
  <div class="w-full flex flex-col items-center py-6 md:py-12">
    <h1 v-if="title" class="text-[22px] md:text-[40px] font-[800] text-[#0d568b] text-center mb-2 md:mb-3 font-['Hind_Siliguri']">
      {{ title }}
    </h1>
    <p v-if="subtitle" class="text-[14px] md:text-[20px] font-[600] text-[#2f8ce2] text-center mb-4 md:mb-6 max-w-2xl px-4 font-['Hind_Siliguri']">
      {{ subtitle }}
    </p>
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
  },
  subtitle: {
    type: String,
    default: ''
  }
});
</script>
