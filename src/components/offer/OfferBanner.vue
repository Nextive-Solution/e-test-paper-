<template>
  <div class="w-full flex justify-center py-6 md:py-12">
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
  batch: {
    type: String,
    default: null
  }
});
</script>
